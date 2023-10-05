"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderBillingPlanApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const SalesOrderBillingPlan_1 = require("./SalesOrderBillingPlan");
const SalesOrderBillingPlanRequestBuilder_1 = require("./SalesOrderBillingPlanRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderBillingPlanApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SalesOrderBillingPlan_1.SalesOrderBillingPlan;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_BILLING_PLAN_ITEM: new odata_v2_1.Link('to_BillingPlanItem', this, linkedApis[0]),
            TO_SALES_ORDER: new odata_v2_1.OneToOneLink('to_SalesOrder', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new SalesOrderBillingPlanRequestBuilder_1.SalesOrderBillingPlanRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SalesOrderBillingPlan_1.SalesOrderBillingPlan, this.deSerializers);
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
                 * Static representation of the {@link billingPlanStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_PLAN_START_DATE: fieldBuilder.buildEdmTypeField('BillingPlanStartDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link billingPlanStartDateRule} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_PLAN_START_DATE_RULE: fieldBuilder.buildEdmTypeField('BillingPlanStartDateRule', 'Edm.String', true),
                /**
                 * Static representation of the {@link referenceBillingPlan} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REFERENCE_BILLING_PLAN: fieldBuilder.buildEdmTypeField('ReferenceBillingPlan', 'Edm.String', true),
                /**
                 * Static representation of the {@link billingPlanCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_PLAN_CATEGORY: fieldBuilder.buildEdmTypeField('BillingPlanCategory', 'Edm.String', true),
                /**
                 * Static representation of the {@link billingPlanType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_PLAN_TYPE: fieldBuilder.buildEdmTypeField('BillingPlanType', 'Edm.String', true),
                /**
                 * Static representation of the {@link billingPlanEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_PLAN_END_DATE: fieldBuilder.buildEdmTypeField('BillingPlanEndDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link billingPlanEndDateRule} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_PLAN_END_DATE_RULE: fieldBuilder.buildEdmTypeField('BillingPlanEndDateRule', 'Edm.String', true),
                /**
                 * Static representation of the {@link billingPlanSearchTerm} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_PLAN_SEARCH_TERM: fieldBuilder.buildEdmTypeField('BillingPlanSearchTerm', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', SalesOrderBillingPlan_1.SalesOrderBillingPlan)
            };
        }
        return this._schema;
    }
}
exports.SalesOrderBillingPlanApi = SalesOrderBillingPlanApi;
//# sourceMappingURL=SalesOrderBillingPlanApi.js.map