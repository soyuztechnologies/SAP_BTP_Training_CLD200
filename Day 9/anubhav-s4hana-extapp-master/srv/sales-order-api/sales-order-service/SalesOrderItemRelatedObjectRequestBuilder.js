"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemRelatedObjectRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SalesOrderItemRelatedObject_1 = require("./SalesOrderItemRelatedObject");
/**
 * Request builder class for operations supported on the {@link SalesOrderItemRelatedObject} entity.
 */
class SalesOrderItemRelatedObjectRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `SalesOrderItemRelatedObject` entity based on its keys.
     * @param salesOrder Key property. See {@link SalesOrderItemRelatedObject.salesOrder}.
     * @param salesOrderItem Key property. See {@link SalesOrderItemRelatedObject.salesOrderItem}.
     * @param sdDocRelatedObjectSequenceNmbr Key property. See {@link SalesOrderItemRelatedObject.sdDocRelatedObjectSequenceNmbr}.
     * @returns A request builder for creating requests to retrieve one `SalesOrderItemRelatedObject` entity based on its keys.
     */
    getByKey(salesOrder, salesOrderItem, sdDocRelatedObjectSequenceNmbr) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            SalesOrderItem: salesOrderItem,
            SDDocRelatedObjectSequenceNmbr: sdDocRelatedObjectSequenceNmbr
        });
    }
    /**
     * Returns a request builder for querying all `SalesOrderItemRelatedObject` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOrderItemRelatedObject` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `SalesOrderItemRelatedObject` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesOrderItemRelatedObject`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    delete(salesOrderOrEntity, salesOrderItem, sdDocRelatedObjectSequenceNmbr) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, salesOrderOrEntity instanceof SalesOrderItemRelatedObject_1.SalesOrderItemRelatedObject
            ? salesOrderOrEntity
            : {
                SalesOrder: salesOrderOrEntity,
                SalesOrderItem: salesOrderItem,
                SDDocRelatedObjectSequenceNmbr: sdDocRelatedObjectSequenceNmbr
            });
    }
}
exports.SalesOrderItemRelatedObjectRequestBuilder = SalesOrderItemRelatedObjectRequestBuilder;
//# sourceMappingURL=SalesOrderItemRelatedObjectRequestBuilder.js.map