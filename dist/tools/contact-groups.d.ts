import { HoldedClient } from '../holded-client.js';
export declare function getContactGroupTools(client: HoldedClient): {
    list_contact_groups: {
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
    create_contact_group: {
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
    get_contact_group: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                groupId: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        readOnlyHint: boolean;
        handler: (args: {
            groupId: string;
        }) => Promise<unknown>;
    };
    update_contact_group: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                groupId: {
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
            groupId: string;
            [key: string]: unknown;
        }) => Promise<unknown>;
    };
    delete_contact_group: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                groupId: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: {
            groupId: string;
        }) => Promise<unknown>;
    };
};
//# sourceMappingURL=contact-groups.d.ts.map