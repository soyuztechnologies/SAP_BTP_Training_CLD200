"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderHeaderPartner = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SalesOrderHeaderPartner" of service "API_SALES_ORDER_SRV".
 */
class SalesOrderHeaderPartner extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderHeaderPartner = SalesOrderHeaderPartner;
/**
 * Technical entity name for SalesOrderHeaderPartner.
 */
SalesOrderHeaderPartner._entityName = 'A_SalesOrderHeaderPartner';
/**
 * Default url path for the according service.
 */
SalesOrderHeaderPartner._defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
/**
 * All key fields of the SalesOrderHeaderPartner entity
 */
SalesOrderHeaderPartner._keys = ['SalesOrder', 'PartnerFunction'];
//# sourceMappingURL=SalesOrderHeaderPartner.js.map