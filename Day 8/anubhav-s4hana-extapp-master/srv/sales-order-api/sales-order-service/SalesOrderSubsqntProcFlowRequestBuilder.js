"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderSubsqntProcFlowRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link SalesOrderSubsqntProcFlow} entity.
 */
class SalesOrderSubsqntProcFlowRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `SalesOrderSubsqntProcFlow` entity based on its keys.
     * @param salesOrder Key property. See {@link SalesOrderSubsqntProcFlow.salesOrder}.
     * @param docRelationshipUuid Key property. See {@link SalesOrderSubsqntProcFlow.docRelationshipUuid}.
     * @returns A request builder for creating requests to retrieve one `SalesOrderSubsqntProcFlow` entity based on its keys.
     */
    getByKey(salesOrder, docRelationshipUuid) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            DocRelationshipUUID: docRelationshipUuid
        });
    }
    /**
     * Returns a request builder for querying all `SalesOrderSubsqntProcFlow` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOrderSubsqntProcFlow` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.SalesOrderSubsqntProcFlowRequestBuilder = SalesOrderSubsqntProcFlowRequestBuilder;
//# sourceMappingURL=SalesOrderSubsqntProcFlowRequestBuilder.js.map