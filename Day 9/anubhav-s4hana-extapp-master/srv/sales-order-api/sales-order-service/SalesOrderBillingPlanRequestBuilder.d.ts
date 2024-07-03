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
import { SalesOrderBillingPlan } from './SalesOrderBillingPlan';
/**
 * Request builder class for operations supported on the {@link SalesOrderBillingPlan} entity.
 */
export declare class SalesOrderBillingPlanRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderBillingPlan<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesOrderBillingPlan` entity based on its keys.
   * @param salesOrder Key property. See {@link SalesOrderBillingPlan.salesOrder}.
   * @param billingPlan Key property. See {@link SalesOrderBillingPlan.billingPlan}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderBillingPlan` entity based on its keys.
   */
  getByKey(
    salesOrder: DeserializedType<T, 'Edm.String'>,
    billingPlan: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderBillingPlan<T>, T>;
  /**
   * Returns a request builder for querying all `SalesOrderBillingPlan` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderBillingPlan` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderBillingPlan<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `SalesOrderBillingPlan`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderBillingPlan`.
   */
  update(
    entity: SalesOrderBillingPlan<T>
  ): UpdateRequestBuilder<SalesOrderBillingPlan<T>, T>;
}
//# sourceMappingURL=SalesOrderBillingPlanRequestBuilder.d.ts.map
