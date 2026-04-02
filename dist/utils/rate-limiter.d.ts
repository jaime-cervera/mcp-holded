/**
 * Rate Limiter with Sliding Window Algorithm
 *
 * Implements per-tool rate limiting with configurable limits.
 * Supports multi-tenancy preparation (tenantId optional for now).
 */
export interface RateLimitConfig {
    /**
     * Maximum requests allowed in the time window
     */
    maxRequests: number;
    /**
     * Time window in milliseconds
     */
    windowMs: number;
    /**
     * Optional: specific limits per tool
     */
    toolLimits?: Record<string, {
        maxRequests: number;
        windowMs: number;
    }>;
}
export interface RateLimitResult {
    allowed: boolean;
    remaining: number;
    resetTime: number;
    retryAfter?: number;
}
/**
 * Sliding Window Rate Limiter
 * Uses in-memory storage (can be extended to Redis for distributed systems)
 */
export declare class RateLimiter {
    private requests;
    private config;
    constructor(config: RateLimitConfig);
    /**
     * Check if a request should be allowed
     * @param toolName - The tool being called
     * @param tenantId - Optional tenant identifier (for multi-tenancy)
     */
    checkLimit(toolName: string, tenantId?: string): Promise<RateLimitResult>;
    /**
     * Get rate limit configuration for a specific tool
     */
    private getLimit;
    /**
     * Generate unique key for rate limiting
     */
    private getKey;
    /**
     * Clean up old request records to prevent memory leaks
     */
    private cleanup;
    /**
     * Reset rate limits for a specific key (useful for testing)
     */
    reset(toolName: string, tenantId?: string): void;
    /**
     * Get current stats for debugging/monitoring
     */
    getStats(): {
        totalKeys: number;
        totalRequests: number;
    };
}
//# sourceMappingURL=rate-limiter.d.ts.map