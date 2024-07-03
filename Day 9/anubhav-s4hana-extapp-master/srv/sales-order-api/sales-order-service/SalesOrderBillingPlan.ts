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
import type { SalesOrderBillingPlanApi } from './SalesOrderBillingPlanApi';
import {
  SalesOrderBillingPlanItem,
  SalesOrderBillingPlanItemType
} from './SalesOrderBillingPlanItem';
import { SalesOrder, SalesOrderType } from './SalesOrder';

/**
 * This class represents the entity "A_SalesOrderBillingPlan" of service "API_SALES_ORDER_SRV".
 */
export class SalesOrderBillingPlan<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOrderBillingPlanType<T>
{
  /**
   * Technical entity name for SalesOrderBillingPlan.
   */
  static _entityName = 'A_SalesOrderBillingPlan';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
  /**
   * All key fields of the SalesOrderBillingPlan entity
   */
  static _keys = ['SalesOrder', 'BillingPlan'];
  /**
   * Sales Order.
   * Maximum length: 10.
   */
  salesOrder!: DeserializedType<T, 'Edm.String'>;
  /**
   * Billing Plan Number / Invoicing Plan Number.
   * Maximum length: 10.
   */
  billingPlan!: DeserializedType<T, 'Edm.String'>;
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
   * One-to-many navigation property to the {@link SalesOrderBillingPlanItem} entity.
   */
  toBillingPlanItem!: SalesOrderBillingPlanItem<T>[];
  /**
   * One-to-one navigation property to the {@link SalesOrder} entity.
   */
  toSalesOrder?: SalesOrder<T> | null;

  constructor(readonly _entityApi: SalesOrderBillingPlanApi<T>) {
    super(_entityApi);
  }
}

export interface SalesOrderBillingPlanType<
  T extends DeSerializers = DefaultDeSerializers
> {
  salesOrder: DeserializedType<T, 'Edm.String'>;
  billingPlan: DeserializedType<T, 'Edm.String'>;
  billingPlanStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  billingPlanStartDateRule?: DeserializedType<T, 'Edm.String'> | null;
  referenceBillingPlan?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanCategory?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanType?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  billingPlanEndDateRule?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanSearchTerm?: DeserializedType<T, 'Edm.String'> | null;
  toBillingPlanItem: SalesOrderBillingPlanItemType<T>[];
  toSalesOrder?: SalesOrderType<T> | null;
}
