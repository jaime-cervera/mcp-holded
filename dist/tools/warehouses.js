import { warehouseIdSchema, createWarehouseSchema, updateWarehouseSchema, warehouseStockSchema, withValidation, } from '../validation.js';
export function getWarehouseTools(client) {
    return {
        // List Warehouses
        list_warehouses: {
            description: 'List all warehouses with pagination support. Supports field filtering to reduce response size.',
            inputSchema: {
                type: 'object',
                properties: {
                    page: {
                        type: 'number',
                        description: 'Page number (starting from 1, default: 1)',
                    },
                    pageSize: {
                        type: 'number',
                        description: 'Number of items per page (default: 50, max: 500)',
                    },
                    summary: {
                        type: 'boolean',
                        description: 'Return only total count and page count without items (default: false)',
                    },
                    fields: {
                        type: 'array',
                        items: { type: 'string' },
                        description: 'Select specific fields to return (e.g., ["id", "name", "address"]). Reduces response size by 70-90%. If not provided, returns default fields: id, name, address',
                    },
                },
                required: [],
            },
            readOnlyHint: true,
            handler: async (args = {}) => {
                const warehouses = (await client.get('/warehouses'));
                // Field filtering: if fields specified, return only those fields
                // Otherwise, return default minimal set
                const defaultFields = ['id', 'name', 'address'];
                const fieldsToInclude = args.fields && args.fields.length > 0 ? args.fields : defaultFields;
                const filtered = warehouses.map((warehouse) => {
                    const result = {};
                    for (const field of fieldsToInclude) {
                        if (field in warehouse) {
                            result[field] = warehouse[field];
                        }
                    }
                    return result;
                });
                // Pagination
                const page = Math.max(args.page ?? 1, 1);
                const pageSize = Math.min(args.pageSize ?? 50, 500);
                const total = filtered.length;
                const totalPages = Math.ceil(total / pageSize);
                const startIndex = (page - 1) * pageSize;
                const endIndex = startIndex + pageSize;
                const items = filtered.slice(startIndex, endIndex);
                // Summary mode: return only metadata
                if (args.summary) {
                    return {
                        total,
                        totalPages,
                    };
                }
                return {
                    items,
                    page,
                    pageSize,
                    total,
                    totalPages,
                };
            },
        },
        // Create Warehouse
        create_warehouse: {
            description: 'Create a new warehouse',
            inputSchema: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        description: 'Warehouse name',
                    },
                    address: {
                        type: 'string',
                        description: 'Warehouse address',
                    },
                    city: {
                        type: 'string',
                        description: 'City',
                    },
                    postalCode: {
                        type: 'string',
                        description: 'Postal code',
                    },
                    province: {
                        type: 'string',
                        description: 'Province',
                    },
                    country: {
                        type: 'string',
                        description: 'Country',
                    },
                },
                required: ['name'],
            },
            destructiveHint: true,
            handler: withValidation(createWarehouseSchema, async (args) => {
                return client.post('/warehouses', args);
            }),
        },
        // List Products Stock in Warehouse
        list_warehouse_stock: {
            description: 'List all products stock in a specific warehouse. Supports field filtering to reduce response size.',
            inputSchema: {
                type: 'object',
                properties: {
                    warehouseId: {
                        type: 'string',
                        description: 'Warehouse ID',
                    },
                    page: {
                        type: 'number',
                        description: 'Page number for pagination (optional)',
                    },
                    limit: {
                        type: 'number',
                        description: 'Maximum number of items to return (default: 50, max: 500)',
                    },
                    summary: {
                        type: 'boolean',
                        description: 'Return only count and pagination metadata without items (default: false)',
                    },
                    fields: {
                        type: 'array',
                        items: { type: 'string' },
                        description: 'Select specific fields to return (e.g., ["productId", "productName", "sku", "stock"]). Reduces response size by 70-90%. If not provided, returns default fields: productId, productName, sku, stock',
                    },
                },
                required: ['warehouseId'],
            },
            readOnlyHint: true,
            handler: withValidation(warehouseStockSchema, async (args) => {
                const queryParams = {};
                if (args.page)
                    queryParams.page = args.page;
                if (args.limit)
                    queryParams.limit = Math.min(args.limit, 500);
                const stock = (await client.get(`/warehouses/${args.warehouseId}/stock`, queryParams));
                // Field filtering: if fields specified, return only those fields
                // Otherwise, return default minimal set
                const defaultFields = ['productId', 'productName', 'sku', 'stock'];
                const fieldsToInclude = args.fields && args.fields.length > 0 ? args.fields : defaultFields;
                const filtered = stock.map((item) => {
                    const result = {};
                    for (const field of fieldsToInclude) {
                        if (field in item) {
                            result[field] = item[field];
                        }
                    }
                    return result;
                });
                const limit = Math.min(args.limit ?? 50, 500);
                const items = filtered.slice(0, limit);
                // Summary mode: return only count and metadata
                if (args.summary) {
                    return {
                        count: items.length,
                        hasMore: items.length === limit && filtered.length > limit,
                    };
                }
                return {
                    items,
                    page: args.page,
                    pageSize: items.length,
                    hasMore: items.length === limit && filtered.length > limit,
                };
            }),
        },
        // Get Warehouse
        get_warehouse: {
            description: 'Get a specific warehouse by ID',
            inputSchema: {
                type: 'object',
                properties: {
                    warehouseId: {
                        type: 'string',
                        description: 'Warehouse ID',
                    },
                },
                required: ['warehouseId'],
            },
            readOnlyHint: true,
            handler: withValidation(warehouseIdSchema, async (args) => {
                return client.get(`/warehouses/${args.warehouseId}`);
            }),
        },
        // Update Warehouse
        update_warehouse: {
            description: 'Update an existing warehouse',
            inputSchema: {
                type: 'object',
                properties: {
                    warehouseId: {
                        type: 'string',
                        description: 'Warehouse ID to update',
                    },
                    name: {
                        type: 'string',
                        description: 'Warehouse name',
                    },
                    address: {
                        type: 'string',
                        description: 'Warehouse address',
                    },
                    city: {
                        type: 'string',
                        description: 'City',
                    },
                    postalCode: {
                        type: 'string',
                        description: 'Postal code',
                    },
                    province: {
                        type: 'string',
                        description: 'Province',
                    },
                    country: {
                        type: 'string',
                        description: 'Country',
                    },
                },
                required: ['warehouseId'],
            },
            destructiveHint: true,
            handler: withValidation(updateWarehouseSchema, async (args) => {
                const { warehouseId, ...body } = args;
                return client.put(`/warehouses/${warehouseId}`, body);
            }),
        },
        // Delete Warehouse
        delete_warehouse: {
            description: 'Delete a warehouse',
            inputSchema: {
                type: 'object',
                properties: {
                    warehouseId: {
                        type: 'string',
                        description: 'Warehouse ID to delete',
                    },
                },
                required: ['warehouseId'],
            },
            destructiveHint: true,
            handler: withValidation(warehouseIdSchema, async (args) => {
                return client.delete(`/warehouses/${args.warehouseId}`);
            }),
        },
    };
}
//# sourceMappingURL=warehouses.js.map