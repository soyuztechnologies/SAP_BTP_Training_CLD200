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
import { SalesOrderText } from './SalesOrderText';

/**
 * Request builder class for operations supported on the {@link SalesOrderText} entity.
 */
export class SalesOrderTextRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderText<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesOrderText` entity based on its keys.
   * @param salesOrder Key property. See {@link SalesOrderText.salesOrder}.
   * @param language Key property. See {@link SalesOrderText.language}.
   * @param longTextId Key property. See {@link SalesOrderText.longTextId}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderText` entity based on its keys.
   */
  getByKey(
    salesOrder: DeserializedType<T, 'Edm.String'>,
    language: DeserializedType<T, 'Edm.String'>,
    longTextId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderText<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderText<T>, T>(this.entityApi, {
      SalesOrder: salesOrder,
      Language: language,
      LongTextID: longTextId
    });
  }

  /**
   * Returns a request builder for querying all `SalesOrderText` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderText` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderText<T>, T> {
    return new GetAllRequestBuilder<SalesOrderText<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesOrderText` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderText`.
   */
  create(
    entity: SalesOrderText<T>
  ): CreateRequestBuilder<SalesOrderText<T>, T> {
    return new CreateRequestBuilder<SalesOrderText<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderText`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderText`.
   */
  update(
    entity: SalesOrderText<T>
  ): UpdateRequestBuilder<SalesOrderText<T>, T> {
    return new UpdateRequestBuilder<SalesOrderText<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderText`.
   * @param salesOrder Key property. See {@link SalesOrderText.salesOrder}.
   * @param language Key property. See {@link SalesOrderText.language}.
   * @param longTextId Key property. See {@link SalesOrderText.longTextId}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderText`.
   */
  delete(
    salesOrder: string,
    language: string,
    longTextId: string
  ): DeleteRequestBuilder<SalesOrderText<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderText`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderText` by taking the entity as a parameter.
   */
  delete(entity: SalesOrderText<T>): DeleteRequestBuilder<SalesOrderText<T>, T>;
  delete(
    salesOrderOrEntity: any,
    language?: string,
    longTextId?: string
  ): DeleteRequestBuilder<SalesOrderText<T>, T> {
    return new DeleteRequestBuilder<SalesOrderText<T>, T>(
      this.entityApi,
      salesOrderOrEntity instanceof SalesOrderText
        ? salesOrderOrEntity
        : {
            SalesOrder: salesOrderOrEntity!,
            Language: language!,
            LongTextID: longTextId!
          }
    );
  }
}
