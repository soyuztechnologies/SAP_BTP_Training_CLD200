"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItmSubsqntProcFlowApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const SalesOrderItmSubsqntProcFlow_1 = require("./SalesOrderItmSubsqntProcFlow");
const SalesOrderItmSubsqntProcFlowRequestBuilder_1 = require("./SalesOrderItmSubsqntProcFlowRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderItmSubsqntProcFlowApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SalesOrderItmSubsqntProcFlow_1.SalesOrderItmSubsqntProcFlow;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_SALES_ORDER: new odata_v2_1.OneToOneLink('to_SalesOrder', this, linkedApis[0]),
            TO_SALES_ORDER_ITEM: new odata_v2_1.OneToOneLink('to_SalesOrderItem', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new SalesOrderItmSubsqntProcFlowRequestBuilder_1.SalesOrderItmSubsqntProcFlowRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SalesOrderItmSubsqntProcFlow_1.SalesOrderItmSubsqntProcFlow, this.deSerializers);
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
                 * Static representation of the {@link salesOrderItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_ORDER_ITEM: fieldBuilder.buildEdmTypeField('SalesOrderItem', 'Edm.String', false),
                /**
                 * Static representation of the {@link docRelationshipUuid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DOC_RELATIONSHIP_UUID: fieldBuilder.buildEdmTypeField('DocRelationshipUUID', 'Edm.Guid', false),
                /**
                 * Static representation of the {@link subsequentDocument} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUBSEQUENT_DOCUMENT: fieldBuilder.buildEdmTypeField('SubsequentDocument', 'Edm.String', true),
                /**
                 * Static representation of the {@link subsequentDocumentItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUBSEQUENT_DOCUMENT_ITEM: fieldBuilder.buildEdmTypeField('SubsequentDocumentItem', 'Edm.String', true),
                /**
                 * Static representation of the {@link subsequentDocumentCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUBSEQUENT_DOCUMENT_CATEGORY: fieldBuilder.buildEdmTypeField('SubsequentDocumentCategory', 'Edm.String', true),
                /**
                 * Static representation of the {@link processFlowLevel} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROCESS_FLOW_LEVEL: fieldBuilder.buildEdmTypeField('ProcessFlowLevel', 'Edm.String', true),
                /**
                 * Static representation of the {@link relatedProcFlowDocStsFieldName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RELATED_PROC_FLOW_DOC_STS_FIELD_NAME: fieldBuilder.buildEdmTypeField('RelatedProcFlowDocStsFieldName', 'Edm.String', true),
                /**
                 * Static representation of the {@link sdProcessStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SD_PROCESS_STATUS: fieldBuilder.buildEdmTypeField('SDProcessStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link accountingTransferStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCOUNTING_TRANSFER_STATUS: fieldBuilder.buildEdmTypeField('AccountingTransferStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link prelimBillingDocumentStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRELIM_BILLING_DOCUMENT_STATUS: fieldBuilder.buildEdmTypeField('PrelimBillingDocumentStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link subsqntDocItmPrecdgDocument} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUBSQNT_DOC_ITM_PRECDG_DOCUMENT: fieldBuilder.buildEdmTypeField('SubsqntDocItmPrecdgDocument', 'Edm.String', true),
                /**
                 * Static representation of the {@link subsqntDocItmPrecdgDocItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUBSQNT_DOC_ITM_PRECDG_DOC_ITEM: fieldBuilder.buildEdmTypeField('SubsqntDocItmPrecdgDocItem', 'Edm.String', true),
                /**
                 * Static representation of the {@link subsqntDocItmPrecdgDocCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUBSQNT_DOC_ITM_PRECDG_DOC_CATEGORY: fieldBuilder.buildEdmTypeField('SubsqntDocItmPrecdgDocCategory', 'Edm.String', true),
                /**
                 * Static representation of the {@link creationDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATION_DATE: fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link creationTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATION_TIME: fieldBuilder.buildEdmTypeField('CreationTime', 'Edm.Time', true),
                /**
                 * Static representation of the {@link lastChangeDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGE_DATE: fieldBuilder.buildEdmTypeField('LastChangeDate', 'Edm.DateTime', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', SalesOrderItmSubsqntProcFlow_1.SalesOrderItmSubsqntProcFlow)
            };
        }
        return this._schema;
    }
}
exports.SalesOrderItmSubsqntProcFlowApi = SalesOrderItmSubsqntProcFlowApi;
//# sourceMappingURL=SalesOrderItmSubsqntProcFlowApi.js.map