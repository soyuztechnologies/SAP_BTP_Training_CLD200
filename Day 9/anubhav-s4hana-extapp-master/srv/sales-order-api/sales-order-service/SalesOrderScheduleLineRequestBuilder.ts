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
import { SalesOrderScheduleLine } from './SalesOrderScheduleLine';

/**
 * Request builder class for operations supported on the {@link SalesOrderScheduleLine} entity.
 */
export class SalesOrderScheduleLineRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderScheduleLine<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesOrderScheduleLine` entity based on its keys.
   * @param salesOrder Key property. See {@link SalesOrderScheduleLine.salesOrder}.
   * @param salesOrderItem Key property. See {@link SalesOrderScheduleLine.salesOrderItem}.
   * @param scheduleLine Key property. See {@link SalesOrderScheduleLine.scheduleLine}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderScheduleLine` entity based on its keys.
   */
  getByKey(
    salesOrder: DeserializedType<T, 'Edm.String'>,
    salesOrderItem: DeserializedType<T, 'Edm.String'>,
    scheduleLine: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderScheduleLine<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderScheduleLine<T>, T>(
      this.entityApi,
      {
        SalesOrder: salesOrder,
        SalesOrderItem: salesOrderItem,
        ScheduleLine: scheduleLine
      }
    );
  }

  /**
   * Returns a request builder for querying all `SalesOrderScheduleLine` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderScheduleLine` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderScheduleLine<T>, T> {
    return new GetAllRequestBuilder<SalesOrderScheduleLine<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesOrderScheduleLine` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderScheduleLine`.
   */
  create(
    entity: SalesOrderScheduleLine<T>
  ): CreateRequestBuilder<SalesOrderScheduleLine<T>, T> {
    return new CreateRequestBuilder<SalesOrderScheduleLine<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderScheduleLine`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderScheduleLine`.
   */
  update(
    entity: SalesOrderScheduleLine<T>
  ): UpdateRequestBuilder<SalesOrderScheduleLine<T>, T> {
    return new UpdateRequestBuilder<SalesOrderScheduleLine<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderScheduleLine`.
   * @param salesOrder Key property. See {@link SalesOrderScheduleLine.salesOrder}.
   * @param salesOrderItem Key property. See {@link SalesOrderScheduleLine.salesOrderItem}.
   * @param scheduleLine Key property. See {@link SalesOrderScheduleLine.scheduleLine}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderScheduleLine`.
   */
  delete(
    salesOrder: string,
    salesOrderItem: string,
    scheduleLine: string
  ): DeleteRequestBuilder<SalesOrderScheduleLine<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderScheduleLine`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderScheduleLine` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderScheduleLine<T>
  ): DeleteRequestBuilder<SalesOrderScheduleLine<T>, T>;
  delete(
    salesOrderOrEntity: any,
    salesOrderItem?: string,
    scheduleLine?: string
  ): DeleteRequestBuilder<SalesOrderScheduleLine<T>, T> {
    return new DeleteRequestBuilder<SalesOrderScheduleLine<T>, T>(
      this.entityApi,
      salesOrderOrEntity instanceof SalesOrderScheduleLine
        ? salesOrderOrEntity
        : {
            SalesOrder: salesOrderOrEntity!,
            SalesOrderItem: salesOrderItem!,
            ScheduleLine: scheduleLine!
          }
    );
  }
}
