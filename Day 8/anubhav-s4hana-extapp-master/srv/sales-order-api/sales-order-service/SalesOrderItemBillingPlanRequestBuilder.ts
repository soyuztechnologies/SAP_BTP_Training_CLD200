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
  UpdateRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { SalesOrderItemBillingPlan } from './SalesOrderItemBillingPlan';

/**
 * Request builder class for operations supported on the {@link SalesOrderItemBillingPlan} entity.
 */
export class SalesOrderItemBillingPlanRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderItemBillingPlan<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesOrderItemBillingPlan` entity based on its keys.
   * @param salesOrder Key property. See {@link SalesOrderItemBillingPlan.salesOrder}.
   * @param salesOrderItem Key property. See {@link SalesOrderItemBillingPlan.salesOrderItem}.
   * @param billingPlan Key property. See {@link SalesOrderItemBillingPlan.billingPlan}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderItemBillingPlan` entity based on its keys.
   */
  getByKey(
    salesOrder: DeserializedType<T, 'Edm.String'>,
    salesOrderItem: DeserializedType<T, 'Edm.String'>,
    billingPlan: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderItemBillingPlan<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderItemBillingPlan<T>, T>(
      this.entityApi,
      {
        SalesOrder: salesOrder,
        SalesOrderItem: salesOrderItem,
        BillingPlan: billingPlan
      }
    );
  }

  /**
   * Returns a request builder for querying all `SalesOrderItemBillingPlan` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderItemBillingPlan` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderItemBillingPlan<T>, T> {
    return new GetAllRequestBuilder<SalesOrderItemBillingPlan<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderItemBillingPlan`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderItemBillingPlan`.
   */
  update(
    entity: SalesOrderItemBillingPlan<T>
  ): UpdateRequestBuilder<SalesOrderItemBillingPlan<T>, T> {
    return new UpdateRequestBuilder<SalesOrderItemBillingPlan<T>, T>(
      this.entityApi,
      entity
    );
  }
}
