"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderBillingPlanItemApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const SalesOrderBillingPlanItem_1 = require("./SalesOrderBillingPlanItem");
const SalesOrderBillingPlanItemRequestBuilder_1 = require("./SalesOrderBillingPlanItemRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderBillingPlanItemApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SalesOrderBillingPlanItem_1.SalesOrderBillingPlanItem;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_BILLING_PLAN: new odata_v2_1.OneToOneLink('to_BillingPlan', this, linkedApis[0]),
            TO_SALES_ORDER: new odata_v2_1.OneToOneLink('to_SalesOrder', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new SalesOrderBillingPlanItemRequestBuilder_1.SalesOrderBillingPlanItemRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SalesOrderBillingPlanItem_1.SalesOrderBillingPlanItem, this.deSerializers);
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
                 * Static representation of the {@link billingPlan} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_PLAN: fieldBuilder.buildEdmTypeField('BillingPlan', 'Edm.String', false),
                /**
                 * Static representation of the {@link billingPlanItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_PLAN_ITEM: fieldBuilder.buildEdmTypeField('BillingPlanItem', 'Edm.String', false),
                /**
                 * Static representation of the {@link billingPlanDateCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_PLAN_DATE_CATEGORY: fieldBuilder.buildEdmTypeField('BillingPlanDateCategory', 'Edm.String', true),
                /**
                 * Static representation of the {@link billingPlanBillingDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_PLAN_BILLING_DATE: fieldBuilder.buildEdmTypeField('BillingPlanBillingDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link billingPlanAmount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_PLAN_AMOUNT: fieldBuilder.buildEdmTypeField('BillingPlanAmount', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link transactionCurrency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField('TransactionCurrency', 'Edm.String', true),
                /**
                 * Static representation of the {@link billingPlanAmountPercent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_PLAN_AMOUNT_PERCENT: fieldBuilder.buildEdmTypeField('BillingPlanAmountPercent', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link customerPaymentTerms} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_PAYMENT_TERMS: fieldBuilder.buildEdmTypeField('CustomerPaymentTerms', 'Edm.String', true),
                /**
                 * Static representation of the {@link proposedBillingDocumentType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROPOSED_BILLING_DOCUMENT_TYPE: fieldBuilder.buildEdmTypeField('ProposedBillingDocumentType', 'Edm.String', true),
                /**
                 * Static representation of the {@link billingPlanDateDescriptionCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_PLAN_DATE_DESCRIPTION_CODE: fieldBuilder.buildEdmTypeField('BillingPlanDateDescriptionCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link billingBlockReason} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_BLOCK_REASON: fieldBuilder.buildEdmTypeField('BillingBlockReason', 'Edm.String', true),
                /**
                 * Static representation of the {@link billingPlanServiceStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_PLAN_SERVICE_START_DATE: fieldBuilder.buildEdmTypeField('BillingPlanServiceStartDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link billingPlanServiceEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_PLAN_SERVICE_END_DATE: fieldBuilder.buildEdmTypeField('BillingPlanServiceEndDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link billingPlanRelatedBillgStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_PLAN_RELATED_BILLG_STATUS: fieldBuilder.buildEdmTypeField('BillingPlanRelatedBillgStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link billingPlanType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_PLAN_TYPE: fieldBuilder.buildEdmTypeField('BillingPlanType', 'Edm.String', true),
                /**
                 * Static representation of the {@link adoptingBillingDateId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADOPTING_BILLING_DATE_ID: fieldBuilder.buildEdmTypeField('AdoptingBillingDateID', 'Edm.String', true),
                /**
                 * Static representation of the {@link billingPlanBillingRule} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_PLAN_BILLING_RULE: fieldBuilder.buildEdmTypeField('BillingPlanBillingRule', 'Edm.String', true),
                /**
                 * Static representation of the {@link billingPlanMilestoneUsage} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_PLAN_MILESTONE_USAGE: fieldBuilder.buildEdmTypeField('BillingPlanMilestoneUsage', 'Edm.String', true),
                /**
                 * Static representation of the {@link billgPlnDteCorrectionRfndType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLG_PLN_DTE_CORRECTION_RFND_TYPE: fieldBuilder.buildEdmTypeField('BillgPlnDteCorrectionRfndType', 'Edm.String', true),
                /**
                 * Static representation of the {@link accountingExchangeRate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCOUNTING_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField('AccountingExchangeRate', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link postponementReason} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                POSTPONEMENT_REASON: fieldBuilder.buildEdmTypeField('PostponementReason', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', SalesOrderBillingPlanItem_1.SalesOrderBillingPlanItem)
            };
        }
        return this._schema;
    }
}
exports.SalesOrderBillingPlanItemApi = SalesOrderBillingPlanItemApi;
//# sourceMappingURL=SalesOrderBillingPlanItemApi.js.map