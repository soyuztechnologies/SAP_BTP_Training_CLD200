"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItmSubsqntProcFlow = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SalesOrderItmSubsqntProcFlow" of service "API_SALES_ORDER_SRV".
 */
class SalesOrderItmSubsqntProcFlow extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderItmSubsqntProcFlow = SalesOrderItmSubsqntProcFlow;
/**
 * Technical entity name for SalesOrderItmSubsqntProcFlow.
 */
SalesOrderItmSubsqntProcFlow._entityName = 'A_SalesOrderItmSubsqntProcFlow';
/**
 * Default url path for the according service.
 */
SalesOrderItmSubsqntProcFlow._defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
/**
 * All key fields of the SalesOrderItmSubsqntProcFlow entity
 */
SalesOrderItmSubsqntProcFlow._keys = ['SalesOrder', 'SalesOrderItem', 'DocRelationshipUUID'];
//# sourceMappingURL=SalesOrderItmSubsqntProcFlow.js.map