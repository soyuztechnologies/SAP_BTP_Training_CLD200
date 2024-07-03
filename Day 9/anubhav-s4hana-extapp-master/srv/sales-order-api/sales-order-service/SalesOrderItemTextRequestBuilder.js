"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemTextRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SalesOrderItemText_1 = require("./SalesOrderItemText");
/**
 * Request builder class for operations supported on the {@link SalesOrderItemText} entity.
 */
class SalesOrderItemTextRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `SalesOrderItemText` entity based on its keys.
     * @param salesOrder Key property. See {@link SalesOrderItemText.salesOrder}.
     * @param salesOrderItem Key property. See {@link SalesOrderItemText.salesOrderItem}.
     * @param language Key property. See {@link SalesOrderItemText.language}.
     * @param longTextId Key property. See {@link SalesOrderItemText.longTextId}.
     * @returns A request builder for creating requests to retrieve one `SalesOrderItemText` entity based on its keys.
     */
    getByKey(salesOrder, salesOrderItem, language, longTextId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            SalesOrderItem: salesOrderItem,
            Language: language,
            LongTextID: longTextId
        });
    }
    /**
     * Returns a request builder for querying all `SalesOrderItemText` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOrderItemText` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `SalesOrderItemText` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesOrderItemText`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `SalesOrderItemText`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesOrderItemText`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(salesOrderOrEntity, salesOrderItem, language, longTextId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, salesOrderOrEntity instanceof SalesOrderItemText_1.SalesOrderItemText
            ? salesOrderOrEntity
            : {
                SalesOrder: salesOrderOrEntity,
                SalesOrderItem: salesOrderItem,
                Language: language,
                LongTextID: longTextId
            });
    }
}
exports.SalesOrderItemTextRequestBuilder = SalesOrderItemTextRequestBuilder;
//# sourceMappingURL=SalesOrderItemTextRequestBuilder.js.map