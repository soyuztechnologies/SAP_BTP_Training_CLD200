"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderValAddedSrvcRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SalesOrderValAddedSrvc_1 = require("./SalesOrderValAddedSrvc");
/**
 * Request builder class for operations supported on the {@link SalesOrderValAddedSrvc} entity.
 */
class SalesOrderValAddedSrvcRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `SalesOrderValAddedSrvc` entity based on its keys.
     * @param valueAddedServiceType Key property. See {@link SalesOrderValAddedSrvc.valueAddedServiceType}.
     * @param valueAddedSubServiceType Key property. See {@link SalesOrderValAddedSrvc.valueAddedSubServiceType}.
     * @param salesOrder Key property. See {@link SalesOrderValAddedSrvc.salesOrder}.
     * @param salesOrderItem Key property. See {@link SalesOrderValAddedSrvc.salesOrderItem}.
     * @returns A request builder for creating requests to retrieve one `SalesOrderValAddedSrvc` entity based on its keys.
     */
    getByKey(valueAddedServiceType, valueAddedSubServiceType, salesOrder, salesOrderItem) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ValueAddedServiceType: valueAddedServiceType,
            ValueAddedSubServiceType: valueAddedSubServiceType,
            SalesOrder: salesOrder,
            SalesOrderItem: salesOrderItem
        });
    }
    /**
     * Returns a request builder for querying all `SalesOrderValAddedSrvc` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOrderValAddedSrvc` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `SalesOrderValAddedSrvc` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesOrderValAddedSrvc`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `SalesOrderValAddedSrvc`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesOrderValAddedSrvc`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(valueAddedServiceTypeOrEntity, valueAddedSubServiceType, salesOrder, salesOrderItem) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, valueAddedServiceTypeOrEntity instanceof SalesOrderValAddedSrvc_1.SalesOrderValAddedSrvc
            ? valueAddedServiceTypeOrEntity
            : {
                ValueAddedServiceType: valueAddedServiceTypeOrEntity,
                ValueAddedSubServiceType: valueAddedSubServiceType,
                SalesOrder: salesOrder,
                SalesOrderItem: salesOrderItem
            });
    }
}
exports.SalesOrderValAddedSrvcRequestBuilder = SalesOrderValAddedSrvcRequestBuilder;
//# sourceMappingURL=SalesOrderValAddedSrvcRequestBuilder.js.map