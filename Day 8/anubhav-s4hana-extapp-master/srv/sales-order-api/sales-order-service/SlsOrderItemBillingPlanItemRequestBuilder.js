"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlsOrderItemBillingPlanItemRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SlsOrderItemBillingPlanItem_1 = require("./SlsOrderItemBillingPlanItem");
/**
 * Request builder class for operations supported on the {@link SlsOrderItemBillingPlanItem} entity.
 */
class SlsOrderItemBillingPlanItemRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `SlsOrderItemBillingPlanItem` entity based on its keys.
     * @param salesOrder Key property. See {@link SlsOrderItemBillingPlanItem.salesOrder}.
     * @param salesOrderItem Key property. See {@link SlsOrderItemBillingPlanItem.salesOrderItem}.
     * @param billingPlan Key property. See {@link SlsOrderItemBillingPlanItem.billingPlan}.
     * @param billingPlanItem Key property. See {@link SlsOrderItemBillingPlanItem.billingPlanItem}.
     * @returns A request builder for creating requests to retrieve one `SlsOrderItemBillingPlanItem` entity based on its keys.
     */
    getByKey(salesOrder, salesOrderItem, billingPlan, billingPlanItem) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            SalesOrderItem: salesOrderItem,
            BillingPlan: billingPlan,
            BillingPlanItem: billingPlanItem
        });
    }
    /**
     * Returns a request builder for querying all `SlsOrderItemBillingPlanItem` entities.
     * @returns A request builder for creating requests to retrieve all `SlsOrderItemBillingPlanItem` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `SlsOrderItemBillingPlanItem` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SlsOrderItemBillingPlanItem`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `SlsOrderItemBillingPlanItem`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SlsOrderItemBillingPlanItem`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(salesOrderOrEntity, salesOrderItem, billingPlan, billingPlanItem) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, salesOrderOrEntity instanceof SlsOrderItemBillingPlanItem_1.SlsOrderItemBillingPlanItem
            ? salesOrderOrEntity
            : {
                SalesOrder: salesOrderOrEntity,
                SalesOrderItem: salesOrderItem,
                BillingPlan: billingPlan,
                BillingPlanItem: billingPlanItem
            });
    }
}
exports.SlsOrderItemBillingPlanItemRequestBuilder = SlsOrderItemBillingPlanItemRequestBuilder;
//# sourceMappingURL=SlsOrderItemBillingPlanItemRequestBuilder.js.map