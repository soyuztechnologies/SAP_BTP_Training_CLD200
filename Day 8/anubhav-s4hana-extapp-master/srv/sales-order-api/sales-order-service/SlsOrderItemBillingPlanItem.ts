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
import type { SlsOrderItemBillingPlanItemApi } from './SlsOrderItemBillingPlanItemApi';
import {
  SalesOrderItemBillingPlan,
  SalesOrderItemBillingPlanType
} from './SalesOrderItemBillingPlan';
import { SalesOrder, SalesOrderType } from './SalesOrder';
import { SalesOrderItem, SalesOrderItemType } from './SalesOrderItem';

/**
 * This class represents the entity "A_SlsOrderItemBillingPlanItem" of service "API_SALES_ORDER_SRV".
 */
export class SlsOrderItemBillingPlanItem<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SlsOrderItemBillingPlanItemType<T>
{
  /**
   * Technical entity name for SlsOrderItemBillingPlanItem.
   */
  static _entityName = 'A_SlsOrderItemBillingPlanItem';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
  /**
   * All key fields of the SlsOrderItemBillingPlanItem entity
   */
  static _keys = [
    'SalesOrder',
    'SalesOrderItem',
    'BillingPlan',
    'BillingPlanItem'
  ];
  /**
   * Sales Order.
   * Maximum length: 10.
   */
  salesOrder!: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Order Item.
   * Maximum length: 6.
   */
  salesOrderItem!: DeserializedType<T, 'Edm.String'>;
  /**
   * Billing Plan Number / Invoicing Plan Number.
   * Maximum length: 10.
   */
  billingPlan!: DeserializedType<T, 'Edm.String'>;
  /**
   * Item for billing plan/invoice plan/payment cards.
   * Maximum length: 6.
   */
  billingPlanItem!: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link SalesOrderItemBillingPlan} entity.
   */
  toBillingPlan?: SalesOrderItemBillingPlan<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrder} entity.
   */
  toSalesOrder?: SalesOrder<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrderItem} entity.
   */
  toSalesOrderItem?: SalesOrderItem<T> | null;

  constructor(readonly _entityApi: SlsOrderItemBillingPlanItemApi<T>) {
    super(_entityApi);
  }
}

export interface SlsOrderItemBillingPlanItemType<
  T extends DeSerializers = DefaultDeSerializers
> {
  salesOrder: DeserializedType<T, 'Edm.String'>;
  salesOrderItem: DeserializedType<T, 'Edm.String'>;
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
  toBillingPlan?: SalesOrderItemBillingPlanType<T> | null;
  toSalesOrder?: SalesOrderType<T> | null;
  toSalesOrderItem?: SalesOrderItemType<T> | null;
}
