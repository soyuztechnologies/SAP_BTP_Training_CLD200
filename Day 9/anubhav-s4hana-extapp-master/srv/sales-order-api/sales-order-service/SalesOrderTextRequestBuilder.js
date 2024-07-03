"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderTextRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SalesOrderText_1 = require("./SalesOrderText");
/**
 * Request builder class for operations supported on the {@link SalesOrderText} entity.
 */
class SalesOrderTextRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `SalesOrderText` entity based on its keys.
     * @param salesOrder Key property. See {@link SalesOrderText.salesOrder}.
     * @param language Key property. See {@link SalesOrderText.language}.
     * @param longTextId Key property. See {@link SalesOrderText.longTextId}.
     * @returns A request builder for creating requests to retrieve one `SalesOrderText` entity based on its keys.
     */
    getByKey(salesOrder, language, longTextId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            Language: language,
            LongTextID: longTextId
        });
    }
    /**
     * Returns a request builder for querying all `SalesOrderText` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOrderText` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `SalesOrderText` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesOrderText`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `SalesOrderText`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesOrderText`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(salesOrderOrEntity, language, longTextId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, salesOrderOrEntity instanceof SalesOrderText_1.SalesOrderText
            ? salesOrderOrEntity
            : {
                SalesOrder: salesOrderOrEntity,
                Language: language,
                LongTextID: longTextId
            });
    }
}
exports.SalesOrderTextRequestBuilder = SalesOrderTextRequestBuilder;
//# sourceMappingURL=SalesOrderTextRequestBuilder.js.map