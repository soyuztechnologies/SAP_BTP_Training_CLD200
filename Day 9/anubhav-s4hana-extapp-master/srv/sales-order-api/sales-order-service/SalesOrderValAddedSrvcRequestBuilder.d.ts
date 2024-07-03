/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  CreateRequestBuilder,
  UpdateRequestBuilder,
  DeleteRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { SalesOrderValAddedSrvc } from './SalesOrderValAddedSrvc';
/**
 * Request builder class for operations supported on the {@link SalesOrderValAddedSrvc} entity.
 */
export declare class SalesOrderValAddedSrvcRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderValAddedSrvc<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesOrderValAddedSrvc` entity based on its keys.
   * @param valueAddedServiceType Key property. See {@link SalesOrderValAddedSrvc.valueAddedServiceType}.
   * @param valueAddedSubServiceType Key property. See {@link SalesOrderValAddedSrvc.valueAddedSubServiceType}.
   * @param salesOrder Key property. See {@link SalesOrderValAddedSrvc.salesOrder}.
   * @param salesOrderItem Key property. See {@link SalesOrderValAddedSrvc.salesOrderItem}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderValAddedSrvc` entity based on its keys.
   */
  getByKey(
    valueAddedServiceType: DeserializedType<T, 'Edm.String'>,
    valueAddedSubServiceType: DeserializedType<T, 'Edm.String'>,
    salesOrder: DeserializedType<T, 'Edm.String'>,
    salesOrderItem: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderValAddedSrvc<T>, T>;
  /**
   * Returns a request builder for querying all `SalesOrderValAddedSrvc` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderValAddedSrvc` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderValAddedSrvc<T>, T>;
  /**
   * Returns a request builder for creating a `SalesOrderValAddedSrvc` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderValAddedSrvc`.
   */
  create(
    entity: SalesOrderValAddedSrvc<T>
  ): CreateRequestBuilder<SalesOrderValAddedSrvc<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `SalesOrderValAddedSrvc`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderValAddedSrvc`.
   */
  update(
    entity: SalesOrderValAddedSrvc<T>
  ): UpdateRequestBuilder<SalesOrderValAddedSrvc<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderValAddedSrvc`.
   * @param valueAddedServiceType Key property. See {@link SalesOrderValAddedSrvc.valueAddedServiceType}.
   * @param valueAddedSubServiceType Key property. See {@link SalesOrderValAddedSrvc.valueAddedSubServiceType}.
   * @param salesOrder Key property. See {@link SalesOrderValAddedSrvc.salesOrder}.
   * @param salesOrderItem Key property. See {@link SalesOrderValAddedSrvc.salesOrderItem}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderValAddedSrvc`.
   */
  delete(
    valueAddedServiceType: string,
    valueAddedSubServiceType: string,
    salesOrder: string,
    salesOrderItem: string
  ): DeleteRequestBuilder<SalesOrderValAddedSrvc<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderValAddedSrvc`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderValAddedSrvc` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderValAddedSrvc<T>
  ): DeleteRequestBuilder<SalesOrderValAddedSrvc<T>, T>;
}
//# sourceMappingURL=SalesOrderValAddedSrvcRequestBuilder.d.ts.map
