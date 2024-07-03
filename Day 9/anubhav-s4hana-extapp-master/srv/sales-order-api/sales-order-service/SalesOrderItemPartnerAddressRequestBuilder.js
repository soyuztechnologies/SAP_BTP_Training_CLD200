"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemPartnerAddressRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link SalesOrderItemPartnerAddress} entity.
 */
class SalesOrderItemPartnerAddressRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `SalesOrderItemPartnerAddress` entity based on its keys.
     * @param salesOrder Key property. See {@link SalesOrderItemPartnerAddress.salesOrder}.
     * @param salesOrderItem Key property. See {@link SalesOrderItemPartnerAddress.salesOrderItem}.
     * @param partnerFunction Key property. See {@link SalesOrderItemPartnerAddress.partnerFunction}.
     * @param addressRepresentationCode Key property. See {@link SalesOrderItemPartnerAddress.addressRepresentationCode}.
     * @returns A request builder for creating requests to retrieve one `SalesOrderItemPartnerAddress` entity based on its keys.
     */
    getByKey(salesOrder, salesOrderItem, partnerFunction, addressRepresentationCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            SalesOrderItem: salesOrderItem,
            PartnerFunction: partnerFunction,
            AddressRepresentationCode: addressRepresentationCode
        });
    }
    /**
     * Returns a request builder for querying all `SalesOrderItemPartnerAddress` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOrderItemPartnerAddress` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for updating an entity of type `SalesOrderItemPartnerAddress`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesOrderItemPartnerAddress`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.SalesOrderItemPartnerAddressRequestBuilder = SalesOrderItemPartnerAddressRequestBuilder;
//# sourceMappingURL=SalesOrderItemPartnerAddressRequestBuilder.js.map