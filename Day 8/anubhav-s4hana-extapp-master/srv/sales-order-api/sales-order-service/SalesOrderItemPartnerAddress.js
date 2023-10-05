"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemPartnerAddress = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SalesOrderItemPartnerAddress" of service "API_SALES_ORDER_SRV".
 */
class SalesOrderItemPartnerAddress extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderItemPartnerAddress = SalesOrderItemPartnerAddress;
/**
 * Technical entity name for SalesOrderItemPartnerAddress.
 */
SalesOrderItemPartnerAddress._entityName = 'A_SalesOrderItemPartnerAddress';
/**
 * Default url path for the according service.
 */
SalesOrderItemPartnerAddress._defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
/**
 * All key fields of the SalesOrderItemPartnerAddress entity
 */
SalesOrderItemPartnerAddress._keys = [
    'SalesOrder',
    'SalesOrderItem',
    'PartnerFunction',
    'AddressRepresentationCode'
];
//# sourceMappingURL=SalesOrderItemPartnerAddress.js.map