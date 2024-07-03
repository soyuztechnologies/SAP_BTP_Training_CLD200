"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemPrElement = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SalesOrderItemPrElement" of service "API_SALES_ORDER_SRV".
 */
class SalesOrderItemPrElement extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderItemPrElement = SalesOrderItemPrElement;
/**
 * Technical entity name for SalesOrderItemPrElement.
 */
SalesOrderItemPrElement._entityName = 'A_SalesOrderItemPrElement';
/**
 * Default url path for the according service.
 */
SalesOrderItemPrElement._defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
/**
 * All key fields of the SalesOrderItemPrElement entity
 */
SalesOrderItemPrElement._keys = [
    'SalesOrder',
    'SalesOrderItem',
    'PricingProcedureStep',
    'PricingProcedureCounter'
];
//# sourceMappingURL=SalesOrderItemPrElement.js.map