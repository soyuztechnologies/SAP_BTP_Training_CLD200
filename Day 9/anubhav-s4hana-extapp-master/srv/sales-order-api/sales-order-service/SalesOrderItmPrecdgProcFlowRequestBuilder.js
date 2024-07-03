"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItmPrecdgProcFlowRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link SalesOrderItmPrecdgProcFlow} entity.
 */
class SalesOrderItmPrecdgProcFlowRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `SalesOrderItmPrecdgProcFlow` entity based on its keys.
     * @param salesOrder Key property. See {@link SalesOrderItmPrecdgProcFlow.salesOrder}.
     * @param salesOrderItem Key property. See {@link SalesOrderItmPrecdgProcFlow.salesOrderItem}.
     * @param docRelationshipUuid Key property. See {@link SalesOrderItmPrecdgProcFlow.docRelationshipUuid}.
     * @returns A request builder for creating requests to retrieve one `SalesOrderItmPrecdgProcFlow` entity based on its keys.
     */
    getByKey(salesOrder, salesOrderItem, docRelationshipUuid) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            SalesOrderItem: salesOrderItem,
            DocRelationshipUUID: docRelationshipUuid
        });
    }
    /**
     * Returns a request builder for querying all `SalesOrderItmPrecdgProcFlow` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOrderItmPrecdgProcFlow` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.SalesOrderItmPrecdgProcFlowRequestBuilder = SalesOrderItmPrecdgProcFlowRequestBuilder;
//# sourceMappingURL=SalesOrderItmPrecdgProcFlowRequestBuilder.js.map