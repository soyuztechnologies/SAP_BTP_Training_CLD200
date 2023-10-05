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
import { SlsOrdPaymentPlanItemDetails } from './SlsOrdPaymentPlanItemDetails';

/**
 * Request builder class for operations supported on the {@link SlsOrdPaymentPlanItemDetails} entity.
 */
export class SlsOrdPaymentPlanItemDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SlsOrdPaymentPlanItemDetails<T>, T> {
  /**
   * Returns a request builder for retrieving one `SlsOrdPaymentPlanItemDetails` entity based on its keys.
   * @param salesOrder Key property. See {@link SlsOrdPaymentPlanItemDetails.salesOrder}.
   * @param paymentPlanItem Key property. See {@link SlsOrdPaymentPlanItemDetails.paymentPlanItem}.
   * @returns A request builder for creating requests to retrieve one `SlsOrdPaymentPlanItemDetails` entity based on its keys.
   */
  getByKey(
    salesOrder: DeserializedType<T, 'Edm.String'>,
    paymentPlanItem: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SlsOrdPaymentPlanItemDetails<T>, T> {
    return new GetByKeyRequestBuilder<SlsOrdPaymentPlanItemDetails<T>, T>(
      this.entityApi,
      {
        SalesOrder: salesOrder,
        PaymentPlanItem: paymentPlanItem
      }
    );
  }

  /**
   * Returns a request builder for querying all `SlsOrdPaymentPlanItemDetails` entities.
   * @returns A request builder for creating requests to retrieve all `SlsOrdPaymentPlanItemDetails` entities.
   */
  getAll(): GetAllRequestBuilder<SlsOrdPaymentPlanItemDetails<T>, T> {
    return new GetAllRequestBuilder<SlsOrdPaymentPlanItemDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SlsOrdPaymentPlanItemDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SlsOrdPaymentPlanItemDetails`.
   */
  create(
    entity: SlsOrdPaymentPlanItemDetails<T>
  ): CreateRequestBuilder<SlsOrdPaymentPlanItemDetails<T>, T> {
    return new CreateRequestBuilder<SlsOrdPaymentPlanItemDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SlsOrdPaymentPlanItemDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SlsOrdPaymentPlanItemDetails`.
   */
  update(
    entity: SlsOrdPaymentPlanItemDetails<T>
  ): UpdateRequestBuilder<SlsOrdPaymentPlanItemDetails<T>, T> {
    return new UpdateRequestBuilder<SlsOrdPaymentPlanItemDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SlsOrdPaymentPlanItemDetails`.
   * @param salesOrder Key property. See {@link SlsOrdPaymentPlanItemDetails.salesOrder}.
   * @param paymentPlanItem Key property. See {@link SlsOrdPaymentPlanItemDetails.paymentPlanItem}.
   * @returns A request builder for creating requests that delete an entity of type `SlsOrdPaymentPlanItemDetails`.
   */
  delete(
    salesOrder: string,
    paymentPlanItem: string
  ): DeleteRequestBuilder<SlsOrdPaymentPlanItemDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SlsOrdPaymentPlanItemDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SlsOrdPaymentPlanItemDetails` by taking the entity as a parameter.
   */
  delete(
    entity: SlsOrdPaymentPlanItemDetails<T>
  ): DeleteRequestBuilder<SlsOrdPaymentPlanItemDetails<T>, T>;
  delete(
    salesOrderOrEntity: any,
    paymentPlanItem?: string
  ): DeleteRequestBuilder<SlsOrdPaymentPlanItemDetails<T>, T> {
    return new DeleteRequestBuilder<SlsOrdPaymentPlanItemDetails<T>, T>(
      this.entityApi,
      salesOrderOrEntity instanceof SlsOrdPaymentPlanItemDetails
        ? salesOrderOrEntity
        : {
            SalesOrder: salesOrderOrEntity!,
            PaymentPlanItem: paymentPlanItem!
          }
    );
  }
}
