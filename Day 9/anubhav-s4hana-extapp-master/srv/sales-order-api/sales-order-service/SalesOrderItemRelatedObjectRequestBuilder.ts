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
  DeleteRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { SalesOrderItemRelatedObject } from './SalesOrderItemRelatedObject';

/**
 * Request builder class for operations supported on the {@link SalesOrderItemRelatedObject} entity.
 */
export class SalesOrderItemRelatedObjectRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderItemRelatedObject<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesOrderItemRelatedObject` entity based on its keys.
   * @param salesOrder Key property. See {@link SalesOrderItemRelatedObject.salesOrder}.
   * @param salesOrderItem Key property. See {@link SalesOrderItemRelatedObject.salesOrderItem}.
   * @param sdDocRelatedObjectSequenceNmbr Key property. See {@link SalesOrderItemRelatedObject.sdDocRelatedObjectSequenceNmbr}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderItemRelatedObject` entity based on its keys.
   */
  getByKey(
    salesOrder: DeserializedType<T, 'Edm.String'>,
    salesOrderItem: DeserializedType<T, 'Edm.String'>,
    sdDocRelatedObjectSequenceNmbr: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderItemRelatedObject<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderItemRelatedObject<T>, T>(
      this.entityApi,
      {
        SalesOrder: salesOrder,
        SalesOrderItem: salesOrderItem,
        SDDocRelatedObjectSequenceNmbr: sdDocRelatedObjectSequenceNmbr
      }
    );
  }

  /**
   * Returns a request builder for querying all `SalesOrderItemRelatedObject` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderItemRelatedObject` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderItemRelatedObject<T>, T> {
    return new GetAllRequestBuilder<SalesOrderItemRelatedObject<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesOrderItemRelatedObject` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderItemRelatedObject`.
   */
  create(
    entity: SalesOrderItemRelatedObject<T>
  ): CreateRequestBuilder<SalesOrderItemRelatedObject<T>, T> {
    return new CreateRequestBuilder<SalesOrderItemRelatedObject<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderItemRelatedObject`.
   * @param salesOrder Key property. See {@link SalesOrderItemRelatedObject.salesOrder}.
   * @param salesOrderItem Key property. See {@link SalesOrderItemRelatedObject.salesOrderItem}.
   * @param sdDocRelatedObjectSequenceNmbr Key property. See {@link SalesOrderItemRelatedObject.sdDocRelatedObjectSequenceNmbr}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderItemRelatedObject`.
   */
  delete(
    salesOrder: string,
    salesOrderItem: string,
    sdDocRelatedObjectSequenceNmbr: string
  ): DeleteRequestBuilder<SalesOrderItemRelatedObject<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderItemRelatedObject`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderItemRelatedObject` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderItemRelatedObject<T>
  ): DeleteRequestBuilder<SalesOrderItemRelatedObject<T>, T>;
  delete(
    salesOrderOrEntity: any,
    salesOrderItem?: string,
    sdDocRelatedObjectSequenceNmbr?: string
  ): DeleteRequestBuilder<SalesOrderItemRelatedObject<T>, T> {
    return new DeleteRequestBuilder<SalesOrderItemRelatedObject<T>, T>(
      this.entityApi,
      salesOrderOrEntity instanceof SalesOrderItemRelatedObject
        ? salesOrderOrEntity
        : {
            SalesOrder: salesOrderOrEntity!,
            SalesOrderItem: salesOrderItem!,
            SDDocRelatedObjectSequenceNmbr: sdDocRelatedObjectSequenceNmbr!
          }
    );
  }
}
