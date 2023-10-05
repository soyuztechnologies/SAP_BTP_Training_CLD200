"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemRelatedObjectApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const SalesOrderItemRelatedObject_1 = require("./SalesOrderItemRelatedObject");
const SalesOrderItemRelatedObjectRequestBuilder_1 = require("./SalesOrderItemRelatedObjectRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderItemRelatedObjectApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SalesOrderItemRelatedObject_1.SalesOrderItemRelatedObject;
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
        return new SalesOrderItemRelatedObjectRequestBuilder_1.SalesOrderItemRelatedObjectRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SalesOrderItemRelatedObject_1.SalesOrderItemRelatedObject, this.deSerializers);
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
                 * Static representation of the {@link sdDocRelatedObjectSequenceNmbr} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SD_DOC_RELATED_OBJECT_SEQUENCE_NMBR: fieldBuilder.buildEdmTypeField('SDDocRelatedObjectSequenceNmbr', 'Edm.String', false),
                /**
                 * Static representation of the {@link sdDocumentRelatedObjectType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SD_DOCUMENT_RELATED_OBJECT_TYPE: fieldBuilder.buildEdmTypeField('SDDocumentRelatedObjectType', 'Edm.String', true),
                /**
                 * Static representation of the {@link sdDocRelatedObjectSystem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SD_DOC_RELATED_OBJECT_SYSTEM: fieldBuilder.buildEdmTypeField('SDDocRelatedObjectSystem', 'Edm.String', true),
                /**
                 * Static representation of the {@link sdDocRelatedObjectReference1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SD_DOC_RELATED_OBJECT_REFERENCE_1: fieldBuilder.buildEdmTypeField('SDDocRelatedObjectReference1', 'Edm.String', true),
                /**
                 * Static representation of the {@link sdDocRelatedObjectReference2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SD_DOC_RELATED_OBJECT_REFERENCE_2: fieldBuilder.buildEdmTypeField('SDDocRelatedObjectReference2', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', SalesOrderItemRelatedObject_1.SalesOrderItemRelatedObject)
            };
        }
        return this._schema;
    }
}
exports.SalesOrderItemRelatedObjectApi = SalesOrderItemRelatedObjectApi;
//# sourceMappingURL=SalesOrderItemRelatedObjectApi.js.map