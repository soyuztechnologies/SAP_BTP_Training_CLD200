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
import { SalesOrderHeaderPrElement } from './SalesOrderHeaderPrElement';

/**
 * Request builder class for operations supported on the {@link SalesOrderHeaderPrElement} entity.
 */
export class SalesOrderHeaderPrElementRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderHeaderPrElement<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesOrderHeaderPrElement` entity based on its keys.
   * @param salesOrder Key property. See {@link SalesOrderHeaderPrElement.salesOrder}.
   * @param pricingProcedureStep Key property. See {@link SalesOrderHeaderPrElement.pricingProcedureStep}.
   * @param pricingProcedureCounter Key property. See {@link SalesOrderHeaderPrElement.pricingProcedureCounter}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderHeaderPrElement` entity based on its keys.
   */
  getByKey(
    salesOrder: DeserializedType<T, 'Edm.String'>,
    pricingProcedureStep: DeserializedType<T, 'Edm.String'>,
    pricingProcedureCounter: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderHeaderPrElement<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderHeaderPrElement<T>, T>(
      this.entityApi,
      {
        SalesOrder: salesOrder,
        PricingProcedureStep: pricingProcedureStep,
        PricingProcedureCounter: pricingProcedureCounter
      }
    );
  }

  /**
   * Returns a request builder for querying all `SalesOrderHeaderPrElement` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderHeaderPrElement` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderHeaderPrElement<T>, T> {
    return new GetAllRequestBuilder<SalesOrderHeaderPrElement<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesOrderHeaderPrElement` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderHeaderPrElement`.
   */
  create(
    entity: SalesOrderHeaderPrElement<T>
  ): CreateRequestBuilder<SalesOrderHeaderPrElement<T>, T> {
    return new CreateRequestBuilder<SalesOrderHeaderPrElement<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderHeaderPrElement`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderHeaderPrElement`.
   */
  update(
    entity: SalesOrderHeaderPrElement<T>
  ): UpdateRequestBuilder<SalesOrderHeaderPrElement<T>, T> {
    return new UpdateRequestBuilder<SalesOrderHeaderPrElement<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderHeaderPrElement`.
   * @param salesOrder Key property. See {@link SalesOrderHeaderPrElement.salesOrder}.
   * @param pricingProcedureStep Key property. See {@link SalesOrderHeaderPrElement.pricingProcedureStep}.
   * @param pricingProcedureCounter Key property. See {@link SalesOrderHeaderPrElement.pricingProcedureCounter}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderHeaderPrElement`.
   */
  delete(
    salesOrder: string,
    pricingProcedureStep: string,
    pricingProcedureCounter: string
  ): DeleteRequestBuilder<SalesOrderHeaderPrElement<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderHeaderPrElement`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderHeaderPrElement` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderHeaderPrElement<T>
  ): DeleteRequestBuilder<SalesOrderHeaderPrElement<T>, T>;
  delete(
    salesOrderOrEntity: any,
    pricingProcedureStep?: string,
    pricingProcedureCounter?: string
  ): DeleteRequestBuilder<SalesOrderHeaderPrElement<T>, T> {
    return new DeleteRequestBuilder<SalesOrderHeaderPrElement<T>, T>(
      this.entityApi,
      salesOrderOrEntity instanceof SalesOrderHeaderPrElement
        ? salesOrderOrEntity
        : {
            SalesOrder: salesOrderOrEntity!,
            PricingProcedureStep: pricingProcedureStep!,
            PricingProcedureCounter: pricingProcedureCounter!
          }
    );
  }
}
