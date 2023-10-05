"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderRelatedObject = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SalesOrderRelatedObject" of service "API_SALES_ORDER_SRV".
 */
class SalesOrderRelatedObject extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderRelatedObject = SalesOrderRelatedObject;
/**
 * Technical entity name for SalesOrderRelatedObject.
 */
SalesOrderRelatedObject._entityName = 'A_SalesOrderRelatedObject';
/**
 * Default url path for the according service.
 */
SalesOrderRelatedObject._defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
/**
 * All key fields of the SalesOrderRelatedObject entity
 */
SalesOrderRelatedObject._keys = ['SalesOrder', 'SDDocRelatedObjectSequenceNmbr'];
//# sourceMappingURL=SalesOrderRelatedObject.js.map