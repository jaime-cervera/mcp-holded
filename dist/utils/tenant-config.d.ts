import { TenantConfig } from './tenant-context.js';
/**
 * Load tenant configurations from environment variables
 *
 * Supports two modes:
 *
 * 1. Single tenant (legacy mode):
 *    - HOLDED_API_KEY=xxx
 *
 * 2. Multi-tenant mode:
 *    - TENANT_1_NAME=Acme Corp
 *    - TENANT_1_API_KEY=xxx
 *    - TENANT_1_ENABLED=true
 *    - TENANT_2_NAME=Beta Inc
 *    - TENANT_2_API_KEY=yyy
 *    - TENANT_2_ENABLED=true
 *
 * The loader will automatically detect which mode to use based on available env vars.
 */
export declare function loadTenantConfigs(): TenantConfig[];
/**
 * Validate that at least one tenant configuration is available
 */
export declare function validateTenantConfigs(configs: TenantConfig[]): void;
//# sourceMappingURL=tenant-config.d.ts.map