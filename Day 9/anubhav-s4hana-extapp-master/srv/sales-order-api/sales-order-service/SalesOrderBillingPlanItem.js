"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderBillingPlanItem = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SalesOrderBillingPlanItem" of service "API_SALES_ORDER_SRV".
 */
class SalesOrderBillingPlanItem extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderBillingPlanItem = SalesOrderBillingPlanItem;
/**
 * Technical entity name for SalesOrderBillingPlanItem.
 */
SalesOrderBillingPlanItem._entityName = 'A_SalesOrderBillingPlanItem';
/**
 * Default url path for the according service.
 */
SalesOrderBillingPlanItem._defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
/**
 * All key fields of the SalesOrderBillingPlanItem entity
 */
SalesOrderBillingPlanItem._keys = ['SalesOrder', 'BillingPlan', 'BillingPlanItem'];
//# sourceMappingURL=SalesOrderBillingPlanItem.js.map