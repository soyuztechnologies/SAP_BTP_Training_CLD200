"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderValAddedSrvcApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const SalesOrderValAddedSrvc_1 = require("./SalesOrderValAddedSrvc");
const SalesOrderValAddedSrvcRequestBuilder_1 = require("./SalesOrderValAddedSrvcRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderValAddedSrvcApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SalesOrderValAddedSrvc_1.SalesOrderValAddedSrvc;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new SalesOrderValAddedSrvcRequestBuilder_1.SalesOrderValAddedSrvcRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SalesOrderValAddedSrvc_1.SalesOrderValAddedSrvc, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link valueAddedServiceType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUE_ADDED_SERVICE_TYPE: fieldBuilder.buildEdmTypeField('ValueAddedServiceType', 'Edm.String', false),
                /**
                 * Static representation of the {@link valueAddedSubServiceType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUE_ADDED_SUB_SERVICE_TYPE: fieldBuilder.buildEdmTypeField('ValueAddedSubServiceType', 'Edm.String', false),
                /**
                 * Static representation of the {@link salesOrder} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_ORDER: fieldBuilder.buildEdmTypeField('SalesOrder', 'Edm.String', false),
                /**
                 * Static representation of the {@link salesOrderItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_ORDER_ITEM: fieldBuilder.buildEdmTypeField('SalesOrderItem', 'Edm.String', false),
                /**
                 * Static representation of the {@link valAddedSrvcTransactionNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VAL_ADDED_SRVC_TRANSACTION_NUMBER: fieldBuilder.buildEdmTypeField('ValAddedSrvcTransactionNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link valAddedSrvcItemGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VAL_ADDED_SRVC_ITEM_GROUP: fieldBuilder.buildEdmTypeField('ValAddedSrvcItemGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link valAddedSrvcItemNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VAL_ADDED_SRVC_ITEM_NUMBER: fieldBuilder.buildEdmTypeField('ValAddedSrvcItemNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link valueAddedServiceProduct} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUE_ADDED_SERVICE_PRODUCT: fieldBuilder.buildEdmTypeField('ValueAddedServiceProduct', 'Edm.String', true),
                /**
                 * Static representation of the {@link valAddedSrvcHasToBeOrdered} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VAL_ADDED_SRVC_HAS_TO_BE_ORDERED: fieldBuilder.buildEdmTypeField('ValAddedSrvcHasToBeOrdered', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link valAddedSrvcIncrement} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VAL_ADDED_SRVC_INCREMENT: fieldBuilder.buildEdmTypeField('ValAddedSrvcIncrement', 'Edm.String', true),
                /**
                 * Static representation of the {@link valueAddedServiceChargeCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUE_ADDED_SERVICE_CHARGE_CODE: fieldBuilder.buildEdmTypeField('ValueAddedServiceChargeCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link valAddedSrvcIsCreatedManually} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VAL_ADDED_SRVC_IS_CREATED_MANUALLY: fieldBuilder.buildEdmTypeField('ValAddedSrvcIsCreatedManually', 'Edm.String', true),
                /**
                 * Static representation of the {@link valAddedSrvcItemNumberInSd} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VAL_ADDED_SRVC_ITEM_NUMBER_IN_SD: fieldBuilder.buildEdmTypeField('ValAddedSrvcItemNumberInSD', 'Edm.String', true),
                /**
                 * Static representation of the {@link valAddedSrvcIsRlvtForProcmt} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VAL_ADDED_SRVC_IS_RLVT_FOR_PROCMT: fieldBuilder.buildEdmTypeField('ValAddedSrvcIsRlvtForProcmt', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link valueAddedServiceText1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUE_ADDED_SERVICE_TEXT_1: fieldBuilder.buildEdmTypeField('ValueAddedServiceText1', 'Edm.String', true),
                /**
                 * Static representation of the {@link valueAddedServiceText2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUE_ADDED_SERVICE_TEXT_2: fieldBuilder.buildEdmTypeField('ValueAddedServiceText2', 'Edm.String', true),
                /**
                 * Static representation of the {@link valueAddedServiceText3} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUE_ADDED_SERVICE_TEXT_3: fieldBuilder.buildEdmTypeField('ValueAddedServiceText3', 'Edm.String', true),
                /**
                 * Static representation of the {@link valueAddedServiceLongText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUE_ADDED_SERVICE_LONG_TEXT: fieldBuilder.buildEdmTypeField('ValueAddedServiceLongText', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', SalesOrderValAddedSrvc_1.SalesOrderValAddedSrvc)
            };
        }
        return this._schema;
    }
}
exports.SalesOrderValAddedSrvcApi = SalesOrderValAddedSrvcApi;
//# sourceMappingURL=SalesOrderValAddedSrvcApi.js.map