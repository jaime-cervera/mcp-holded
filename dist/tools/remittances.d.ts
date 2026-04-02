import { HoldedClient } from '../holded-client.js';
export declare function getRemittanceTools(client: HoldedClient): {
    list_remittances: {
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
    get_remittance: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                remittanceId: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        readOnlyHint: boolean;
        handler: (args: {
            remittanceId: string;
        }) => Promise<unknown>;
    };
};
//# sourceMappingURL=remittances.d.ts.map