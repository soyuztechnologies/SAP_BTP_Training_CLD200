"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemPartner = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SalesOrderItemPartner" of service "API_SALES_ORDER_SRV".
 */
class SalesOrderItemPartner extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderItemPartner = SalesOrderItemPartner;
/**
 * Technical entity name for SalesOrderItemPartner.
 */
SalesOrderItemPartner._entityName = 'A_SalesOrderItemPartner';
/**
 * Default url path for the according service.
 */
SalesOrderItemPartner._defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
/**
 * All key fields of the SalesOrderItemPartner entity
 */
SalesOrderItemPartner._keys = ['SalesOrder', 'SalesOrderItem', 'PartnerFunction'];
//# sourceMappingURL=SalesOrderItemPartner.js.map