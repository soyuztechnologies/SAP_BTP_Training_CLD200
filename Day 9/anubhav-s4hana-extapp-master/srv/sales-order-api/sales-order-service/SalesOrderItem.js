"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItem = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SalesOrderItem" of service "API_SALES_ORDER_SRV".
 */
class SalesOrderItem extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderItem = SalesOrderItem;
/**
 * Technical entity name for SalesOrderItem.
 */
SalesOrderItem._entityName = 'A_SalesOrderItem';
/**
 * Default url path for the according service.
 */
SalesOrderItem._defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
/**
 * All key fields of the SalesOrderItem entity
 */
SalesOrderItem._keys = ['SalesOrder', 'SalesOrderItem'];
//# sourceMappingURL=SalesOrderItem.js.map