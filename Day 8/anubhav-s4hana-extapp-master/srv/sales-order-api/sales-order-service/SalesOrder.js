"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SalesOrder" of service "API_SALES_ORDER_SRV".
 */
class SalesOrder extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrder = SalesOrder;
/**
 * Technical entity name for SalesOrder.
 */
SalesOrder._entityName = 'A_SalesOrder';
/**
 * Default url path for the according service.
 */
SalesOrder._defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
/**
 * All key fields of the SalesOrder entity
 */
SalesOrder._keys = ['SalesOrder'];
//# sourceMappingURL=SalesOrder.js.map