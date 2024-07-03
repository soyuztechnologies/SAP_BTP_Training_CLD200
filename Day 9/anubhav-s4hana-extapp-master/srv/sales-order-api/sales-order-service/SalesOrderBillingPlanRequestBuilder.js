"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderBillingPlanRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link SalesOrderBillingPlan} entity.
 */
class SalesOrderBillingPlanRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `SalesOrderBillingPlan` entity based on its keys.
     * @param salesOrder Key property. See {@link SalesOrderBillingPlan.salesOrder}.
     * @param billingPlan Key property. See {@link SalesOrderBillingPlan.billingPlan}.
     * @returns A request builder for creating requests to retrieve one `SalesOrderBillingPlan` entity based on its keys.
     */
    getByKey(salesOrder, billingPlan) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            BillingPlan: billingPlan
        });
    }
    /**
     * Returns a request builder for querying all `SalesOrderBillingPlan` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOrderBillingPlan` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for updating an entity of type `SalesOrderBillingPlan`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesOrderBillingPlan`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.SalesOrderBillingPlanRequestBuilder = SalesOrderBillingPlanRequestBuilder;
//# sourceMappingURL=SalesOrderBillingPlanRequestBuilder.js.map