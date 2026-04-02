import { HoldedClient } from '../holded-client.js';
export declare function getExpensesAccountTools(client: HoldedClient): {
    list_expenses_accounts: {
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
    create_expenses_account: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                name: {
                    type: string;
                    description: string;
                };
                code: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: Record<string, unknown>) => Promise<unknown>;
    };
    get_expenses_account: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                accountId: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        readOnlyHint: boolean;
        handler: (args: {
            accountId: string;
        }) => Promise<unknown>;
    };
    update_expenses_account: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                accountId: {
                    type: string;
                    description: string;
                };
                name: {
                    type: string;
                    description: string;
                };
                code: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: {
            accountId: string;
            [key: string]: unknown;
        }) => Promise<unknown>;
    };
    delete_expenses_account: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                accountId: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: {
            accountId: string;
        }) => Promise<unknown>;
    };
};
//# sourceMappingURL=expenses-accounts.d.ts.map