"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SalesOrderItem_1 = require("./SalesOrderItem");
/**
 * Request builder class for operations supported on the {@link SalesOrderItem} entity.
 */
class SalesOrderItemRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `SalesOrderItem` entity based on its keys.
     * @param salesOrder Key property. See {@link SalesOrderItem.salesOrder}.
     * @param salesOrderItem Key property. See {@link SalesOrderItem.salesOrderItem}.
     * @returns A request builder for creating requests to retrieve one `SalesOrderItem` entity based on its keys.
     */
    getByKey(salesOrder, salesOrderItem) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            SalesOrderItem: salesOrderItem
        });
    }
    /**
     * Returns a request builder for querying all `SalesOrderItem` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOrderItem` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `SalesOrderItem` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesOrderItem`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `SalesOrderItem`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesOrderItem`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(salesOrderOrEntity, salesOrderItem) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, salesOrderOrEntity instanceof SalesOrderItem_1.SalesOrderItem
            ? salesOrderOrEntity
            : {
                SalesOrder: salesOrderOrEntity,
                SalesOrderItem: salesOrderItem
            });
    }
}
exports.SalesOrderItemRequestBuilder = SalesOrderItemRequestBuilder;
//# sourceMappingURL=SalesOrderItemRequestBuilder.js.map