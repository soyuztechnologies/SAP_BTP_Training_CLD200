"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderHeaderPrElement = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SalesOrderHeaderPrElement" of service "API_SALES_ORDER_SRV".
 */
class SalesOrderHeaderPrElement extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderHeaderPrElement = SalesOrderHeaderPrElement;
/**
 * Technical entity name for SalesOrderHeaderPrElement.
 */
SalesOrderHeaderPrElement._entityName = 'A_SalesOrderHeaderPrElement';
/**
 * Default url path for the according service.
 */
SalesOrderHeaderPrElement._defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
/**
 * All key fields of the SalesOrderHeaderPrElement entity
 */
SalesOrderHeaderPrElement._keys = [
    'SalesOrder',
    'PricingProcedureStep',
    'PricingProcedureCounter'
];
//# sourceMappingURL=SalesOrderHeaderPrElement.js.map