import { HoldedClient } from '../holded-client.js';
export declare function getWarehouseTools(client: HoldedClient): {
    list_warehouses: {
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
    create_warehouse: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                name: {
                    type: string;
                    description: string;
                };
                address: {
                    type: string;
                    description: string;
                };
                city: {
                    type: string;
                    description: string;
                };
                postalCode: {
                    type: string;
                    description: string;
                };
                province: {
                    type: string;
                    description: string;
                };
                country: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    list_warehouse_stock: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                warehouseId: {
                    type: string;
                    description: string;
                };
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
            required: string[];
        };
        readOnlyHint: boolean;
        handler: (args: unknown) => Promise<{
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
    get_warehouse: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                warehouseId: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        readOnlyHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    update_warehouse: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                warehouseId: {
                    type: string;
                    description: string;
                };
                name: {
                    type: string;
                    description: string;
                };
                address: {
                    type: string;
                    description: string;
                };
                city: {
                    type: string;
                    description: string;
                };
                postalCode: {
                    type: string;
                    description: string;
                };
                province: {
                    type: string;
                    description: string;
                };
                country: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    delete_warehouse: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                warehouseId: {
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
//# sourceMappingURL=warehouses.d.ts.map