"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderSubsqntProcFlow = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SalesOrderSubsqntProcFlow" of service "API_SALES_ORDER_SRV".
 */
class SalesOrderSubsqntProcFlow extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderSubsqntProcFlow = SalesOrderSubsqntProcFlow;
/**
 * Technical entity name for SalesOrderSubsqntProcFlow.
 */
SalesOrderSubsqntProcFlow._entityName = 'A_SalesOrderSubsqntProcFlow';
/**
 * Default url path for the according service.
 */
SalesOrderSubsqntProcFlow._defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
/**
 * All key fields of the SalesOrderSubsqntProcFlow entity
 */
SalesOrderSubsqntProcFlow._keys = ['SalesOrder', 'DocRelationshipUUID'];
//# sourceMappingURL=SalesOrderSubsqntProcFlow.js.map