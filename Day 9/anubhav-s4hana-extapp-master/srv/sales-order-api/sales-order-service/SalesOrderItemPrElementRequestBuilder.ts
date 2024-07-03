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
import { SalesOrderItemPrElement } from './SalesOrderItemPrElement';

/**
 * Request builder class for operations supported on the {@link SalesOrderItemPrElement} entity.
 */
export class SalesOrderItemPrElementRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderItemPrElement<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesOrderItemPrElement` entity based on its keys.
   * @param salesOrder Key property. See {@link SalesOrderItemPrElement.salesOrder}.
   * @param salesOrderItem Key property. See {@link SalesOrderItemPrElement.salesOrderItem}.
   * @param pricingProcedureStep Key property. See {@link SalesOrderItemPrElement.pricingProcedureStep}.
   * @param pricingProcedureCounter Key property. See {@link SalesOrderItemPrElement.pricingProcedureCounter}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderItemPrElement` entity based on its keys.
   */
  getByKey(
    salesOrder: DeserializedType<T, 'Edm.String'>,
    salesOrderItem: DeserializedType<T, 'Edm.String'>,
    pricingProcedureStep: DeserializedType<T, 'Edm.String'>,
    pricingProcedureCounter: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderItemPrElement<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderItemPrElement<T>, T>(
      this.entityApi,
      {
        SalesOrder: salesOrder,
        SalesOrderItem: salesOrderItem,
        PricingProcedureStep: pricingProcedureStep,
        PricingProcedureCounter: pricingProcedureCounter
      }
    );
  }

  /**
   * Returns a request builder for querying all `SalesOrderItemPrElement` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderItemPrElement` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderItemPrElement<T>, T> {
    return new GetAllRequestBuilder<SalesOrderItemPrElement<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesOrderItemPrElement` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderItemPrElement`.
   */
  create(
    entity: SalesOrderItemPrElement<T>
  ): CreateRequestBuilder<SalesOrderItemPrElement<T>, T> {
    return new CreateRequestBuilder<SalesOrderItemPrElement<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderItemPrElement`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderItemPrElement`.
   */
  update(
    entity: SalesOrderItemPrElement<T>
  ): UpdateRequestBuilder<SalesOrderItemPrElement<T>, T> {
    return new UpdateRequestBuilder<SalesOrderItemPrElement<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderItemPrElement`.
   * @param salesOrder Key property. See {@link SalesOrderItemPrElement.salesOrder}.
   * @param salesOrderItem Key property. See {@link SalesOrderItemPrElement.salesOrderItem}.
   * @param pricingProcedureStep Key property. See {@link SalesOrderItemPrElement.pricingProcedureStep}.
   * @param pricingProcedureCounter Key property. See {@link SalesOrderItemPrElement.pricingProcedureCounter}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderItemPrElement`.
   */
  delete(
    salesOrder: string,
    salesOrderItem: string,
    pricingProcedureStep: string,
    pricingProcedureCounter: string
  ): DeleteRequestBuilder<SalesOrderItemPrElement<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderItemPrElement`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderItemPrElement` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderItemPrElement<T>
  ): DeleteRequestBuilder<SalesOrderItemPrElement<T>, T>;
  delete(
    salesOrderOrEntity: any,
    salesOrderItem?: string,
    pricingProcedureStep?: string,
    pricingProcedureCounter?: string
  ): DeleteRequestBuilder<SalesOrderItemPrElement<T>, T> {
    return new DeleteRequestBuilder<SalesOrderItemPrElement<T>, T>(
      this.entityApi,
      salesOrderOrEntity instanceof SalesOrderItemPrElement
        ? salesOrderOrEntity
        : {
            SalesOrder: salesOrderOrEntity!,
            SalesOrderItem: salesOrderItem!,
            PricingProcedureStep: pricingProcedureStep!,
            PricingProcedureCounter: pricingProcedureCounter!
          }
    );
  }
}
