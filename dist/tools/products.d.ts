import { HoldedClient } from '../holded-client.js';
export declare function getProductTools(client: HoldedClient): {
    list_products: {
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
    create_product: {
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
                barcode: {
                    type: string;
                    description: string;
                };
                price: {
                    type: string;
                    description: string;
                };
                costPrice: {
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
                stock: {
                    type: string;
                    description: string;
                };
                kind: {
                    type: string;
                    enum: string[];
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    get_product: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                productId: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        readOnlyHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    update_product: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                productId: {
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
                barcode: {
                    type: string;
                    description: string;
                };
                price: {
                    type: string;
                    description: string;
                };
                costPrice: {
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
    delete_product: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                productId: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    get_product_main_image: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                productId: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        readOnlyHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    list_product_images: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                productId: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        readOnlyHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    get_product_secondary_image: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                productId: {
                    type: string;
                    description: string;
                };
                imageId: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        readOnlyHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    update_product_stock: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                productId: {
                    type: string;
                    description: string;
                };
                warehouseId: {
                    type: string;
                    description: string;
                };
                units: {
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
//# sourceMappingURL=products.d.ts.map