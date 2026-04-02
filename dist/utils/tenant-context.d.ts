import { HoldedClient } from '../holded-client.js';
/**
 * Tenant configuration interface
 */
export interface TenantConfig {
    id: string;
    name: string;
    apiKey: string;
    enabled: boolean;
    metadata?: Record<string, unknown>;
}
/**
 * Tenant context for a request
 */
export interface TenantContext {
    tenantId: string;
    client: HoldedClient;
    config: TenantConfig;
}
/**
 * Multi-tenancy manager that handles multiple Holded organizations/tenants
 * Each tenant has its own API key and HoldedClient instance
 */
export declare class TenantManager {
    private tenants;
    private defaultTenantId;
    /**
     * Register a new tenant
     */
    registerTenant(config: TenantConfig): void;
    /**
     * Get tenant context by ID
     */
    getTenant(tenantId: string): TenantContext | null;
    /**
     * Get default tenant context
     */
    getDefaultTenant(): TenantContext | null;
    /**
     * Set default tenant
     */
    setDefaultTenant(tenantId: string): void;
    /**
     * List all registered tenant IDs
     */
    listTenants(): string[];
    /**
     * Check if a tenant is enabled
     */
    isTenantEnabled(tenantId: string): boolean;
    /**
     * Remove a tenant
     */
    removeTenant(tenantId: string): void;
    /**
     * Get tenant count
     */
    getTenantCount(): number;
}
/**
 * Extract tenant ID from arguments if present
 * Supports both direct tenantId field and nested in metadata
 */
export declare function extractTenantId(args: unknown): string | null;
//# sourceMappingURL=tenant-context.d.ts.map