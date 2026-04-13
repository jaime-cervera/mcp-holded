import { HoldedClient } from '../holded-client.js';
export type DocumentType = 'invoice' | 'salesreceipt' | 'creditnote' | 'receiptnote' | 'estimate' | 'salesorder' | 'waybill' | 'proform' | 'purchase' | 'purchaserefund' | 'purchaseorder';
export declare function getDocumentTools(client: HoldedClient): {
    list_documents: {
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
                limit: {
                    type: string;
                    description: string;
                };
                summary: {
                    type: string;
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
                contactid: {
                    type: string;
                    description: string;
                };
                paid: {
                    type: string;
                    enum: string[];
                    description: string;
                };
                billed: {
                    type: string;
                    enum: string[];
                    description: string;
                };
                sort: {
                    type: string;
                    enum: string[];
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
            docType: DocumentType;
            page?: number;
            limit?: number;
            summary?: boolean;
            starttmp?: string;
            endtmp?: string;
            contactid?: string;
            paid?: string;
            billed?: string;
            sort?: string;
            fields?: string[];
        }) => Promise<unknown>;
    };
    create_document: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                docType: {
                    type: string;
                    enum: string[];
                    description: string;
                };
                contactId: {
                    type: string;
                    description: string;
                };
                items: {
                    type: string;
                    description: string;
                    items: {
                        type: string;
                        properties: {
                            name: {
                                type: string;
                            };
                            units: {
                                type: string;
                            };
                            subtotal: {
                                type: string;
                            };
                            tax: {
                                type: string;
                                description: string;
                            };
                            taxes: {
                                type: string;
                                items: {
                                    type: string;
                                };
                                description: string;
                            };
                        };
                    };
                };
                date: {
                    type: string;
                    description: string;
                };
                notes: {
                    type: string;
                    description: string;
                };
                currency: {
                    type: string;
                    description: string;
                };
                approveDoc: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    get_document: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                docType: {
                    type: string;
                    enum: string[];
                    description: string;
                };
                documentId: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        readOnlyHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    update_document: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                docType: {
                    type: string;
                    enum: string[];
                    description: string;
                };
                documentId: {
                    type: string;
                    description: string;
                };
                contactId: {
                    type: string;
                    description: string;
                };
                items: {
                    type: string;
                    description: string;
                };
                date: {
                    type: string;
                    description: string;
                };
                notes: {
                    type: string;
                    description: string;
                };
                approveDoc: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    delete_document: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                docType: {
                    type: string;
                    enum: string[];
                    description: string;
                };
                documentId: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    pay_document: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                docType: {
                    type: string;
                    enum: string[];
                    description: string;
                };
                documentId: {
                    type: string;
                    description: string;
                };
                date: {
                    type: string;
                    description: string;
                };
                amount: {
                    type: string;
                    description: string;
                };
                treasuryId: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    send_document: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                docType: {
                    type: string;
                    enum: string[];
                    description: string;
                };
                documentId: {
                    type: string;
                    description: string;
                };
                emails: {
                    type: string;
                    items: {
                        type: string;
                    };
                    description: string;
                };
                subject: {
                    type: string;
                    description: string;
                };
                message: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: Record<string, unknown>) => Promise<unknown>;
    };
    get_document_pdf: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                docType: {
                    type: string;
                    enum: string[];
                    description: string;
                };
                documentId: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        readOnlyHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    ship_all_items: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                docType: {
                    type: string;
                    enum: string[];
                    description: string;
                };
                documentId: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    ship_items_by_line: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                docType: {
                    type: string;
                    enum: string[];
                    description: string;
                };
                documentId: {
                    type: string;
                    description: string;
                };
                lines: {
                    type: string;
                    description: string;
                    items: {
                        type: string;
                        properties: {
                            lineId: {
                                type: string;
                            };
                            units: {
                                type: string;
                            };
                        };
                    };
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    get_shipped_units: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                docType: {
                    type: string;
                    enum: string[];
                    description: string;
                };
                documentId: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        readOnlyHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    attach_file_to_document: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                docType: {
                    type: string;
                    enum: string[];
                    description: string;
                };
                documentId: {
                    type: string;
                    description: string;
                };
                fileBase64: {
                    type: string;
                    description: string;
                };
                filename: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    update_document_tracking: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                docType: {
                    type: string;
                    enum: string[];
                    description: string;
                };
                documentId: {
                    type: string;
                    description: string;
                };
                trackingNumber: {
                    type: string;
                    description: string;
                };
                carrier: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    update_document_pipeline: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                docType: {
                    type: string;
                    enum: string[];
                    description: string;
                };
                documentId: {
                    type: string;
                    description: string;
                };
                pipelineId: {
                    type: string;
                    description: string;
                };
                stageId: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        destructiveHint: boolean;
        handler: (args: unknown) => Promise<unknown>;
    };
    list_payment_methods: {
        description: string;
        inputSchema: {
            type: "object";
            properties: {};
            required: never[];
        };
        readOnlyHint: boolean;
        handler: () => Promise<unknown>;
    };
};
//# sourceMappingURL=documents.d.ts.map