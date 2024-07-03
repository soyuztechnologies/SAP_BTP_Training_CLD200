"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderRelatedObjectRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SalesOrderRelatedObject_1 = require("./SalesOrderRelatedObject");
/**
 * Request builder class for operations supported on the {@link SalesOrderRelatedObject} entity.
 */
class SalesOrderRelatedObjectRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `SalesOrderRelatedObject` entity based on its keys.
     * @param salesOrder Key property. See {@link SalesOrderRelatedObject.salesOrder}.
     * @param sdDocRelatedObjectSequenceNmbr Key property. See {@link SalesOrderRelatedObject.sdDocRelatedObjectSequenceNmbr}.
     * @returns A request builder for creating requests to retrieve one `SalesOrderRelatedObject` entity based on its keys.
     */
    getByKey(salesOrder, sdDocRelatedObjectSequenceNmbr) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            SDDocRelatedObjectSequenceNmbr: sdDocRelatedObjectSequenceNmbr
        });
    }
    /**
     * Returns a request builder for querying all `SalesOrderRelatedObject` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOrderRelatedObject` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `SalesOrderRelatedObject` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesOrderRelatedObject`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    delete(salesOrderOrEntity, sdDocRelatedObjectSequenceNmbr) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, salesOrderOrEntity instanceof SalesOrderRelatedObject_1.SalesOrderRelatedObject
            ? salesOrderOrEntity
            : {
                SalesOrder: salesOrderOrEntity,
                SDDocRelatedObjectSequenceNmbr: sdDocRelatedObjectSequenceNmbr
            });
    }
}
exports.SalesOrderRelatedObjectRequestBuilder = SalesOrderRelatedObjectRequestBuilder;
//# sourceMappingURL=SalesOrderRelatedObjectRequestBuilder.js.map