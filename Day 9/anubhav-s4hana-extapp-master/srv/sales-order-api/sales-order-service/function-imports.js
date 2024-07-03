"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functionImports = exports.releaseApprovalRequest = exports.rejectApprovalRequest = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const FunctionResult_1 = require("./FunctionResult");
/**
 * Reject Approval Request.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function rejectApprovalRequest(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        salesOrder: new odata_v2_1.FunctionImportParameter('SalesOrder', 'Edm.String', parameters.salesOrder)
    };
    return new odata_v2_1.FunctionImportRequestBuilder('post', '/sap/opu/odata/sap/API_SALES_ORDER_SRV', 'rejectApprovalRequest', data => (0, odata_v2_1.transformReturnValueForComplexType)(data, data => (0, odata_v2_1.entityDeserializer)(deSerializers || odata_v2_1.defaultDeSerializers).deserializeComplexType(data, FunctionResult_1.FunctionResult)), params, deSerializers);
}
exports.rejectApprovalRequest = rejectApprovalRequest;
/**
 * Release Approval Request.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function releaseApprovalRequest(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        salesOrder: new odata_v2_1.FunctionImportParameter('SalesOrder', 'Edm.String', parameters.salesOrder)
    };
    return new odata_v2_1.FunctionImportRequestBuilder('post', '/sap/opu/odata/sap/API_SALES_ORDER_SRV', 'releaseApprovalRequest', data => (0, odata_v2_1.transformReturnValueForComplexType)(data, data => (0, odata_v2_1.entityDeserializer)(deSerializers || odata_v2_1.defaultDeSerializers).deserializeComplexType(data, FunctionResult_1.FunctionResult)), params, deSerializers);
}
exports.releaseApprovalRequest = releaseApprovalRequest;
/**
 * @deprecated Since v2.13.0. Use `operations` instead.
 */
exports.functionImports = {
    rejectApprovalRequest,
    releaseApprovalRequest
};
//# sourceMappingURL=function-imports.js.map