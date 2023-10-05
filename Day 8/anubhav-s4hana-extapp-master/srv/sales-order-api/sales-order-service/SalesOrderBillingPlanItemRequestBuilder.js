"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderBillingPlanItemRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SalesOrderBillingPlanItem_1 = require("./SalesOrderBillingPlanItem");
/**
 * Request builder class for operations supported on the {@link SalesOrderBillingPlanItem} entity.
 */
class SalesOrderBillingPlanItemRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `SalesOrderBillingPlanItem` entity based on its keys.
     * @param salesOrder Key property. See {@link SalesOrderBillingPlanItem.salesOrder}.
     * @param billingPlan Key property. See {@link SalesOrderBillingPlanItem.billingPlan}.
     * @param billingPlanItem Key property. See {@link SalesOrderBillingPlanItem.billingPlanItem}.
     * @returns A request builder for creating requests to retrieve one `SalesOrderBillingPlanItem` entity based on its keys.
     */
    getByKey(salesOrder, billingPlan, billingPlanItem) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            BillingPlan: billingPlan,
            BillingPlanItem: billingPlanItem
        });
    }
    /**
     * Returns a request builder for querying all `SalesOrderBillingPlanItem` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOrderBillingPlanItem` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `SalesOrderBillingPlanItem` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesOrderBillingPlanItem`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `SalesOrderBillingPlanItem`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesOrderBillingPlanItem`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(salesOrderOrEntity, billingPlan, billingPlanItem) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, salesOrderOrEntity instanceof SalesOrderBillingPlanItem_1.SalesOrderBillingPlanItem
            ? salesOrderOrEntity
            : {
                SalesOrder: salesOrderOrEntity,
                BillingPlan: billingPlan,
                BillingPlanItem: billingPlanItem
            });
    }
}
exports.SalesOrderBillingPlanItemRequestBuilder = SalesOrderBillingPlanItemRequestBuilder;
//# sourceMappingURL=SalesOrderBillingPlanItemRequestBuilder.js.map