"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemText = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SalesOrderItemText" of service "API_SALES_ORDER_SRV".
 */
class SalesOrderItemText extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderItemText = SalesOrderItemText;
/**
 * Technical entity name for SalesOrderItemText.
 */
SalesOrderItemText._entityName = 'A_SalesOrderItemText';
/**
 * Default url path for the according service.
 */
SalesOrderItemText._defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
/**
 * All key fields of the SalesOrderItemText entity
 */
SalesOrderItemText._keys = ['SalesOrder', 'SalesOrderItem', 'Language', 'LongTextID'];
//# sourceMappingURL=SalesOrderItemText.js.map