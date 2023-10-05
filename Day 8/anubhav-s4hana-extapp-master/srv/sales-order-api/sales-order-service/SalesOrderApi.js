"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const SalesOrder_1 = require("./SalesOrder");
const SalesOrderRequestBuilder_1 = require("./SalesOrderRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SalesOrder_1.SalesOrder;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_BILLING_PLAN: new odata_v2_1.OneToOneLink('to_BillingPlan', this, linkedApis[0]),
            TO_ITEM: new odata_v2_1.Link('to_Item', this, linkedApis[1]),
            TO_PARTNER: new odata_v2_1.Link('to_Partner', this, linkedApis[2]),
            TO_PAYMENT_PLAN_ITEM_DETAILS: new odata_v2_1.Link('to_PaymentPlanItemDetails', this, linkedApis[3]),
            TO_PRECEDING_PROC_FLOW_DOC: new odata_v2_1.Link('to_PrecedingProcFlowDoc', this, linkedApis[4]),
            TO_PRICING_ELEMENT: new odata_v2_1.Link('to_PricingElement', this, linkedApis[5]),
            TO_RELATED_OBJECT: new odata_v2_1.Link('to_RelatedObject', this, linkedApis[6]),
            TO_SUBSEQUENT_PROC_FLOW_DOC: new odata_v2_1.Link('to_SubsequentProcFlowDoc', this, linkedApis[7]),
            TO_TEXT: new odata_v2_1.Link('to_Text', this, linkedApis[8])
        };
        return this;
    }
    requestBuilder() {
        return new SalesOrderRequestBuilder_1.SalesOrderRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SalesOrder_1.SalesOrder, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link salesOrder} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_ORDER: fieldBuilder.buildEdmTypeField('SalesOrder', 'Edm.String', false),
                /**
                 * Static representation of the {@link salesOrderType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_ORDER_TYPE: fieldBuilder.buildEdmTypeField('SalesOrderType', 'Edm.String', true),
                /**
                 * Static representation of the {@link salesOrganization} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_ORGANIZATION: fieldBuilder.buildEdmTypeField('SalesOrganization', 'Edm.String', true),
                /**
                 * Static representation of the {@link distributionChannel} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DISTRIBUTION_CHANNEL: fieldBuilder.buildEdmTypeField('DistributionChannel', 'Edm.String', true),
                /**
                 * Static representation of the {@link organizationDivision} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORGANIZATION_DIVISION: fieldBuilder.buildEdmTypeField('OrganizationDivision', 'Edm.String', true),
                /**
                 * Static representation of the {@link salesGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_GROUP: fieldBuilder.buildEdmTypeField('SalesGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link salesOffice} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_OFFICE: fieldBuilder.buildEdmTypeField('SalesOffice', 'Edm.String', true),
                /**
                 * Static representation of the {@link salesDistrict} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_DISTRICT: fieldBuilder.buildEdmTypeField('SalesDistrict', 'Edm.String', true),
                /**
                 * Static representation of the {@link soldToParty} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SOLD_TO_PARTY: fieldBuilder.buildEdmTypeField('SoldToParty', 'Edm.String', true),
                /**
                 * Static representation of the {@link creationDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATION_DATE: fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link createdByUser} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_BY_USER: fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', true),
                /**
                 * Static representation of the {@link lastChangeDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGE_DATE: fieldBuilder.buildEdmTypeField('LastChangeDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link senderBusinessSystemName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SENDER_BUSINESS_SYSTEM_NAME: fieldBuilder.buildEdmTypeField('SenderBusinessSystemName', 'Edm.String', true),
                /**
                 * Static representation of the {@link externalDocumentId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_DOCUMENT_ID: fieldBuilder.buildEdmTypeField('ExternalDocumentID', 'Edm.String', true),
                /**
                 * Static representation of the {@link lastChangeDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGE_DATE_TIME: fieldBuilder.buildEdmTypeField('LastChangeDateTime', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link externalDocLastChangeDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_DOC_LAST_CHANGE_DATE_TIME: fieldBuilder.buildEdmTypeField('ExternalDocLastChangeDateTime', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link purchaseOrderByCustomer} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASE_ORDER_BY_CUSTOMER: fieldBuilder.buildEdmTypeField('PurchaseOrderByCustomer', 'Edm.String', true),
                /**
                 * Static representation of the {@link purchaseOrderByShipToParty} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASE_ORDER_BY_SHIP_TO_PARTY: fieldBuilder.buildEdmTypeField('PurchaseOrderByShipToParty', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerPurchaseOrderType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_PURCHASE_ORDER_TYPE: fieldBuilder.buildEdmTypeField('CustomerPurchaseOrderType', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerPurchaseOrderDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_PURCHASE_ORDER_DATE: fieldBuilder.buildEdmTypeField('CustomerPurchaseOrderDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link salesOrderDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_ORDER_DATE: fieldBuilder.buildEdmTypeField('SalesOrderDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link totalNetAmount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TOTAL_NET_AMOUNT: fieldBuilder.buildEdmTypeField('TotalNetAmount', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link overallDeliveryStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OVERALL_DELIVERY_STATUS: fieldBuilder.buildEdmTypeField('OverallDeliveryStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link totalBlockStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TOTAL_BLOCK_STATUS: fieldBuilder.buildEdmTypeField('TotalBlockStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link overallOrdReltdBillgStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OVERALL_ORD_RELTD_BILLG_STATUS: fieldBuilder.buildEdmTypeField('OverallOrdReltdBillgStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link overallSdDocReferenceStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OVERALL_SD_DOC_REFERENCE_STATUS: fieldBuilder.buildEdmTypeField('OverallSDDocReferenceStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link transactionCurrency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField('TransactionCurrency', 'Edm.String', true),
                /**
                 * Static representation of the {@link sdDocumentReason} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SD_DOCUMENT_REASON: fieldBuilder.buildEdmTypeField('SDDocumentReason', 'Edm.String', true),
                /**
                 * Static representation of the {@link pricingDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRICING_DATE: fieldBuilder.buildEdmTypeField('PricingDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link priceDetnExchangeRate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRICE_DETN_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField('PriceDetnExchangeRate', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link billingPlan} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_PLAN: fieldBuilder.buildEdmTypeField('BillingPlan', 'Edm.String', true),
                /**
                 * Static representation of the {@link requestedDeliveryDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REQUESTED_DELIVERY_DATE: fieldBuilder.buildEdmTypeField('RequestedDeliveryDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link shippingCondition} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SHIPPING_CONDITION: fieldBuilder.buildEdmTypeField('ShippingCondition', 'Edm.String', true),
                /**
                 * Static representation of the {@link completeDeliveryIsDefined} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPLETE_DELIVERY_IS_DEFINED: fieldBuilder.buildEdmTypeField('CompleteDeliveryIsDefined', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link shippingType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SHIPPING_TYPE: fieldBuilder.buildEdmTypeField('ShippingType', 'Edm.String', true),
                /**
                 * Static representation of the {@link headerBillingBlockReason} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HEADER_BILLING_BLOCK_REASON: fieldBuilder.buildEdmTypeField('HeaderBillingBlockReason', 'Edm.String', true),
                /**
                 * Static representation of the {@link deliveryBlockReason} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_BLOCK_REASON: fieldBuilder.buildEdmTypeField('DeliveryBlockReason', 'Edm.String', true),
                /**
                 * Static representation of the {@link deliveryDateTypeRule} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_DATE_TYPE_RULE: fieldBuilder.buildEdmTypeField('DeliveryDateTypeRule', 'Edm.String', true),
                /**
                 * Static representation of the {@link incotermsClassification} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INCOTERMS_CLASSIFICATION: fieldBuilder.buildEdmTypeField('IncotermsClassification', 'Edm.String', true),
                /**
                 * Static representation of the {@link incotermsTransferLocation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INCOTERMS_TRANSFER_LOCATION: fieldBuilder.buildEdmTypeField('IncotermsTransferLocation', 'Edm.String', true),
                /**
                 * Static representation of the {@link incotermsLocation1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INCOTERMS_LOCATION_1: fieldBuilder.buildEdmTypeField('IncotermsLocation1', 'Edm.String', true),
                /**
                 * Static representation of the {@link incotermsLocation2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INCOTERMS_LOCATION_2: fieldBuilder.buildEdmTypeField('IncotermsLocation2', 'Edm.String', true),
                /**
                 * Static representation of the {@link incotermsVersion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INCOTERMS_VERSION: fieldBuilder.buildEdmTypeField('IncotermsVersion', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerPriceGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_PRICE_GROUP: fieldBuilder.buildEdmTypeField('CustomerPriceGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link priceListType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRICE_LIST_TYPE: fieldBuilder.buildEdmTypeField('PriceListType', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerPaymentTerms} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_PAYMENT_TERMS: fieldBuilder.buildEdmTypeField('CustomerPaymentTerms', 'Edm.String', true),
                /**
                 * Static representation of the {@link paymentMethod} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYMENT_METHOD: fieldBuilder.buildEdmTypeField('PaymentMethod', 'Edm.String', true),
                /**
                 * Static representation of the {@link fixedValueDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FIXED_VALUE_DATE: fieldBuilder.buildEdmTypeField('FixedValueDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link assignmentReference} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ASSIGNMENT_REFERENCE: fieldBuilder.buildEdmTypeField('AssignmentReference', 'Edm.String', true),
                /**
                 * Static representation of the {@link referenceSdDocument} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REFERENCE_SD_DOCUMENT: fieldBuilder.buildEdmTypeField('ReferenceSDDocument', 'Edm.String', true),
                /**
                 * Static representation of the {@link referenceSdDocumentCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REFERENCE_SD_DOCUMENT_CATEGORY: fieldBuilder.buildEdmTypeField('ReferenceSDDocumentCategory', 'Edm.String', true),
                /**
                 * Static representation of the {@link accountingDocExternalReference} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCOUNTING_DOC_EXTERNAL_REFERENCE: fieldBuilder.buildEdmTypeField('AccountingDocExternalReference', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerAccountAssignmentGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_ACCOUNT_ASSIGNMENT_GROUP: fieldBuilder.buildEdmTypeField('CustomerAccountAssignmentGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link accountingExchangeRate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCOUNTING_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField('AccountingExchangeRate', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link customerGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_GROUP: fieldBuilder.buildEdmTypeField('CustomerGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link additionalCustomerGroup1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_CUSTOMER_GROUP_1: fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup1', 'Edm.String', true),
                /**
                 * Static representation of the {@link additionalCustomerGroup2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_CUSTOMER_GROUP_2: fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup2', 'Edm.String', true),
                /**
                 * Static representation of the {@link additionalCustomerGroup3} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_CUSTOMER_GROUP_3: fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup3', 'Edm.String', true),
                /**
                 * Static representation of the {@link additionalCustomerGroup4} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_CUSTOMER_GROUP_4: fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup4', 'Edm.String', true),
                /**
                 * Static representation of the {@link additionalCustomerGroup5} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_CUSTOMER_GROUP_5: fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup5', 'Edm.String', true),
                /**
                 * Static representation of the {@link slsDocIsRlvtForProofOfDeliv} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SLS_DOC_IS_RLVT_FOR_PROOF_OF_DELIV: fieldBuilder.buildEdmTypeField('SlsDocIsRlvtForProofOfDeliv', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link customerTaxClassification1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_TAX_CLASSIFICATION_1: fieldBuilder.buildEdmTypeField('CustomerTaxClassification1', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerTaxClassification2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_TAX_CLASSIFICATION_2: fieldBuilder.buildEdmTypeField('CustomerTaxClassification2', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerTaxClassification3} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_TAX_CLASSIFICATION_3: fieldBuilder.buildEdmTypeField('CustomerTaxClassification3', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerTaxClassification4} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_TAX_CLASSIFICATION_4: fieldBuilder.buildEdmTypeField('CustomerTaxClassification4', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerTaxClassification5} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_TAX_CLASSIFICATION_5: fieldBuilder.buildEdmTypeField('CustomerTaxClassification5', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerTaxClassification6} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_TAX_CLASSIFICATION_6: fieldBuilder.buildEdmTypeField('CustomerTaxClassification6', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerTaxClassification7} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_TAX_CLASSIFICATION_7: fieldBuilder.buildEdmTypeField('CustomerTaxClassification7', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerTaxClassification8} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_TAX_CLASSIFICATION_8: fieldBuilder.buildEdmTypeField('CustomerTaxClassification8', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerTaxClassification9} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_TAX_CLASSIFICATION_9: fieldBuilder.buildEdmTypeField('CustomerTaxClassification9', 'Edm.String', true),
                /**
                 * Static representation of the {@link taxDepartureCountry} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TAX_DEPARTURE_COUNTRY: fieldBuilder.buildEdmTypeField('TaxDepartureCountry', 'Edm.String', true),
                /**
                 * Static representation of the {@link vatRegistrationCountry} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VAT_REGISTRATION_COUNTRY: fieldBuilder.buildEdmTypeField('VATRegistrationCountry', 'Edm.String', true),
                /**
                 * Static representation of the {@link salesOrderApprovalReason} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_ORDER_APPROVAL_REASON: fieldBuilder.buildEdmTypeField('SalesOrderApprovalReason', 'Edm.String', true),
                /**
                 * Static representation of the {@link salesDocApprovalStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_DOC_APPROVAL_STATUS: fieldBuilder.buildEdmTypeField('SalesDocApprovalStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link overallSdProcessStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OVERALL_SD_PROCESS_STATUS: fieldBuilder.buildEdmTypeField('OverallSDProcessStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link totalCreditCheckStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TOTAL_CREDIT_CHECK_STATUS: fieldBuilder.buildEdmTypeField('TotalCreditCheckStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link overallTotalDeliveryStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OVERALL_TOTAL_DELIVERY_STATUS: fieldBuilder.buildEdmTypeField('OverallTotalDeliveryStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link overallSdDocumentRejectionSts} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OVERALL_SD_DOCUMENT_REJECTION_STS: fieldBuilder.buildEdmTypeField('OverallSDDocumentRejectionSts', 'Edm.String', true),
                /**
                 * Static representation of the {@link billingDocumentDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_DOCUMENT_DATE: fieldBuilder.buildEdmTypeField('BillingDocumentDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link contractAccount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONTRACT_ACCOUNT: fieldBuilder.buildEdmTypeField('ContractAccount', 'Edm.String', true),
                /**
                 * Static representation of the {@link additionalValueDays} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_VALUE_DAYS: fieldBuilder.buildEdmTypeField('AdditionalValueDays', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerPurchaseOrderSuplmnt} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_PURCHASE_ORDER_SUPLMNT: fieldBuilder.buildEdmTypeField('CustomerPurchaseOrderSuplmnt', 'Edm.String', true),
                /**
                 * Static representation of the {@link servicesRenderedDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICES_RENDERED_DATE: fieldBuilder.buildEdmTypeField('ServicesRenderedDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link fashionCancelDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FASHION_CANCEL_DATE: fieldBuilder.buildEdmTypeField('FashionCancelDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link retailAdditionalCustomerGrp6} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RETAIL_ADDITIONAL_CUSTOMER_GRP_6: fieldBuilder.buildEdmTypeField('RetailAdditionalCustomerGrp6', 'Edm.String', true),
                /**
                 * Static representation of the {@link retailAdditionalCustomerGrp7} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RETAIL_ADDITIONAL_CUSTOMER_GRP_7: fieldBuilder.buildEdmTypeField('RetailAdditionalCustomerGrp7', 'Edm.String', true),
                /**
                 * Static representation of the {@link retailAdditionalCustomerGrp8} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RETAIL_ADDITIONAL_CUSTOMER_GRP_8: fieldBuilder.buildEdmTypeField('RetailAdditionalCustomerGrp8', 'Edm.String', true),
                /**
                 * Static representation of the {@link retailAdditionalCustomerGrp9} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RETAIL_ADDITIONAL_CUSTOMER_GRP_9: fieldBuilder.buildEdmTypeField('RetailAdditionalCustomerGrp9', 'Edm.String', true),
                /**
                 * Static representation of the {@link retailAdditionalCustomerGrp10} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RETAIL_ADDITIONAL_CUSTOMER_GRP_10: fieldBuilder.buildEdmTypeField('RetailAdditionalCustomerGrp10', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', SalesOrder_1.SalesOrder)
            };
        }
        return this._schema;
    }
}
exports.SalesOrderApi = SalesOrderApi;
//# sourceMappingURL=SalesOrderApi.js.map