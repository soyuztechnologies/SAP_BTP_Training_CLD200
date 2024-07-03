"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlsOrdPaymentPlanItemDetailsRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SlsOrdPaymentPlanItemDetails_1 = require("./SlsOrdPaymentPlanItemDetails");
/**
 * Request builder class for operations supported on the {@link SlsOrdPaymentPlanItemDetails} entity.
 */
class SlsOrdPaymentPlanItemDetailsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `SlsOrdPaymentPlanItemDetails` entity based on its keys.
     * @param salesOrder Key property. See {@link SlsOrdPaymentPlanItemDetails.salesOrder}.
     * @param paymentPlanItem Key property. See {@link SlsOrdPaymentPlanItemDetails.paymentPlanItem}.
     * @returns A request builder for creating requests to retrieve one `SlsOrdPaymentPlanItemDetails` entity based on its keys.
     */
    getByKey(salesOrder, paymentPlanItem) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            PaymentPlanItem: paymentPlanItem
        });
    }
    /**
     * Returns a request builder for querying all `SlsOrdPaymentPlanItemDetails` entities.
     * @returns A request builder for creating requests to retrieve all `SlsOrdPaymentPlanItemDetails` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `SlsOrdPaymentPlanItemDetails` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SlsOrdPaymentPlanItemDetails`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `SlsOrdPaymentPlanItemDetails`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SlsOrdPaymentPlanItemDetails`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(salesOrderOrEntity, paymentPlanItem) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, salesOrderOrEntity instanceof SlsOrdPaymentPlanItemDetails_1.SlsOrdPaymentPlanItemDetails
            ? salesOrderOrEntity
            : {
                SalesOrder: salesOrderOrEntity,
                PaymentPlanItem: paymentPlanItem
            });
    }
}
exports.SlsOrdPaymentPlanItemDetailsRequestBuilder = SlsOrdPaymentPlanItemDetailsRequestBuilder;
//# sourceMappingURL=SlsOrdPaymentPlanItemDetailsRequestBuilder.js.map