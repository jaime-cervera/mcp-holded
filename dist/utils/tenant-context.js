import { HoldedClient } from '../holded-client.js';
/**
 * Multi-tenancy manager that handles multiple Holded organizations/tenants
 * Each tenant has its own API key and HoldedClient instance
 */
export class TenantManager {
    tenants = new Map();
    defaultTenantId = null;
    /**
     * Register a new tenant
     */
    registerTenant(config) {
        if (this.tenants.has(config.id)) {
            throw new Error(`Tenant '${config.id}' is already registered`);
        }
        const client = new HoldedClient(config.apiKey);
        const context = {
            tenantId: config.id,
            client,
            config,
        };
        this.tenants.set(config.id, context);
        // First registered tenant becomes default
        if (this.defaultTenantId === null) {
            this.defaultTenantId = config.id;
        }
    }
    /**
     * Get tenant context by ID
     */
    getTenant(tenantId) {
        return this.tenants.get(tenantId) || null;
    }
    /**
     * Get default tenant context
     */
    getDefaultTenant() {
        if (this.defaultTenantId === null) {
            return null;
        }
        return this.getTenant(this.defaultTenantId);
    }
    /**
     * Set default tenant
     */
    setDefaultTenant(tenantId) {
        if (!this.tenants.has(tenantId)) {
            throw new Error(`Tenant '${tenantId}' not found`);
        }
        this.defaultTenantId = tenantId;
    }
    /**
     * List all registered tenant IDs
     */
    listTenants() {
        return Array.from(this.tenants.keys());
    }
    /**
     * Check if a tenant is enabled
     */
    isTenantEnabled(tenantId) {
        const tenant = this.getTenant(tenantId);
        return tenant !== null && tenant.config.enabled;
    }
    /**
     * Remove a tenant
     */
    removeTenant(tenantId) {
        this.tenants.delete(tenantId);
        if (this.defaultTenantId === tenantId) {
            // Set new default to first available tenant
            const firstTenant = this.tenants.keys().next();
            this.defaultTenantId = firstTenant.done ? null : firstTenant.value;
        }
    }
    /**
     * Get tenant count
     */
    getTenantCount() {
        return this.tenants.size;
    }
}
/**
 * Extract tenant ID from arguments if present
 * Supports both direct tenantId field and nested in metadata
 */
export function extractTenantId(args) {
    if (typeof args !== 'object' || args === null) {
        return null;
    }
    const obj = args;
    // Direct tenantId field
    if (typeof obj.tenantId === 'string' && obj.tenantId.length > 0) {
        return obj.tenantId;
    }
    // Nested in metadata
    if (typeof obj.metadata === 'object' && obj.metadata !== null) {
        const metadata = obj.metadata;
        if (typeof metadata.tenantId === 'string' && metadata.tenantId.length > 0) {
            return metadata.tenantId;
        }
    }
    return null;
}
//# sourceMappingURL=tenant-context.js.map