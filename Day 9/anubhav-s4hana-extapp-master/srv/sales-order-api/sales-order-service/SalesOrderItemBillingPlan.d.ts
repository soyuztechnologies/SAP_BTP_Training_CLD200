/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { SalesOrderItemBillingPlanApi } from './SalesOrderItemBillingPlanApi';
import {
  SlsOrderItemBillingPlanItem,
  SlsOrderItemBillingPlanItemType
} from './SlsOrderItemBillingPlanItem';
import { SalesOrder, SalesOrderType } from './SalesOrder';
import { SalesOrderItem, SalesOrderItemType } from './SalesOrderItem';
/**
 * This class represents the entity "A_SalesOrderItemBillingPlan" of service "API_SALES_ORDER_SRV".
 */
export declare class SalesOrderItemBillingPlan<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOrderItemBillingPlanType<T>
{
  readonly _entityApi: SalesOrderItemBillingPlanApi<T>;
  /**
   * Technical entity name for SalesOrderItemBillingPlan.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the SalesOrderItemBillingPlan entity
   */
  static _keys: string[];
  /**
   * Sales Order.
   * Maximum length: 10.
   */
  salesOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Order Item.
   * Maximum length: 6.
   */
  salesOrderItem: DeserializedType<T, 'Edm.String'>;
  /**
   * Billing Plan Number / Invoicing Plan Number.
   * Maximum length: 10.
   */
  billingPlan: DeserializedType<T, 'Edm.String'>;
  /**
   * Indicator for Billing Plan in Header.
   * @nullable
   */
  billingPlanIsInHeader?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Start Date for Billing Plan/Invoice Plan.
   * @nullable
   */
  billingPlanStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Rule for Origin of Start Date of Billing/Invoicing Plan.
   * Maximum length: 2.
   * @nullable
   */
  billingPlanStartDateRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Billing Plan Number / Invoicing Plan Number.
   * Maximum length: 10.
   * @nullable
   */
  referenceBillingPlan?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing plan category.
   * Maximum length: 1.
   * @nullable
   */
  billingPlanCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing/Invoicing Plan Type.
   * Maximum length: 2.
   * @nullable
   */
  billingPlanType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Date Billing Plan/Invoice Plan.
   * @nullable
   */
  billingPlanEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Rule for Origin of End Date for Billing/Invoicing Plan.
   * Maximum length: 2.
   * @nullable
   */
  billingPlanEndDateRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sort field.
   * Maximum length: 10.
   * @nullable
   */
  billingPlanSearchTerm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link SlsOrderItemBillingPlanItem} entity.
   */
  toBillingPlanItem: SlsOrderItemBillingPlanItem<T>[];
  /**
   * One-to-one navigation property to the {@link SalesOrder} entity.
   */
  toSalesOrder?: SalesOrder<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrderItem} entity.
   */
  toSalesOrderItem?: SalesOrderItem<T> | null;
  constructor(_entityApi: SalesOrderItemBillingPlanApi<T>);
}
export interface SalesOrderItemBillingPlanType<
  T extends DeSerializers = DefaultDeSerializers
> {
  salesOrder: DeserializedType<T, 'Edm.String'>;
  salesOrderItem: DeserializedType<T, 'Edm.String'>;
  billingPlan: DeserializedType<T, 'Edm.String'>;
  billingPlanIsInHeader?: DeserializedType<T, 'Edm.Boolean'> | null;
  billingPlanStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  billingPlanStartDateRule?: DeserializedType<T, 'Edm.String'> | null;
  referenceBillingPlan?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanCategory?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanType?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  billingPlanEndDateRule?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanSearchTerm?: DeserializedType<T, 'Edm.String'> | null;
  toBillingPlanItem: SlsOrderItemBillingPlanItemType<T>[];
  toSalesOrder?: SalesOrderType<T> | null;
  toSalesOrderItem?: SalesOrderItemType<T> | null;
}
//# sourceMappingURL=SalesOrderItemBillingPlan.d.ts.map
