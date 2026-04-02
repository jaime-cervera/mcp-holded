import { HoldedClient } from '../holded-client.js';
export declare function getContactTools(client: HoldedClient): {
    list_contacts: {
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
                phone: {
                    type: string;
                    description: string;
                };
                mobile: {
                    type: string;
                    description: string;
                };
                customId: {
                    type: string;
                    items: {
                        type: string;
                    };
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
            phone?: string;
            mobile?: string;
            customId?: string[];
            fields?: string[];
        }) => Promise<{
            count: number;
            totalPages: number;
            currentPage: number;
            hasMore: boolean;
            items?: undefined;
            page?: undefined;
            pageSize?: undefined;
            totalItems?: undefined;
        } | {
            items: Record<string, unknown>[];
            page: number;
            pageSize: number;
            totalItems: number;
            totalPages: number;
            hasMore: boolean;
            count?: undefined;
            currentPage?: undefined;
        }>;
    };
    create_contact: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                name: {
                    type: string;
                    description: string;
                };
                email: {
                    type: string;
                    description: string;
                };
                phone: {
                    type: string;
                    description: string;
                };
                vatnumber: {
                    type: string;
                    description: string;
                };
                type: {
                    type: string;
                    enum: string[];
                    description: string;
                };
                billAddress: {
                    type: string;
                    description: string;
                    properties: {
                        address: {
                            type: string;
                        };
                        city: {
                            type: string;
                        };
                        postalCode: {
                            type: string;
                        };
                        province: {
                            type: string;
                        };
                        country: {
                            type: string;
                        };
                    };
                };
                tradename: {
                    type: string;
                    description: string;
                };
                code: {
                    type: string;
                    description: string;
                };
                note: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    get_contact: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                contactId: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        readOnlyHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    update_contact: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                contactId: {
                    type: string;
                    description: string;
                };
                name: {
                    type: string;
                    description: string;
                };
                email: {
                    type: string;
                    description: string;
                };
                phone: {
                    type: string;
                    description: string;
                };
                vatnumber: {
                    type: string;
                    description: string;
                };
                type: {
                    type: string;
                    enum: string[];
                    description: string;
                };
                billAddress: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    delete_contact: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                contactId: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    list_contact_attachments: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                contactId: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        readOnlyHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    get_contact_attachment: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                contactId: {
                    type: string;
                    description: string;
                };
                attachmentId: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        readOnlyHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
};
//# sourceMappingURL=contacts.d.ts.map