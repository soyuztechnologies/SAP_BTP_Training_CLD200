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
import type { SalesOrderBillingPlanItemApi } from './SalesOrderBillingPlanItemApi';
import {
  SalesOrderBillingPlan,
  SalesOrderBillingPlanType
} from './SalesOrderBillingPlan';
import { SalesOrder, SalesOrderType } from './SalesOrder';
/**
 * This class represents the entity "A_SalesOrderBillingPlanItem" of service "API_SALES_ORDER_SRV".
 */
export declare class SalesOrderBillingPlanItem<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOrderBillingPlanItemType<T>
{
  readonly _entityApi: SalesOrderBillingPlanItemApi<T>;
  /**
   * Technical entity name for SalesOrderBillingPlanItem.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the SalesOrderBillingPlanItem entity
   */
  static _keys: string[];
  /**
   * Sales Order.
   * Maximum length: 10.
   */
  salesOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Billing Plan Number / Invoicing Plan Number.
   * Maximum length: 10.
   */
  billingPlan: DeserializedType<T, 'Edm.String'>;
  /**
   * Item for billing plan/invoice plan/payment cards.
   * Maximum length: 6.
   */
  billingPlanItem: DeserializedType<T, 'Edm.String'>;
  /**
   * Date Category.
   * Maximum length: 2.
   * @nullable
   */
  billingPlanDateCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Date.
   * @nullable
   */
  billingPlanBillingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Value to be billed/calc. on date in billing/invoice plan.
   * @nullable
   */
  billingPlanAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Currency Key.
   * Maximum length: 5.
   * @nullable
   */
  transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Percentage of value to be invoiced.
   * @nullable
   */
  billingPlanAmountPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Terms of Payment Key.
   * Maximum length: 4.
   * @nullable
   */
  customerPaymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proposed Billing Type for an Order-Related Billing Document.
   * Maximum length: 4.
   * @nullable
   */
  proposedBillingDocumentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date Description.
   * Maximum length: 4.
   * @nullable
   */
  billingPlanDateDescriptionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Block for Billing Plan/Invoice Plan Dates.
   * Maximum length: 2.
   * @nullable
   */
  billingBlockReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settlement Start Date of Billing Date.
   * @nullable
   */
  billingPlanServiceStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Settlement End Date of Billing Date.
   * @nullable
   */
  billingPlanServiceEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Billing Status for Billing Plan/Invoice Plan Date.
   * Maximum length: 1.
   * @nullable
   */
  billingPlanRelatedBillgStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing/Invoicing Plan Type.
   * Maximum length: 2.
   * @nullable
   */
  billingPlanType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ID for Adopting Billing/Invoice Date.
   * Maximum length: 1.
   * @nullable
   */
  adoptingBillingDateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rule in billing plan/invoice plan.
   * Maximum length: 1.
   * @nullable
   */
  billingPlanBillingRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Usage.
   * Maximum length: 5.
   * @nullable
   */
  billingPlanMilestoneUsage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator for Correction Date in Billing Plan.
   * Maximum length: 1.
   * @nullable
   */
  billgPlnDteCorrectionRfndType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate for FI Postings.
   * @nullable
   */
  accountingExchangeRate?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Reason for Postponement.
   * Maximum length: 255.
   * @nullable
   */
  postponementReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrderBillingPlan} entity.
   */
  toBillingPlan?: SalesOrderBillingPlan<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrder} entity.
   */
  toSalesOrder?: SalesOrder<T> | null;
  constructor(_entityApi: SalesOrderBillingPlanItemApi<T>);
}
export interface SalesOrderBillingPlanItemType<
  T extends DeSerializers = DefaultDeSerializers
> {
  salesOrder: DeserializedType<T, 'Edm.String'>;
  billingPlan: DeserializedType<T, 'Edm.String'>;
  billingPlanItem: DeserializedType<T, 'Edm.String'>;
  billingPlanDateCategory?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanBillingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  billingPlanAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanAmountPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  customerPaymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  proposedBillingDocumentType?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanDateDescriptionCode?: DeserializedType<T, 'Edm.String'> | null;
  billingBlockReason?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanServiceStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  billingPlanServiceEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  billingPlanRelatedBillgStatus?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanType?: DeserializedType<T, 'Edm.String'> | null;
  adoptingBillingDateId?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanBillingRule?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanMilestoneUsage?: DeserializedType<T, 'Edm.String'> | null;
  billgPlnDteCorrectionRfndType?: DeserializedType<T, 'Edm.String'> | null;
  accountingExchangeRate?: DeserializedType<T, 'Edm.Decimal'> | null;
  postponementReason?: DeserializedType<T, 'Edm.String'> | null;
  toBillingPlan?: SalesOrderBillingPlanType<T> | null;
  toSalesOrder?: SalesOrderType<T> | null;
}
//# sourceMappingURL=SalesOrderBillingPlanItem.d.ts.map
