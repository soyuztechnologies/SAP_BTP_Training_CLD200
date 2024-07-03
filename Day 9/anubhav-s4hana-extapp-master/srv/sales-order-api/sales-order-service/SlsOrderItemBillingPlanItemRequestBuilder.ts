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
import { SlsOrderItemBillingPlanItem } from './SlsOrderItemBillingPlanItem';

/**
 * Request builder class for operations supported on the {@link SlsOrderItemBillingPlanItem} entity.
 */
export class SlsOrderItemBillingPlanItemRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SlsOrderItemBillingPlanItem<T>, T> {
  /**
   * Returns a request builder for retrieving one `SlsOrderItemBillingPlanItem` entity based on its keys.
   * @param salesOrder Key property. See {@link SlsOrderItemBillingPlanItem.salesOrder}.
   * @param salesOrderItem Key property. See {@link SlsOrderItemBillingPlanItem.salesOrderItem}.
   * @param billingPlan Key property. See {@link SlsOrderItemBillingPlanItem.billingPlan}.
   * @param billingPlanItem Key property. See {@link SlsOrderItemBillingPlanItem.billingPlanItem}.
   * @returns A request builder for creating requests to retrieve one `SlsOrderItemBillingPlanItem` entity based on its keys.
   */
  getByKey(
    salesOrder: DeserializedType<T, 'Edm.String'>,
    salesOrderItem: DeserializedType<T, 'Edm.String'>,
    billingPlan: DeserializedType<T, 'Edm.String'>,
    billingPlanItem: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SlsOrderItemBillingPlanItem<T>, T> {
    return new GetByKeyRequestBuilder<SlsOrderItemBillingPlanItem<T>, T>(
      this.entityApi,
      {
        SalesOrder: salesOrder,
        SalesOrderItem: salesOrderItem,
        BillingPlan: billingPlan,
        BillingPlanItem: billingPlanItem
      }
    );
  }

  /**
   * Returns a request builder for querying all `SlsOrderItemBillingPlanItem` entities.
   * @returns A request builder for creating requests to retrieve all `SlsOrderItemBillingPlanItem` entities.
   */
  getAll(): GetAllRequestBuilder<SlsOrderItemBillingPlanItem<T>, T> {
    return new GetAllRequestBuilder<SlsOrderItemBillingPlanItem<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SlsOrderItemBillingPlanItem` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SlsOrderItemBillingPlanItem`.
   */
  create(
    entity: SlsOrderItemBillingPlanItem<T>
  ): CreateRequestBuilder<SlsOrderItemBillingPlanItem<T>, T> {
    return new CreateRequestBuilder<SlsOrderItemBillingPlanItem<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SlsOrderItemBillingPlanItem`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SlsOrderItemBillingPlanItem`.
   */
  update(
    entity: SlsOrderItemBillingPlanItem<T>
  ): UpdateRequestBuilder<SlsOrderItemBillingPlanItem<T>, T> {
    return new UpdateRequestBuilder<SlsOrderItemBillingPlanItem<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SlsOrderItemBillingPlanItem`.
   * @param salesOrder Key property. See {@link SlsOrderItemBillingPlanItem.salesOrder}.
   * @param salesOrderItem Key property. See {@link SlsOrderItemBillingPlanItem.salesOrderItem}.
   * @param billingPlan Key property. See {@link SlsOrderItemBillingPlanItem.billingPlan}.
   * @param billingPlanItem Key property. See {@link SlsOrderItemBillingPlanItem.billingPlanItem}.
   * @returns A request builder for creating requests that delete an entity of type `SlsOrderItemBillingPlanItem`.
   */
  delete(
    salesOrder: string,
    salesOrderItem: string,
    billingPlan: string,
    billingPlanItem: string
  ): DeleteRequestBuilder<SlsOrderItemBillingPlanItem<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SlsOrderItemBillingPlanItem`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SlsOrderItemBillingPlanItem` by taking the entity as a parameter.
   */
  delete(
    entity: SlsOrderItemBillingPlanItem<T>
  ): DeleteRequestBuilder<SlsOrderItemBillingPlanItem<T>, T>;
  delete(
    salesOrderOrEntity: any,
    salesOrderItem?: string,
    billingPlan?: string,
    billingPlanItem?: string
  ): DeleteRequestBuilder<SlsOrderItemBillingPlanItem<T>, T> {
    return new DeleteRequestBuilder<SlsOrderItemBillingPlanItem<T>, T>(
      this.entityApi,
      salesOrderOrEntity instanceof SlsOrderItemBillingPlanItem
        ? salesOrderOrEntity
        : {
            SalesOrder: salesOrderOrEntity!,
            SalesOrderItem: salesOrderItem!,
            BillingPlan: billingPlan!,
            BillingPlanItem: billingPlanItem!
          }
    );
  }
}
