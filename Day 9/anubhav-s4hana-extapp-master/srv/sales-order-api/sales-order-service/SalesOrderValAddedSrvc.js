"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderValAddedSrvc = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SalesOrderValAddedSrvc" of service "API_SALES_ORDER_SRV".
 */
class SalesOrderValAddedSrvc extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderValAddedSrvc = SalesOrderValAddedSrvc;
/**
 * Technical entity name for SalesOrderValAddedSrvc.
 */
SalesOrderValAddedSrvc._entityName = 'A_SalesOrderValAddedSrvc';
/**
 * Default url path for the according service.
 */
SalesOrderValAddedSrvc._defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
/**
 * All key fields of the SalesOrderValAddedSrvc entity
 */
SalesOrderValAddedSrvc._keys = [
    'ValueAddedServiceType',
    'ValueAddedSubServiceType',
    'SalesOrder',
    'SalesOrderItem'
];
//# sourceMappingURL=SalesOrderValAddedSrvc.js.map