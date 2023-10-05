"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderPartnerAddress = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SalesOrderPartnerAddress" of service "API_SALES_ORDER_SRV".
 */
class SalesOrderPartnerAddress extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderPartnerAddress = SalesOrderPartnerAddress;
/**
 * Technical entity name for SalesOrderPartnerAddress.
 */
SalesOrderPartnerAddress._entityName = 'A_SalesOrderPartnerAddress';
/**
 * Default url path for the according service.
 */
SalesOrderPartnerAddress._defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
/**
 * All key fields of the SalesOrderPartnerAddress entity
 */
SalesOrderPartnerAddress._keys = ['SalesOrder', 'PartnerFunction', 'AddressRepresentationCode'];
//# sourceMappingURL=SalesOrderPartnerAddress.js.map