import { HoldedClient } from '../holded-client.js';
export declare function getSalesChannelTools(client: HoldedClient): {
    list_sales_channels: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                page: {
                    type: string;
                    description: string;
                };
                pageSize: {
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
            pageSize?: number;
            summary?: boolean;
            fields?: string[];
        }) => Promise<{
            total: number;
            totalPages: number;
            items?: undefined;
            page?: undefined;
            pageSize?: undefined;
        } | {
            items: Record<string, unknown>[];
            page: number;
            pageSize: number;
            total: number;
            totalPages: number;
        }>;
    };
    create_sales_channel: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                name: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: Record<string, unknown>) => Promise<unknown>;
    };
    get_sales_channel: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                channelId: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        readOnlyHint: boolean;
        handler: (args: {
            channelId: string;
        }) => Promise<unknown>;
    };
    update_sales_channel: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                channelId: {
                    type: string;
                    description: string;
                };
                name: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: {
            channelId: string;
            [key: string]: unknown;
        }) => Promise<unknown>;
    };
    delete_sales_channel: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                channelId: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: {
            channelId: string;
        }) => Promise<unknown>;
    };
};
//# sourceMappingURL=sales-channels.d.ts.map