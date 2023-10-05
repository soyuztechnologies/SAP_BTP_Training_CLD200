"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderPartnerAddressRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link SalesOrderPartnerAddress} entity.
 */
class SalesOrderPartnerAddressRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `SalesOrderPartnerAddress` entity based on its keys.
     * @param salesOrder Key property. See {@link SalesOrderPartnerAddress.salesOrder}.
     * @param partnerFunction Key property. See {@link SalesOrderPartnerAddress.partnerFunction}.
     * @param addressRepresentationCode Key property. See {@link SalesOrderPartnerAddress.addressRepresentationCode}.
     * @returns A request builder for creating requests to retrieve one `SalesOrderPartnerAddress` entity based on its keys.
     */
    getByKey(salesOrder, partnerFunction, addressRepresentationCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            PartnerFunction: partnerFunction,
            AddressRepresentationCode: addressRepresentationCode
        });
    }
    /**
     * Returns a request builder for querying all `SalesOrderPartnerAddress` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOrderPartnerAddress` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for updating an entity of type `SalesOrderPartnerAddress`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesOrderPartnerAddress`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.SalesOrderPartnerAddressRequestBuilder = SalesOrderPartnerAddressRequestBuilder;
//# sourceMappingURL=SalesOrderPartnerAddressRequestBuilder.js.map