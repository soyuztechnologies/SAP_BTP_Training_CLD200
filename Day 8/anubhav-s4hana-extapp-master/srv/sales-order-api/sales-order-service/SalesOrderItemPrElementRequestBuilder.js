"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemPrElementRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SalesOrderItemPrElement_1 = require("./SalesOrderItemPrElement");
/**
 * Request builder class for operations supported on the {@link SalesOrderItemPrElement} entity.
 */
class SalesOrderItemPrElementRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `SalesOrderItemPrElement` entity based on its keys.
     * @param salesOrder Key property. See {@link SalesOrderItemPrElement.salesOrder}.
     * @param salesOrderItem Key property. See {@link SalesOrderItemPrElement.salesOrderItem}.
     * @param pricingProcedureStep Key property. See {@link SalesOrderItemPrElement.pricingProcedureStep}.
     * @param pricingProcedureCounter Key property. See {@link SalesOrderItemPrElement.pricingProcedureCounter}.
     * @returns A request builder for creating requests to retrieve one `SalesOrderItemPrElement` entity based on its keys.
     */
    getByKey(salesOrder, salesOrderItem, pricingProcedureStep, pricingProcedureCounter) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            SalesOrderItem: salesOrderItem,
            PricingProcedureStep: pricingProcedureStep,
            PricingProcedureCounter: pricingProcedureCounter
        });
    }
    /**
     * Returns a request builder for querying all `SalesOrderItemPrElement` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOrderItemPrElement` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `SalesOrderItemPrElement` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesOrderItemPrElement`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `SalesOrderItemPrElement`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesOrderItemPrElement`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(salesOrderOrEntity, salesOrderItem, pricingProcedureStep, pricingProcedureCounter) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, salesOrderOrEntity instanceof SalesOrderItemPrElement_1.SalesOrderItemPrElement
            ? salesOrderOrEntity
            : {
                SalesOrder: salesOrderOrEntity,
                SalesOrderItem: salesOrderItem,
                PricingProcedureStep: pricingProcedureStep,
                PricingProcedureCounter: pricingProcedureCounter
            });
    }
}
exports.SalesOrderItemPrElementRequestBuilder = SalesOrderItemPrElementRequestBuilder;
//# sourceMappingURL=SalesOrderItemPrElementRequestBuilder.js.map