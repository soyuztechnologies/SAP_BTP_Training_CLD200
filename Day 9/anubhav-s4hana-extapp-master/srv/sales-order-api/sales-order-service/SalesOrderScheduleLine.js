"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderScheduleLine = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SalesOrderScheduleLine" of service "API_SALES_ORDER_SRV".
 */
class SalesOrderScheduleLine extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderScheduleLine = SalesOrderScheduleLine;
/**
 * Technical entity name for SalesOrderScheduleLine.
 */
SalesOrderScheduleLine._entityName = 'A_SalesOrderScheduleLine';
/**
 * Default url path for the according service.
 */
SalesOrderScheduleLine._defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
/**
 * All key fields of the SalesOrderScheduleLine entity
 */
SalesOrderScheduleLine._keys = ['SalesOrder', 'SalesOrderItem', 'ScheduleLine'];
//# sourceMappingURL=SalesOrderScheduleLine.js.map