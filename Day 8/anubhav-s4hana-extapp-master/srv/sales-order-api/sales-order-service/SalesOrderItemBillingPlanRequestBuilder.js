"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemBillingPlanRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link SalesOrderItemBillingPlan} entity.
 */
class SalesOrderItemBillingPlanRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `SalesOrderItemBillingPlan` entity based on its keys.
     * @param salesOrder Key property. See {@link SalesOrderItemBillingPlan.salesOrder}.
     * @param salesOrderItem Key property. See {@link SalesOrderItemBillingPlan.salesOrderItem}.
     * @param billingPlan Key property. See {@link SalesOrderItemBillingPlan.billingPlan}.
     * @returns A request builder for creating requests to retrieve one `SalesOrderItemBillingPlan` entity based on its keys.
     */
    getByKey(salesOrder, salesOrderItem, billingPlan) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            SalesOrderItem: salesOrderItem,
            BillingPlan: billingPlan
        });
    }
    /**
     * Returns a request builder for querying all `SalesOrderItemBillingPlan` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOrderItemBillingPlan` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for updating an entity of type `SalesOrderItemBillingPlan`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesOrderItemBillingPlan`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.SalesOrderItemBillingPlanRequestBuilder = SalesOrderItemBillingPlanRequestBuilder;
//# sourceMappingURL=SalesOrderItemBillingPlanRequestBuilder.js.map