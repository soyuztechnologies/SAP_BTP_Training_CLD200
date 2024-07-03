"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlsOrderItemBillingPlanItem = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SlsOrderItemBillingPlanItem" of service "API_SALES_ORDER_SRV".
 */
class SlsOrderItemBillingPlanItem extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SlsOrderItemBillingPlanItem = SlsOrderItemBillingPlanItem;
/**
 * Technical entity name for SlsOrderItemBillingPlanItem.
 */
SlsOrderItemBillingPlanItem._entityName = 'A_SlsOrderItemBillingPlanItem';
/**
 * Default url path for the according service.
 */
SlsOrderItemBillingPlanItem._defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
/**
 * All key fields of the SlsOrderItemBillingPlanItem entity
 */
SlsOrderItemBillingPlanItem._keys = [
    'SalesOrder',
    'SalesOrderItem',
    'BillingPlan',
    'BillingPlanItem'
];
//# sourceMappingURL=SlsOrderItemBillingPlanItem.js.map