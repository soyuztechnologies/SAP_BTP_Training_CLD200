"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlsOrdPaymentPlanItemDetails = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SlsOrdPaymentPlanItemDetails" of service "API_SALES_ORDER_SRV".
 */
class SlsOrdPaymentPlanItemDetails extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SlsOrdPaymentPlanItemDetails = SlsOrdPaymentPlanItemDetails;
/**
 * Technical entity name for SlsOrdPaymentPlanItemDetails.
 */
SlsOrdPaymentPlanItemDetails._entityName = 'A_SlsOrdPaymentPlanItemDetails';
/**
 * Default url path for the according service.
 */
SlsOrdPaymentPlanItemDetails._defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
/**
 * All key fields of the SlsOrdPaymentPlanItemDetails entity
 */
SlsOrdPaymentPlanItemDetails._keys = ['SalesOrder', 'PaymentPlanItem'];
//# sourceMappingURL=SlsOrdPaymentPlanItemDetails.js.map