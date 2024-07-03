"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderPrecdgProcFlow = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SalesOrderPrecdgProcFlow" of service "API_SALES_ORDER_SRV".
 */
class SalesOrderPrecdgProcFlow extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderPrecdgProcFlow = SalesOrderPrecdgProcFlow;
/**
 * Technical entity name for SalesOrderPrecdgProcFlow.
 */
SalesOrderPrecdgProcFlow._entityName = 'A_SalesOrderPrecdgProcFlow';
/**
 * Default url path for the according service.
 */
SalesOrderPrecdgProcFlow._defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
/**
 * All key fields of the SalesOrderPrecdgProcFlow entity
 */
SalesOrderPrecdgProcFlow._keys = ['SalesOrder', 'DocRelationshipUUID'];
//# sourceMappingURL=SalesOrderPrecdgProcFlow.js.map