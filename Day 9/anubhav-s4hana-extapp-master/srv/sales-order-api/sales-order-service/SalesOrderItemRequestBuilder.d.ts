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
import { SalesOrderItem } from './SalesOrderItem';
/**
 * Request builder class for operations supported on the {@link SalesOrderItem} entity.
 */
export declare class SalesOrderItemRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderItem<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesOrderItem` entity based on its keys.
   * @param salesOrder Key property. See {@link SalesOrderItem.salesOrder}.
   * @param salesOrderItem Key property. See {@link SalesOrderItem.salesOrderItem}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderItem` entity based on its keys.
   */
  getByKey(
    salesOrder: DeserializedType<T, 'Edm.String'>,
    salesOrderItem: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderItem<T>, T>;
  /**
   * Returns a request builder for querying all `SalesOrderItem` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderItem` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderItem<T>, T>;
  /**
   * Returns a request builder for creating a `SalesOrderItem` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderItem`.
   */
  create(entity: SalesOrderItem<T>): CreateRequestBuilder<SalesOrderItem<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `SalesOrderItem`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderItem`.
   */
  update(entity: SalesOrderItem<T>): UpdateRequestBuilder<SalesOrderItem<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderItem`.
   * @param salesOrder Key property. See {@link SalesOrderItem.salesOrder}.
   * @param salesOrderItem Key property. See {@link SalesOrderItem.salesOrderItem}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderItem`.
   */
  delete(
    salesOrder: string,
    salesOrderItem: string
  ): DeleteRequestBuilder<SalesOrderItem<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderItem`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderItem` by taking the entity as a parameter.
   */
  delete(entity: SalesOrderItem<T>): DeleteRequestBuilder<SalesOrderItem<T>, T>;
}
//# sourceMappingURL=SalesOrderItemRequestBuilder.d.ts.map
