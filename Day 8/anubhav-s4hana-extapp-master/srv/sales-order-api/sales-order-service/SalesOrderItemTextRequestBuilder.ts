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
import { SalesOrderItemText } from './SalesOrderItemText';

/**
 * Request builder class for operations supported on the {@link SalesOrderItemText} entity.
 */
export class SalesOrderItemTextRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderItemText<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesOrderItemText` entity based on its keys.
   * @param salesOrder Key property. See {@link SalesOrderItemText.salesOrder}.
   * @param salesOrderItem Key property. See {@link SalesOrderItemText.salesOrderItem}.
   * @param language Key property. See {@link SalesOrderItemText.language}.
   * @param longTextId Key property. See {@link SalesOrderItemText.longTextId}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderItemText` entity based on its keys.
   */
  getByKey(
    salesOrder: DeserializedType<T, 'Edm.String'>,
    salesOrderItem: DeserializedType<T, 'Edm.String'>,
    language: DeserializedType<T, 'Edm.String'>,
    longTextId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderItemText<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderItemText<T>, T>(
      this.entityApi,
      {
        SalesOrder: salesOrder,
        SalesOrderItem: salesOrderItem,
        Language: language,
        LongTextID: longTextId
      }
    );
  }

  /**
   * Returns a request builder for querying all `SalesOrderItemText` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderItemText` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderItemText<T>, T> {
    return new GetAllRequestBuilder<SalesOrderItemText<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesOrderItemText` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderItemText`.
   */
  create(
    entity: SalesOrderItemText<T>
  ): CreateRequestBuilder<SalesOrderItemText<T>, T> {
    return new CreateRequestBuilder<SalesOrderItemText<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderItemText`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderItemText`.
   */
  update(
    entity: SalesOrderItemText<T>
  ): UpdateRequestBuilder<SalesOrderItemText<T>, T> {
    return new UpdateRequestBuilder<SalesOrderItemText<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderItemText`.
   * @param salesOrder Key property. See {@link SalesOrderItemText.salesOrder}.
   * @param salesOrderItem Key property. See {@link SalesOrderItemText.salesOrderItem}.
   * @param language Key property. See {@link SalesOrderItemText.language}.
   * @param longTextId Key property. See {@link SalesOrderItemText.longTextId}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderItemText`.
   */
  delete(
    salesOrder: string,
    salesOrderItem: string,
    language: string,
    longTextId: string
  ): DeleteRequestBuilder<SalesOrderItemText<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderItemText`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderItemText` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderItemText<T>
  ): DeleteRequestBuilder<SalesOrderItemText<T>, T>;
  delete(
    salesOrderOrEntity: any,
    salesOrderItem?: string,
    language?: string,
    longTextId?: string
  ): DeleteRequestBuilder<SalesOrderItemText<T>, T> {
    return new DeleteRequestBuilder<SalesOrderItemText<T>, T>(
      this.entityApi,
      salesOrderOrEntity instanceof SalesOrderItemText
        ? salesOrderOrEntity
        : {
            SalesOrder: salesOrderOrEntity!,
            SalesOrderItem: salesOrderItem!,
            Language: language!,
            LongTextID: longTextId!
          }
    );
  }
}
