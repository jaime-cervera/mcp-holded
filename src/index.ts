#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';

import { RateLimiter } from './utils/rate-limiter.js';
import { TenantManager, extractTenantId } from './utils/tenant-context.js';
import { loadTenantConfigs, validateTenantConfigs } from './utils/tenant-config.js';
import { getDocumentTools } from './tools/documents.js';
import { getContactTools } from './tools/contacts.js';
import { getProductTools } from './tools/products.js';
import { getTreasuryTools } from './tools/treasuries.js';
import { getExpensesAccountTools } from './tools/expenses-accounts.js';
import { getNumberingSeriesTools } from './tools/numbering-series.js';
import { getSalesChannelTools } from './tools/sales-channels.js';
import { getPaymentTools } from './tools/payments.js';
import { getTaxTools } from './tools/taxes.js';
import { getContactGroupTools } from './tools/contact-groups.js';
import { getRemittanceTools } from './tools/remittances.js';
import { getServiceTools } from './tools/services.js';
import { getWarehouseTools } from './tools/warehouses.js';

/**
 * Coerce arguments to match JSON schema types.
 * LLM/MCP layer sometimes sends wrong types (string instead of integer/boolean/array).
 */
function coerceArguments(args: Record<string, unknown>, schema: { properties?: Record<string, { type?: string; items?: unknown }> }): Record<string, unknown> {
  const props = schema?.properties || {};
  const coerced: Record<string, unknown> = { ...args };

  for (const [key, value] of Object.entries(coerced)) {
    const prop = props[key];
    if (!prop || !prop.type) continue;

    if (prop.type === 'integer' && typeof value === 'string') {
      const n = parseInt(value, 10);
      if (!isNaN(n)) coerced[key] = n;
    } else if (prop.type === 'integer' && typeof value === 'number') {
      coerced[key] = Math.round(value);
    } else if (prop.type === 'number' && typeof value === 'string') {
      const n = parseFloat(value);
      if (!isNaN(n)) coerced[key] = n;
    } else if (prop.type === 'boolean' && typeof value === 'string') {
      coerced[key] = ['true', '1', 'yes', 'si', 'sí'].includes(value.toLowerCase());
    } else if (prop.type === 'boolean' && typeof value === 'number') {
      coerced[key] = value !== 0;
    } else if (prop.type === 'array' && typeof value === 'string') {
      try {
        const parsed = JSON.parse(value);
        coerced[key] = Array.isArray(parsed) ? parsed : [value];
      } catch {
        coerced[key] = [value];
      }
    } else if (prop.type === 'array' && !Array.isArray(value)) {
      coerced[key] = [value];
    } else if (prop.type === 'object' && typeof value === 'string') {
      try {
        const parsed = JSON.parse(value);
        if (typeof parsed === 'object' && parsed !== null) coerced[key] = parsed;
      } catch {
        // leave as-is
      }
    } else if (prop.type === 'string' && typeof value !== 'string') {
      coerced[key] = String(value);
    }
  }

  return coerced;
}

// Initialize multi-tenancy support
const tenantConfigs = loadTenantConfigs();
validateTenantConfigs(tenantConfigs);

const tenantManager = new TenantManager();
for (const config of tenantConfigs) {
  tenantManager.registerTenant(config);
}

// Get default client for tools registration (backward compatibility)
const defaultTenant = tenantManager.getDefaultTenant();
if (!defaultTenant) {
  console.error('Error: No default tenant available');
  process.exit(1);
}
const client = defaultTenant.client;

// Initialize rate limiter with per-tool configuration
const rateLimiter = new RateLimiter({
  maxRequests: 100, // Default: 100 requests per minute
  windowMs: 60000, // 1 minute window
  toolLimits: {
    // Stricter limits for destructive operations
    create_document: { maxRequests: 20, windowMs: 60000 },
    delete_document: { maxRequests: 10, windowMs: 60000 },
    create_contact: { maxRequests: 20, windowMs: 60000 },
    delete_contact: { maxRequests: 10, windowMs: 60000 },
    update_contact: { maxRequests: 30, windowMs: 60000 },
    update_document: { maxRequests: 30, windowMs: 60000 },
    // More lenient for read operations
    list_contacts: { maxRequests: 200, windowMs: 60000 },
    list_documents: { maxRequests: 200, windowMs: 60000 },
    get_contact: { maxRequests: 200, windowMs: 60000 },
    get_document: { maxRequests: 200, windowMs: 60000 },
  },
});

// Collect all tools
const allTools = {
  ...getDocumentTools(client),
  ...getContactTools(client),
  ...getProductTools(client),
  ...getTreasuryTools(client),
  ...getExpensesAccountTools(client),
  ...getNumberingSeriesTools(client),
  ...getSalesChannelTools(client),
  ...getPaymentTools(client),
  ...getTaxTools(client),
  ...getContactGroupTools(client),
  ...getRemittanceTools(client),
  ...getServiceTools(client),
  ...getWarehouseTools(client),
};

// Create server
const server = new Server(
  {
    name: 'mcp-holded',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: Object.entries(allTools).map(([name, tool]) => ({
      name,
      description: tool.description,
      inputSchema: tool.inputSchema,
    })),
  };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  // Extract tenant ID from request arguments
  const requestedTenantId = extractTenantId(args);

  // Get tenant context (use requested tenant or default)
  const tenantContext = requestedTenantId
    ? tenantManager.getTenant(requestedTenantId)
    : tenantManager.getDefaultTenant();

  if (!tenantContext) {
    const errorMsg = requestedTenantId
      ? `Tenant '${requestedTenantId}' not found`
      : 'No default tenant available';
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({ error: errorMsg }),
        },
      ],
      isError: true,
    };
  }

  // Check if tenant is enabled
  if (!tenantContext.config.enabled) {
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({
            error: 'Tenant disabled',
            message: `Tenant '${tenantContext.tenantId}' is currently disabled`,
          }),
        },
      ],
      isError: true,
    };
  }

  // Get tools with tenant-specific client
  const tenantTools = {
    ...getDocumentTools(tenantContext.client),
    ...getContactTools(tenantContext.client),
    ...getProductTools(tenantContext.client),
    ...getTreasuryTools(tenantContext.client),
    ...getExpensesAccountTools(tenantContext.client),
    ...getNumberingSeriesTools(tenantContext.client),
    ...getSalesChannelTools(tenantContext.client),
    ...getPaymentTools(tenantContext.client),
    ...getTaxTools(tenantContext.client),
    ...getContactGroupTools(tenantContext.client),
    ...getRemittanceTools(tenantContext.client),
    ...getServiceTools(tenantContext.client),
    ...getWarehouseTools(tenantContext.client),
  };

  const tool = tenantTools[name as keyof typeof tenantTools];
  if (!tool) {
    throw new Error(`Unknown tool: ${name}`);
  }

  // Check rate limit before executing tool
  const rateLimit = await rateLimiter.checkLimit(name);
  if (!rateLimit.allowed) {
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({
            error: 'Rate limit exceeded',
            message: `Too many requests for tool '${name}'. Please retry after ${rateLimit.retryAfter} seconds.`,
            retryAfter: rateLimit.retryAfter,
            resetTime: rateLimit.resetTime,
          }),
        },
      ],
      isError: true,
    };
  }

  // Coerce argument types based on tool's inputSchema (LLM sends strings for numbers/booleans/arrays)
  const coercedArgs = coerceArguments(args || {}, tool.inputSchema);

  try {
    const result = await tool.handler(coercedArgs as never);
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(result),
        },
      ],
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return {
      content: [
        {
          type: 'text',
          text: `Error: ${errorMessage}`,
        },
      ],
      isError: true,
    };
  }
});

// Start server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Holded MCP Server running on stdio');
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
