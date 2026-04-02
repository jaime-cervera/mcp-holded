import { HoldedClient } from '../holded-client.js';
export declare function getPaymentTools(client: HoldedClient): {
    list_payments: {
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
                starttmp: {
                    type: string;
                    description: string;
                };
                endtmp: {
                    type: string;
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
            starttmp?: string;
            endtmp?: string;
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
    create_payment: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                name: {
                    type: string;
                    description: string;
                };
                days: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    get_payment: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                paymentId: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        readOnlyHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    update_payment: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                paymentId: {
                    type: string;
                    description: string;
                };
                name: {
                    type: string;
                    description: string;
                };
                days: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    delete_payment: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                paymentId: {
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
//# sourceMappingURL=payments.d.ts.map