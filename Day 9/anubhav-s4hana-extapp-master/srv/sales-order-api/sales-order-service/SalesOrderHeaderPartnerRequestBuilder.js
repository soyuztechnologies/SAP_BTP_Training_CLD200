"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderHeaderPartnerRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SalesOrderHeaderPartner_1 = require("./SalesOrderHeaderPartner");
/**
 * Request builder class for operations supported on the {@link SalesOrderHeaderPartner} entity.
 */
class SalesOrderHeaderPartnerRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `SalesOrderHeaderPartner` entity based on its keys.
     * @param salesOrder Key property. See {@link SalesOrderHeaderPartner.salesOrder}.
     * @param partnerFunction Key property. See {@link SalesOrderHeaderPartner.partnerFunction}.
     * @returns A request builder for creating requests to retrieve one `SalesOrderHeaderPartner` entity based on its keys.
     */
    getByKey(salesOrder, partnerFunction) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            PartnerFunction: partnerFunction
        });
    }
    /**
     * Returns a request builder for querying all `SalesOrderHeaderPartner` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOrderHeaderPartner` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `SalesOrderHeaderPartner` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesOrderHeaderPartner`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `SalesOrderHeaderPartner`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesOrderHeaderPartner`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(salesOrderOrEntity, partnerFunction) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, salesOrderOrEntity instanceof SalesOrderHeaderPartner_1.SalesOrderHeaderPartner
            ? salesOrderOrEntity
            : {
                SalesOrder: salesOrderOrEntity,
                PartnerFunction: partnerFunction
            });
    }
}
exports.SalesOrderHeaderPartnerRequestBuilder = SalesOrderHeaderPartnerRequestBuilder;
//# sourceMappingURL=SalesOrderHeaderPartnerRequestBuilder.js.map