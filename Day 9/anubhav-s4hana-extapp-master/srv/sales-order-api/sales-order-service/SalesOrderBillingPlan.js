"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderBillingPlan = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SalesOrderBillingPlan" of service "API_SALES_ORDER_SRV".
 */
class SalesOrderBillingPlan extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderBillingPlan = SalesOrderBillingPlan;
/**
 * Technical entity name for SalesOrderBillingPlan.
 */
SalesOrderBillingPlan._entityName = 'A_SalesOrderBillingPlan';
/**
 * Default url path for the according service.
 */
SalesOrderBillingPlan._defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
/**
 * All key fields of the SalesOrderBillingPlan entity
 */
SalesOrderBillingPlan._keys = ['SalesOrder', 'BillingPlan'];
//# sourceMappingURL=SalesOrderBillingPlan.js.map