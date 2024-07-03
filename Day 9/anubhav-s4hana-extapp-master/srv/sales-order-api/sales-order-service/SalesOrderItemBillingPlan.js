"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemBillingPlan = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SalesOrderItemBillingPlan" of service "API_SALES_ORDER_SRV".
 */
class SalesOrderItemBillingPlan extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderItemBillingPlan = SalesOrderItemBillingPlan;
/**
 * Technical entity name for SalesOrderItemBillingPlan.
 */
SalesOrderItemBillingPlan._entityName = 'A_SalesOrderItemBillingPlan';
/**
 * Default url path for the according service.
 */
SalesOrderItemBillingPlan._defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
/**
 * All key fields of the SalesOrderItemBillingPlan entity
 */
SalesOrderItemBillingPlan._keys = ['SalesOrder', 'SalesOrderItem', 'BillingPlan'];
//# sourceMappingURL=SalesOrderItemBillingPlan.js.map