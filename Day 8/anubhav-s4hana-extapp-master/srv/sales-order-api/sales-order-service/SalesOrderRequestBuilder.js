"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SalesOrder_1 = require("./SalesOrder");
/**
 * Request builder class for operations supported on the {@link SalesOrder} entity.
 */
class SalesOrderRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `SalesOrder` entity based on its keys.
     * @param salesOrder Key property. See {@link SalesOrder.salesOrder}.
     * @returns A request builder for creating requests to retrieve one `SalesOrder` entity based on its keys.
     */
    getByKey(salesOrder) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder
        });
    }
    /**
     * Returns a request builder for querying all `SalesOrder` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOrder` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `SalesOrder` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesOrder`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `SalesOrder`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesOrder`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(salesOrderOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, salesOrderOrEntity instanceof SalesOrder_1.SalesOrder
            ? salesOrderOrEntity
            : { SalesOrder: salesOrderOrEntity });
    }
}
exports.SalesOrderRequestBuilder = SalesOrderRequestBuilder;
//# sourceMappingURL=SalesOrderRequestBuilder.js.map