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
import { SalesOrderHeaderPartner } from './SalesOrderHeaderPartner';
/**
 * Request builder class for operations supported on the {@link SalesOrderHeaderPartner} entity.
 */
export declare class SalesOrderHeaderPartnerRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderHeaderPartner<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesOrderHeaderPartner` entity based on its keys.
   * @param salesOrder Key property. See {@link SalesOrderHeaderPartner.salesOrder}.
   * @param partnerFunction Key property. See {@link SalesOrderHeaderPartner.partnerFunction}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderHeaderPartner` entity based on its keys.
   */
  getByKey(
    salesOrder: DeserializedType<T, 'Edm.String'>,
    partnerFunction: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderHeaderPartner<T>, T>;
  /**
   * Returns a request builder for querying all `SalesOrderHeaderPartner` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderHeaderPartner` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderHeaderPartner<T>, T>;
  /**
   * Returns a request builder for creating a `SalesOrderHeaderPartner` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderHeaderPartner`.
   */
  create(
    entity: SalesOrderHeaderPartner<T>
  ): CreateRequestBuilder<SalesOrderHeaderPartner<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `SalesOrderHeaderPartner`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderHeaderPartner`.
   */
  update(
    entity: SalesOrderHeaderPartner<T>
  ): UpdateRequestBuilder<SalesOrderHeaderPartner<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderHeaderPartner`.
   * @param salesOrder Key property. See {@link SalesOrderHeaderPartner.salesOrder}.
   * @param partnerFunction Key property. See {@link SalesOrderHeaderPartner.partnerFunction}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderHeaderPartner`.
   */
  delete(
    salesOrder: string,
    partnerFunction: string
  ): DeleteRequestBuilder<SalesOrderHeaderPartner<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderHeaderPartner`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderHeaderPartner` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderHeaderPartner<T>
  ): DeleteRequestBuilder<SalesOrderHeaderPartner<T>, T>;
}
//# sourceMappingURL=SalesOrderHeaderPartnerRequestBuilder.d.ts.map
