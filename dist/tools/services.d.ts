import { HoldedClient } from '../holded-client.js';
export declare function getServiceTools(client: HoldedClient): {
    list_services: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                page: {
                    type: string;
                    description: string;
                };
                limit: {
                    type: string;
                    description: string;
                };
                summary: {
                    type: string;
                    description: string;
                };
                fields: {
                    type: string;
                    items: {
                        type: string;
                    };
                    description: string;
                };
            };
            required: never[];
        };
        readOnlyHint: boolean;
        handler: (args?: {
            page?: number;
            limit?: number;
            summary?: boolean;
            fields?: string[];
        }) => Promise<{
            count: number;
            hasMore: boolean;
            items?: undefined;
            page?: undefined;
            pageSize?: undefined;
        } | {
            items: Record<string, unknown>[];
            page: number | undefined;
            pageSize: number;
            hasMore: boolean;
            count?: undefined;
        }>;
    };
    create_service: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                name: {
                    type: string;
                    description: string;
                };
                sku: {
                    type: string;
                    description: string;
                };
                price: {
                    type: string;
                    description: string;
                };
                tax: {
                    type: string;
                    description: string;
                };
                description: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    get_service: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                serviceId: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        readOnlyHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    update_service: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                serviceId: {
                    type: string;
                    description: string;
                };
                name: {
                    type: string;
                    description: string;
                };
                sku: {
                    type: string;
                    description: string;
                };
                price: {
                    type: string;
                    description: string;
                };
                tax: {
                    type: string;
                    description: string;
                };
                description: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    delete_service: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                serviceId: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
};
//# sourceMappingURL=services.d.ts.map