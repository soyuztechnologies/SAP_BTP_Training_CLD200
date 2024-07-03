"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderPrecdgProcFlowRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link SalesOrderPrecdgProcFlow} entity.
 */
class SalesOrderPrecdgProcFlowRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `SalesOrderPrecdgProcFlow` entity based on its keys.
     * @param salesOrder Key property. See {@link SalesOrderPrecdgProcFlow.salesOrder}.
     * @param docRelationshipUuid Key property. See {@link SalesOrderPrecdgProcFlow.docRelationshipUuid}.
     * @returns A request builder for creating requests to retrieve one `SalesOrderPrecdgProcFlow` entity based on its keys.
     */
    getByKey(salesOrder, docRelationshipUuid) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            DocRelationshipUUID: docRelationshipUuid
        });
    }
    /**
     * Returns a request builder for querying all `SalesOrderPrecdgProcFlow` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOrderPrecdgProcFlow` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.SalesOrderPrecdgProcFlowRequestBuilder = SalesOrderPrecdgProcFlowRequestBuilder;
//# sourceMappingURL=SalesOrderPrecdgProcFlowRequestBuilder.js.map