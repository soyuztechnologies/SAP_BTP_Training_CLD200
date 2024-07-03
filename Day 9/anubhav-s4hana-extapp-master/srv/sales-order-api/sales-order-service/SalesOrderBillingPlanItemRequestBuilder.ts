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
import { SalesOrderBillingPlanItem } from './SalesOrderBillingPlanItem';

/**
 * Request builder class for operations supported on the {@link SalesOrderBillingPlanItem} entity.
 */
export class SalesOrderBillingPlanItemRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderBillingPlanItem<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesOrderBillingPlanItem` entity based on its keys.
   * @param salesOrder Key property. See {@link SalesOrderBillingPlanItem.salesOrder}.
   * @param billingPlan Key property. See {@link SalesOrderBillingPlanItem.billingPlan}.
   * @param billingPlanItem Key property. See {@link SalesOrderBillingPlanItem.billingPlanItem}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderBillingPlanItem` entity based on its keys.
   */
  getByKey(
    salesOrder: DeserializedType<T, 'Edm.String'>,
    billingPlan: DeserializedType<T, 'Edm.String'>,
    billingPlanItem: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderBillingPlanItem<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderBillingPlanItem<T>, T>(
      this.entityApi,
      {
        SalesOrder: salesOrder,
        BillingPlan: billingPlan,
        BillingPlanItem: billingPlanItem
      }
    );
  }

  /**
   * Returns a request builder for querying all `SalesOrderBillingPlanItem` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderBillingPlanItem` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderBillingPlanItem<T>, T> {
    return new GetAllRequestBuilder<SalesOrderBillingPlanItem<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesOrderBillingPlanItem` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderBillingPlanItem`.
   */
  create(
    entity: SalesOrderBillingPlanItem<T>
  ): CreateRequestBuilder<SalesOrderBillingPlanItem<T>, T> {
    return new CreateRequestBuilder<SalesOrderBillingPlanItem<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderBillingPlanItem`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderBillingPlanItem`.
   */
  update(
    entity: SalesOrderBillingPlanItem<T>
  ): UpdateRequestBuilder<SalesOrderBillingPlanItem<T>, T> {
    return new UpdateRequestBuilder<SalesOrderBillingPlanItem<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderBillingPlanItem`.
   * @param salesOrder Key property. See {@link SalesOrderBillingPlanItem.salesOrder}.
   * @param billingPlan Key property. See {@link SalesOrderBillingPlanItem.billingPlan}.
   * @param billingPlanItem Key property. See {@link SalesOrderBillingPlanItem.billingPlanItem}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderBillingPlanItem`.
   */
  delete(
    salesOrder: string,
    billingPlan: string,
    billingPlanItem: string
  ): DeleteRequestBuilder<SalesOrderBillingPlanItem<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderBillingPlanItem`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderBillingPlanItem` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderBillingPlanItem<T>
  ): DeleteRequestBuilder<SalesOrderBillingPlanItem<T>, T>;
  delete(
    salesOrderOrEntity: any,
    billingPlan?: string,
    billingPlanItem?: string
  ): DeleteRequestBuilder<SalesOrderBillingPlanItem<T>, T> {
    return new DeleteRequestBuilder<SalesOrderBillingPlanItem<T>, T>(
      this.entityApi,
      salesOrderOrEntity instanceof SalesOrderBillingPlanItem
        ? salesOrderOrEntity
        : {
            SalesOrder: salesOrderOrEntity!,
            BillingPlan: billingPlan!,
            BillingPlanItem: billingPlanItem!
          }
    );
  }
}
