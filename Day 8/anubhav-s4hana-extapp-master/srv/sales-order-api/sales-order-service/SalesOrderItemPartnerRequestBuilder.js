"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemPartnerRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SalesOrderItemPartner_1 = require("./SalesOrderItemPartner");
/**
 * Request builder class for operations supported on the {@link SalesOrderItemPartner} entity.
 */
class SalesOrderItemPartnerRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `SalesOrderItemPartner` entity based on its keys.
     * @param salesOrder Key property. See {@link SalesOrderItemPartner.salesOrder}.
     * @param salesOrderItem Key property. See {@link SalesOrderItemPartner.salesOrderItem}.
     * @param partnerFunction Key property. See {@link SalesOrderItemPartner.partnerFunction}.
     * @returns A request builder for creating requests to retrieve one `SalesOrderItemPartner` entity based on its keys.
     */
    getByKey(salesOrder, salesOrderItem, partnerFunction) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            SalesOrderItem: salesOrderItem,
            PartnerFunction: partnerFunction
        });
    }
    /**
     * Returns a request builder for querying all `SalesOrderItemPartner` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOrderItemPartner` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `SalesOrderItemPartner` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesOrderItemPartner`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `SalesOrderItemPartner`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesOrderItemPartner`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(salesOrderOrEntity, salesOrderItem, partnerFunction) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, salesOrderOrEntity instanceof SalesOrderItemPartner_1.SalesOrderItemPartner
            ? salesOrderOrEntity
            : {
                SalesOrder: salesOrderOrEntity,
                SalesOrderItem: salesOrderItem,
                PartnerFunction: partnerFunction
            });
    }
}
exports.SalesOrderItemPartnerRequestBuilder = SalesOrderItemPartnerRequestBuilder;
//# sourceMappingURL=SalesOrderItemPartnerRequestBuilder.js.map