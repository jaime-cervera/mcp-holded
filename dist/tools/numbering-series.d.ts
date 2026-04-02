import { HoldedClient } from '../holded-client.js';
export declare function getNumberingSeriesTools(client: HoldedClient): {
    get_numbering_series: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                docType: {
                    type: string;
                    enum: string[];
                    description: string;
                };
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
            required: string[];
        };
        readOnlyHint: boolean;
        handler: (args: {
            docType: string;
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
    create_numbering_serie: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                docType: {
                    type: string;
                    enum: string[];
                    description: string;
                };
                name: {
                    type: string;
                    description: string;
                };
                prefix: {
                    type: string;
                    description: string;
                };
                nextNumber: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    update_numbering_serie: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                docType: {
                    type: string;
                    enum: string[];
                    description: string;
                };
                serieId: {
                    type: string;
                    description: string;
                };
                name: {
                    type: string;
                    description: string;
                };
                prefix: {
                    type: string;
                    description: string;
                };
                nextNumber: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    delete_numbering_serie: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                docType: {
                    type: string;
                    enum: string[];
                    description: string;
                };
                serieId: {
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
//# sourceMappingURL=numbering-series.d.ts.map