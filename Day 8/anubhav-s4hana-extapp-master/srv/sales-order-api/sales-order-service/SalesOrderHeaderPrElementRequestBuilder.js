"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderHeaderPrElementRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SalesOrderHeaderPrElement_1 = require("./SalesOrderHeaderPrElement");
/**
 * Request builder class for operations supported on the {@link SalesOrderHeaderPrElement} entity.
 */
class SalesOrderHeaderPrElementRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `SalesOrderHeaderPrElement` entity based on its keys.
     * @param salesOrder Key property. See {@link SalesOrderHeaderPrElement.salesOrder}.
     * @param pricingProcedureStep Key property. See {@link SalesOrderHeaderPrElement.pricingProcedureStep}.
     * @param pricingProcedureCounter Key property. See {@link SalesOrderHeaderPrElement.pricingProcedureCounter}.
     * @returns A request builder for creating requests to retrieve one `SalesOrderHeaderPrElement` entity based on its keys.
     */
    getByKey(salesOrder, pricingProcedureStep, pricingProcedureCounter) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            PricingProcedureStep: pricingProcedureStep,
            PricingProcedureCounter: pricingProcedureCounter
        });
    }
    /**
     * Returns a request builder for querying all `SalesOrderHeaderPrElement` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOrderHeaderPrElement` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `SalesOrderHeaderPrElement` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesOrderHeaderPrElement`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `SalesOrderHeaderPrElement`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesOrderHeaderPrElement`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(salesOrderOrEntity, pricingProcedureStep, pricingProcedureCounter) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, salesOrderOrEntity instanceof SalesOrderHeaderPrElement_1.SalesOrderHeaderPrElement
            ? salesOrderOrEntity
            : {
                SalesOrder: salesOrderOrEntity,
                PricingProcedureStep: pricingProcedureStep,
                PricingProcedureCounter: pricingProcedureCounter
            });
    }
}
exports.SalesOrderHeaderPrElementRequestBuilder = SalesOrderHeaderPrElementRequestBuilder;
//# sourceMappingURL=SalesOrderHeaderPrElementRequestBuilder.js.map