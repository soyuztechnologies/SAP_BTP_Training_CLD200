"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderScheduleLineRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SalesOrderScheduleLine_1 = require("./SalesOrderScheduleLine");
/**
 * Request builder class for operations supported on the {@link SalesOrderScheduleLine} entity.
 */
class SalesOrderScheduleLineRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `SalesOrderScheduleLine` entity based on its keys.
     * @param salesOrder Key property. See {@link SalesOrderScheduleLine.salesOrder}.
     * @param salesOrderItem Key property. See {@link SalesOrderScheduleLine.salesOrderItem}.
     * @param scheduleLine Key property. See {@link SalesOrderScheduleLine.scheduleLine}.
     * @returns A request builder for creating requests to retrieve one `SalesOrderScheduleLine` entity based on its keys.
     */
    getByKey(salesOrder, salesOrderItem, scheduleLine) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            SalesOrderItem: salesOrderItem,
            ScheduleLine: scheduleLine
        });
    }
    /**
     * Returns a request builder for querying all `SalesOrderScheduleLine` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOrderScheduleLine` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `SalesOrderScheduleLine` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesOrderScheduleLine`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `SalesOrderScheduleLine`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesOrderScheduleLine`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(salesOrderOrEntity, salesOrderItem, scheduleLine) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, salesOrderOrEntity instanceof SalesOrderScheduleLine_1.SalesOrderScheduleLine
            ? salesOrderOrEntity
            : {
                SalesOrder: salesOrderOrEntity,
                SalesOrderItem: salesOrderItem,
                ScheduleLine: scheduleLine
            });
    }
}
exports.SalesOrderScheduleLineRequestBuilder = SalesOrderScheduleLineRequestBuilder;
//# sourceMappingURL=SalesOrderScheduleLineRequestBuilder.js.map