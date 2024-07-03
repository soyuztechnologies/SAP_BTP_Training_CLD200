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
import { SalesOrderRelatedObject } from './SalesOrderRelatedObject';

/**
 * Request builder class for operations supported on the {@link SalesOrderRelatedObject} entity.
 */
export class SalesOrderRelatedObjectRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderRelatedObject<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesOrderRelatedObject` entity based on its keys.
   * @param salesOrder Key property. See {@link SalesOrderRelatedObject.salesOrder}.
   * @param sdDocRelatedObjectSequenceNmbr Key property. See {@link SalesOrderRelatedObject.sdDocRelatedObjectSequenceNmbr}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderRelatedObject` entity based on its keys.
   */
  getByKey(
    salesOrder: DeserializedType<T, 'Edm.String'>,
    sdDocRelatedObjectSequenceNmbr: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderRelatedObject<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderRelatedObject<T>, T>(
      this.entityApi,
      {
        SalesOrder: salesOrder,
        SDDocRelatedObjectSequenceNmbr: sdDocRelatedObjectSequenceNmbr
      }
    );
  }

  /**
   * Returns a request builder for querying all `SalesOrderRelatedObject` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderRelatedObject` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderRelatedObject<T>, T> {
    return new GetAllRequestBuilder<SalesOrderRelatedObject<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesOrderRelatedObject` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderRelatedObject`.
   */
  create(
    entity: SalesOrderRelatedObject<T>
  ): CreateRequestBuilder<SalesOrderRelatedObject<T>, T> {
    return new CreateRequestBuilder<SalesOrderRelatedObject<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderRelatedObject`.
   * @param salesOrder Key property. See {@link SalesOrderRelatedObject.salesOrder}.
   * @param sdDocRelatedObjectSequenceNmbr Key property. See {@link SalesOrderRelatedObject.sdDocRelatedObjectSequenceNmbr}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderRelatedObject`.
   */
  delete(
    salesOrder: string,
    sdDocRelatedObjectSequenceNmbr: string
  ): DeleteRequestBuilder<SalesOrderRelatedObject<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderRelatedObject`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderRelatedObject` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderRelatedObject<T>
  ): DeleteRequestBuilder<SalesOrderRelatedObject<T>, T>;
  delete(
    salesOrderOrEntity: any,
    sdDocRelatedObjectSequenceNmbr?: string
  ): DeleteRequestBuilder<SalesOrderRelatedObject<T>, T> {
    return new DeleteRequestBuilder<SalesOrderRelatedObject<T>, T>(
      this.entityApi,
      salesOrderOrEntity instanceof SalesOrderRelatedObject
        ? salesOrderOrEntity
        : {
            SalesOrder: salesOrderOrEntity!,
            SDDocRelatedObjectSequenceNmbr: sdDocRelatedObjectSequenceNmbr!
          }
    );
  }
}
