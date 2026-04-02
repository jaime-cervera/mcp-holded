import { z } from 'zod';
/**
 * Common validation schemas
 */
export declare const paginationSchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodNumber>;
    pageSize: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
    summary: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const fieldFilteringSchema: z.ZodObject<{
    fields: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export declare const dateRangeSchema: z.ZodObject<{
    starttmp: z.ZodOptional<z.ZodString>;
    endtmp: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const contactIdSchema: z.ZodObject<{
    contactId: z.ZodString;
}, z.core.$strip>;
export declare const createContactSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    vatnumber: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<{
        client: "client";
        supplier: "supplier";
        lead: "lead";
        debtor: "debtor";
        creditor: "creditor";
    }>>;
    billAddress: z.ZodOptional<z.ZodObject<{
        address: z.ZodOptional<z.ZodString>;
        city: z.ZodOptional<z.ZodString>;
        postalCode: z.ZodOptional<z.ZodString>;
        province: z.ZodOptional<z.ZodString>;
        country: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    tradename: z.ZodOptional<z.ZodString>;
    code: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateContactSchema: z.ZodObject<{
    contactId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    phone: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    vatnumber: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    type: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        client: "client";
        supplier: "supplier";
        lead: "lead";
        debtor: "debtor";
        creditor: "creditor";
    }>>>;
    billAddress: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        address: z.ZodOptional<z.ZodString>;
        city: z.ZodOptional<z.ZodString>;
        postalCode: z.ZodOptional<z.ZodString>;
        province: z.ZodOptional<z.ZodString>;
        country: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    tradename: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    code: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    note: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export declare const contactAttachmentSchema: z.ZodObject<{
    contactId: z.ZodString;
    attachmentId: z.ZodString;
}, z.core.$strip>;
export declare const documentIdSchema: z.ZodObject<{
    docType: z.ZodEnum<{
        invoice: "invoice";
        estimate: "estimate";
        salesorder: "salesorder";
        purchaseorder: "purchaseorder";
        waybill: "waybill";
        proform: "proform";
        purchase: "purchase";
    }>;
    documentId: z.ZodString;
}, z.core.$strip>;
export declare const listDocumentsSchema: z.ZodObject<{
    docType: z.ZodEnum<{
        invoice: "invoice";
        estimate: "estimate";
        salesorder: "salesorder";
        purchaseorder: "purchaseorder";
        waybill: "waybill";
        proform: "proform";
        purchase: "purchase";
    }>;
    page: z.ZodOptional<z.ZodNumber>;
    pageSize: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
    summary: z.ZodOptional<z.ZodBoolean>;
    fields: z.ZodOptional<z.ZodArray<z.ZodString>>;
    starttmp: z.ZodOptional<z.ZodString>;
    endtmp: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateDocumentPipelineSchema: z.ZodObject<{
    docType: z.ZodEnum<{
        invoice: "invoice";
        estimate: "estimate";
        salesorder: "salesorder";
        purchaseorder: "purchaseorder";
        waybill: "waybill";
        proform: "proform";
        purchase: "purchase";
    }>;
    documentId: z.ZodString;
    pipelineId: z.ZodString;
    stageId: z.ZodString;
}, z.core.$strip>;
export declare const attachFileToDocumentSchema: z.ZodObject<{
    docType: z.ZodEnum<{
        invoice: "invoice";
        estimate: "estimate";
        salesorder: "salesorder";
        purchaseorder: "purchaseorder";
        waybill: "waybill";
        proform: "proform";
        purchase: "purchase";
    }>;
    documentId: z.ZodString;
    fileBase64: z.ZodString;
    filename: z.ZodString;
}, z.core.$strip>;
export declare const shipItemsByLineSchema: z.ZodObject<{
    docType: z.ZodEnum<{
        invoice: "invoice";
        estimate: "estimate";
        salesorder: "salesorder";
        purchaseorder: "purchaseorder";
        waybill: "waybill";
        proform: "proform";
        purchase: "purchase";
    }>;
    documentId: z.ZodString;
    lines: z.ZodArray<z.ZodUnknown>;
}, z.core.$strip>;
export declare const payDocumentSchema: z.ZodObject<{
    docType: z.ZodEnum<{
        invoice: "invoice";
        estimate: "estimate";
        salesorder: "salesorder";
        purchaseorder: "purchaseorder";
        waybill: "waybill";
        proform: "proform";
        purchase: "purchase";
    }>;
    documentId: z.ZodString;
    amount: z.ZodOptional<z.ZodNumber>;
    date: z.ZodOptional<z.ZodNumber>;
    treasuryId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const sendDocumentSchema: z.ZodObject<{
    docType: z.ZodEnum<{
        invoice: "invoice";
        estimate: "estimate";
        salesorder: "salesorder";
        purchaseorder: "purchaseorder";
        waybill: "waybill";
        proform: "proform";
        purchase: "purchase";
    }>;
    documentId: z.ZodString;
    emails: z.ZodOptional<z.ZodArray<z.ZodString>>;
    subject: z.ZodOptional<z.ZodString>;
    message: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateDocumentTrackingSchema: z.ZodObject<{
    docType: z.ZodEnum<{
        invoice: "invoice";
        estimate: "estimate";
        salesorder: "salesorder";
        purchaseorder: "purchaseorder";
        waybill: "waybill";
        proform: "proform";
        purchase: "purchase";
    }>;
    documentId: z.ZodString;
    trackingNumber: z.ZodOptional<z.ZodString>;
    carrier: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const createDocumentSchema: z.ZodObject<{
    docType: z.ZodEnum<{
        invoice: "invoice";
        estimate: "estimate";
        salesorder: "salesorder";
        purchaseorder: "purchaseorder";
        waybill: "waybill";
        proform: "proform";
        purchase: "purchase";
    }>;
    contactId: z.ZodString;
    items: z.ZodArray<z.ZodUnknown>;
    date: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
    currency: z.ZodOptional<z.ZodString>;
    approveDoc: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const updateDocumentSchema: z.ZodObject<{
    docType: z.ZodEnum<{
        invoice: "invoice";
        estimate: "estimate";
        salesorder: "salesorder";
        purchaseorder: "purchaseorder";
        waybill: "waybill";
        proform: "proform";
        purchase: "purchase";
    }>;
    documentId: z.ZodString;
    contactId: z.ZodOptional<z.ZodString>;
    items: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    date: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
    currency: z.ZodOptional<z.ZodString>;
    approveDoc: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const productIdSchema: z.ZodObject<{
    productId: z.ZodString;
}, z.core.$strip>;
export declare const createProductSchema: z.ZodObject<{
    name: z.ZodString;
    sku: z.ZodOptional<z.ZodString>;
    barcode: z.ZodOptional<z.ZodString>;
    price: z.ZodOptional<z.ZodNumber>;
    cost: z.ZodOptional<z.ZodNumber>;
    costPrice: z.ZodOptional<z.ZodNumber>;
    tax: z.ZodOptional<z.ZodNumber>;
    description: z.ZodOptional<z.ZodString>;
    unit: z.ZodOptional<z.ZodString>;
    stock: z.ZodOptional<z.ZodNumber>;
    kind: z.ZodOptional<z.ZodEnum<{
        product: "product";
        service: "service";
    }>>;
}, z.core.$strip>;
export declare const updateProductSchema: z.ZodObject<{
    productId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    sku: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    barcode: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    price: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    cost: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    costPrice: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    tax: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    unit: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    stock: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    kind: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        product: "product";
        service: "service";
    }>>>;
}, z.core.$strip>;
export declare const productImageSchema: z.ZodObject<{
    productId: z.ZodString;
    imageId: z.ZodString;
}, z.core.$strip>;
export declare const updateProductStockSchema: z.ZodObject<{
    productId: z.ZodString;
    warehouseId: z.ZodOptional<z.ZodString>;
    units: z.ZodNumber;
}, z.core.$strip>;
export declare const treasuryIdSchema: z.ZodObject<{
    treasuryId: z.ZodString;
}, z.core.$strip>;
export declare const createTreasurySchema: z.ZodObject<{
    name: z.ZodString;
    iban: z.ZodOptional<z.ZodString>;
    bic: z.ZodOptional<z.ZodString>;
    balance: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const warehouseIdSchema: z.ZodObject<{
    warehouseId: z.ZodString;
}, z.core.$strip>;
export declare const createWarehouseSchema: z.ZodObject<{
    name: z.ZodString;
    address: z.ZodOptional<z.ZodString>;
    city: z.ZodOptional<z.ZodString>;
    postalCode: z.ZodOptional<z.ZodString>;
    province: z.ZodOptional<z.ZodString>;
    country: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateWarehouseSchema: z.ZodObject<{
    warehouseId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    city: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    postalCode: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    province: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    country: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export declare const warehouseStockSchema: z.ZodObject<{
    warehouseId: z.ZodString;
    page: z.ZodOptional<z.ZodNumber>;
    pageSize: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
    summary: z.ZodOptional<z.ZodBoolean>;
    fields: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export declare const serviceIdSchema: z.ZodObject<{
    serviceId: z.ZodString;
}, z.core.$strip>;
export declare const createServiceSchema: z.ZodObject<{
    name: z.ZodString;
    sku: z.ZodOptional<z.ZodString>;
    price: z.ZodOptional<z.ZodNumber>;
    tax: z.ZodOptional<z.ZodNumber>;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateServiceSchema: z.ZodObject<{
    serviceId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    sku: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    price: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    tax: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export declare const paymentIdSchema: z.ZodObject<{
    paymentId: z.ZodString;
}, z.core.$strip>;
export declare const createPaymentSchema: z.ZodObject<{
    name: z.ZodString;
    days: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const updatePaymentSchema: z.ZodObject<{
    paymentId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    days: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
}, z.core.$strip>;
export declare const numberingSerieIdSchema: z.ZodObject<{
    docType: z.ZodEnum<{
        invoice: "invoice";
        estimate: "estimate";
        salesorder: "salesorder";
        purchaseorder: "purchaseorder";
        waybill: "waybill";
        proform: "proform";
        purchase: "purchase";
        salesreceipt: "salesreceipt";
        creditnote: "creditnote";
        receiptnote: "receiptnote";
        purchaserefund: "purchaserefund";
    }>;
    serieId: z.ZodString;
}, z.core.$strip>;
export declare const createNumberingSerieSchema: z.ZodObject<{
    docType: z.ZodEnum<{
        invoice: "invoice";
        estimate: "estimate";
        salesorder: "salesorder";
        purchaseorder: "purchaseorder";
        waybill: "waybill";
        proform: "proform";
        purchase: "purchase";
        salesreceipt: "salesreceipt";
        creditnote: "creditnote";
        receiptnote: "receiptnote";
        purchaserefund: "purchaserefund";
    }>;
    name: z.ZodString;
    prefix: z.ZodOptional<z.ZodString>;
    nextNumber: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const updateNumberingSerieSchema: z.ZodObject<{
    docType: z.ZodEnum<{
        invoice: "invoice";
        estimate: "estimate";
        salesorder: "salesorder";
        purchaseorder: "purchaseorder";
        waybill: "waybill";
        proform: "proform";
        purchase: "purchase";
        salesreceipt: "salesreceipt";
        creditnote: "creditnote";
        receiptnote: "receiptnote";
        purchaserefund: "purchaserefund";
    }>;
    serieId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    prefix: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    nextNumber: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
}, z.core.$strip>;
/**
 * Validation utility function
 */
export declare function validateInput<T>(schema: z.ZodSchema<T>, input: unknown): T;
/**
 * Type-safe validation wrapper for tool handlers
 */
export declare function withValidation<TInput, TOutput>(schema: z.ZodSchema<TInput>, handler: (args: TInput) => Promise<TOutput>): (args: unknown) => Promise<TOutput>;
//# sourceMappingURL=validation.d.ts.map