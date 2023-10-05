"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionResult = exports.FunctionResultField = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * FunctionResultField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
class FunctionResultField extends odata_v2_1.ComplexTypeField {
    /**
     * Creates an instance of FunctionResultField.
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName, fieldOf, deSerializers, fieldOptions) {
        super(fieldName, fieldOf, deSerializers, FunctionResult, fieldOptions);
        this._fieldBuilder = new odata_v2_1.FieldBuilder(this, this.deSerializers);
        /**
         * Representation of the {@link FunctionResult.boolean} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.boolean = this._fieldBuilder.buildEdmTypeField('Boolean', 'Edm.Boolean', false);
    }
}
exports.FunctionResultField = FunctionResultField;
var FunctionResult;
(function (FunctionResult) {
    /**
     * Metadata information on all properties of the `FunctionResult` complex type.
     */
    FunctionResult._propertyMetadata = [
        {
            originalName: 'Boolean',
            name: 'boolean',
            type: 'Edm.Boolean',
            isCollection: false
        }
    ];
})(FunctionResult = exports.FunctionResult || (exports.FunctionResult = {}));
//# sourceMappingURL=FunctionResult.js.map