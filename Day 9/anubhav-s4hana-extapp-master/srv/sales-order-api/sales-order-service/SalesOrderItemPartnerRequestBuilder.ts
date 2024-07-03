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
import { SalesOrderItemPartner } from './SalesOrderItemPartner';

/**
 * Request builder class for operations supported on the {@link SalesOrderItemPartner} entity.
 */
export class SalesOrderItemPartnerRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderItemPartner<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesOrderItemPartner` entity based on its keys.
   * @param salesOrder Key property. See {@link SalesOrderItemPartner.salesOrder}.
   * @param salesOrderItem Key property. See {@link SalesOrderItemPartner.salesOrderItem}.
   * @param partnerFunction Key property. See {@link SalesOrderItemPartner.partnerFunction}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderItemPartner` entity based on its keys.
   */
  getByKey(
    salesOrder: DeserializedType<T, 'Edm.String'>,
    salesOrderItem: DeserializedType<T, 'Edm.String'>,
    partnerFunction: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderItemPartner<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderItemPartner<T>, T>(
      this.entityApi,
      {
        SalesOrder: salesOrder,
        SalesOrderItem: salesOrderItem,
        PartnerFunction: partnerFunction
      }
    );
  }

  /**
   * Returns a request builder for querying all `SalesOrderItemPartner` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderItemPartner` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderItemPartner<T>, T> {
    return new GetAllRequestBuilder<SalesOrderItemPartner<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesOrderItemPartner` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderItemPartner`.
   */
  create(
    entity: SalesOrderItemPartner<T>
  ): CreateRequestBuilder<SalesOrderItemPartner<T>, T> {
    return new CreateRequestBuilder<SalesOrderItemPartner<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderItemPartner`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderItemPartner`.
   */
  update(
    entity: SalesOrderItemPartner<T>
  ): UpdateRequestBuilder<SalesOrderItemPartner<T>, T> {
    return new UpdateRequestBuilder<SalesOrderItemPartner<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderItemPartner`.
   * @param salesOrder Key property. See {@link SalesOrderItemPartner.salesOrder}.
   * @param salesOrderItem Key property. See {@link SalesOrderItemPartner.salesOrderItem}.
   * @param partnerFunction Key property. See {@link SalesOrderItemPartner.partnerFunction}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderItemPartner`.
   */
  delete(
    salesOrder: string,
    salesOrderItem: string,
    partnerFunction: string
  ): DeleteRequestBuilder<SalesOrderItemPartner<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderItemPartner`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderItemPartner` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderItemPartner<T>
  ): DeleteRequestBuilder<SalesOrderItemPartner<T>, T>;
  delete(
    salesOrderOrEntity: any,
    salesOrderItem?: string,
    partnerFunction?: string
  ): DeleteRequestBuilder<SalesOrderItemPartner<T>, T> {
    return new DeleteRequestBuilder<SalesOrderItemPartner<T>, T>(
      this.entityApi,
      salesOrderOrEntity instanceof SalesOrderItemPartner
        ? salesOrderOrEntity
        : {
            SalesOrder: salesOrderOrEntity!,
            SalesOrderItem: salesOrderItem!,
            PartnerFunction: partnerFunction!
          }
    );
  }
}
