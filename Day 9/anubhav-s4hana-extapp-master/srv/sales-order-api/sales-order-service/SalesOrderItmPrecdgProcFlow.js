"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItmPrecdgProcFlow = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SalesOrderItmPrecdgProcFlow" of service "API_SALES_ORDER_SRV".
 */
class SalesOrderItmPrecdgProcFlow extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderItmPrecdgProcFlow = SalesOrderItmPrecdgProcFlow;
/**
 * Technical entity name for SalesOrderItmPrecdgProcFlow.
 */
SalesOrderItmPrecdgProcFlow._entityName = 'A_SalesOrderItmPrecdgProcFlow';
/**
 * Default url path for the according service.
 */
SalesOrderItmPrecdgProcFlow._defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
/**
 * All key fields of the SalesOrderItmPrecdgProcFlow entity
 */
SalesOrderItmPrecdgProcFlow._keys = ['SalesOrder', 'SalesOrderItem', 'DocRelationshipUUID'];
//# sourceMappingURL=SalesOrderItmPrecdgProcFlow.js.map