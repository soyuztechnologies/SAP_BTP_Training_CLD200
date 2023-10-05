"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderText = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SalesOrderText" of service "API_SALES_ORDER_SRV".
 */
class SalesOrderText extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderText = SalesOrderText;
/**
 * Technical entity name for SalesOrderText.
 */
SalesOrderText._entityName = 'A_SalesOrderText';
/**
 * Default url path for the according service.
 */
SalesOrderText._defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
/**
 * All key fields of the SalesOrderText entity
 */
SalesOrderText._keys = ['SalesOrder', 'Language', 'LongTextID'];
//# sourceMappingURL=SalesOrderText.js.map