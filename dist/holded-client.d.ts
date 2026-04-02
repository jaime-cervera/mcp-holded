export declare class HoldedClient {
    private apiKey;
    private maxRetries;
    private backoffDelays;
    private retryableStatusCodes;
    constructor(apiKey: string);
    private sleep;
    private request;
    get<T>(endpoint: string, queryParams?: Record<string, string | number>): Promise<T>;
    post<T>(endpoint: string, body?: unknown): Promise<T>;
    put<T>(endpoint: string, body?: unknown): Promise<T>;
    delete<T>(endpoint: string): Promise<T>;
    uploadFile(endpoint: string, file: Buffer, filename: string): Promise<unknown>;
}
//# sourceMappingURL=holded-client.d.ts.map