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
import type { SalesOrderHeaderPrElementApi } from './SalesOrderHeaderPrElementApi';
import { SalesOrder, SalesOrderType } from './SalesOrder';
/**
 * This class represents the entity "A_SalesOrderHeaderPrElement" of service "API_SALES_ORDER_SRV".
 */
export declare class SalesOrderHeaderPrElement<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOrderHeaderPrElementType<T>
{
  readonly _entityApi: SalesOrderHeaderPrElementApi<T>;
  /**
   * Technical entity name for SalesOrderHeaderPrElement.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the SalesOrderHeaderPrElement entity
   */
  static _keys: string[];
  /**
   * Sales Order.
   * Maximum length: 10.
   */
  salesOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Step Number.
   * Maximum length: 3.
   */
  pricingProcedureStep: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Counter.
   * Maximum length: 3.
   */
  pricingProcedureCounter: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Type.
   * Maximum length: 4.
   * @nullable
   */
  conditionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Timestamp for Pricing.
   * Maximum length: 14.
   * @nullable
   */
  pricingDateTime?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Condition Pricing Date.
   * @nullable
   */
  priceConditionDeterminationDte?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Calculation Type for Condition.
   * Maximum length: 3.
   * @nullable
   */
  conditionCalculationType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Condition Basis.
   * @nullable
   */
  conditionBaseValue?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Condition Amount or Percentage.
   * @nullable
   */
  conditionRateValue?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Currency Key.
   * Maximum length: 5.
   * @nullable
   */
  conditionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Condition Pricing Unit.
   * @nullable
   */
  conditionQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Condition Unit in the Document.
   * Maximum length: 3.
   * @nullable
   */
  conditionQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * SAP Unit Code for Condition Quantity.
   * Maximum length: 3.
   * @nullable
   */
  conditionQuantitySapUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ISO Unit Code for Condition Quantity.
   * Maximum length: 3.
   * @nullable
   */
  conditionQuantityIsoUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Condition Category (Examples: Tax, Freight, Price, Cost).
   * Maximum length: 1.
   * @nullable
   */
  conditionCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Condition is used for statistics.
   * @nullable
   */
  conditionIsForStatistics?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Scale Type.
   * Maximum length: 1.
   * @nullable
   */
  pricingScaleType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Origin of the Condition.
   * Maximum length: 1.
   * @nullable
   */
  conditionOrigin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Group Condition.
   * Maximum length: 1.
   * @nullable
   */
  isGroupCondition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number of Condition Record.
   * Maximum length: 10.
   * @nullable
   */
  conditionRecord?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sequential Number of the Condition.
   * Maximum length: 3.
   * @nullable
   */
  conditionSequentialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax on sales/purchases code.
   * Maximum length: 2.
   * @nullable
   */
  taxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Tax Code.
   * Maximum length: 2.
   * @nullable
   */
  withholdingTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rounding-Off Difference of the Condition.
   * @nullable
   */
  cndnRoundingOffDiffAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Condition Value.
   * @nullable
   */
  conditionAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * SD Document Currency.
   * Maximum length: 5.
   * @nullable
   */
  transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Condition Control.
   * Maximum length: 1.
   * @nullable
   */
  conditionControl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Condition is Inactive.
   * Maximum length: 1.
   * @nullable
   */
  conditionInactiveReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Condition Class.
   * Maximum length: 1.
   * @nullable
   */
  conditionClass?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Condition Counter (Header).
   * Maximum length: 3.
   * @nullable
   */
  prcgProcedureCounterForHeader?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Factor for Condition Base Value.
   * @nullable
   */
  factorForConditionBasisValue?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Structure Condition.
   * Maximum length: 1.
   * @nullable
   */
  structureCondition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Factor for Condition Basis (Period).
   * @nullable
   */
  periodFactorForCndnBasisValue?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Scale Basis Indicator.
   * Maximum length: 3.
   * @nullable
   */
  pricingScaleBasis?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scale Base Value.
   * @nullable
   */
  conditionScaleBasisValue?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Condition Scale Unit of Measure.
   * Maximum length: 3.
   * @nullable
   */
  conditionScaleBasisUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scale Currency.
   * Maximum length: 5.
   * @nullable
   */
  conditionScaleBasisCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Condition for Intercompany Billing.
   * @nullable
   */
  cndnIsRelevantForIntcoBilling?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Condition Changed Manually.
   * @nullable
   */
  conditionIsManuallyChanged?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Condition Used for Variant Configuration.
   * @nullable
   */
  conditionIsForConfiguration?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Variant Condition Key.
   * Maximum length: 26.
   * @nullable
   */
  variantCondition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrder} entity.
   */
  toSalesOrder?: SalesOrder<T> | null;
  constructor(_entityApi: SalesOrderHeaderPrElementApi<T>);
}
export interface SalesOrderHeaderPrElementType<
  T extends DeSerializers = DefaultDeSerializers
> {
  salesOrder: DeserializedType<T, 'Edm.String'>;
  pricingProcedureStep: DeserializedType<T, 'Edm.String'>;
  pricingProcedureCounter: DeserializedType<T, 'Edm.String'>;
  conditionType?: DeserializedType<T, 'Edm.String'> | null;
  pricingDateTime?: DeserializedType<T, 'Edm.String'> | null;
  priceConditionDeterminationDte?: DeserializedType<T, 'Edm.DateTime'> | null;
  conditionCalculationType?: DeserializedType<T, 'Edm.String'> | null;
  conditionBaseValue?: DeserializedType<T, 'Edm.Decimal'> | null;
  conditionRateValue?: DeserializedType<T, 'Edm.Decimal'> | null;
  conditionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  conditionQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  conditionQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  conditionQuantitySapUnit?: DeserializedType<T, 'Edm.String'> | null;
  conditionQuantityIsoUnit?: DeserializedType<T, 'Edm.String'> | null;
  conditionCategory?: DeserializedType<T, 'Edm.String'> | null;
  conditionIsForStatistics?: DeserializedType<T, 'Edm.Boolean'> | null;
  pricingScaleType?: DeserializedType<T, 'Edm.String'> | null;
  conditionOrigin?: DeserializedType<T, 'Edm.String'> | null;
  isGroupCondition?: DeserializedType<T, 'Edm.String'> | null;
  conditionRecord?: DeserializedType<T, 'Edm.String'> | null;
  conditionSequentialNumber?: DeserializedType<T, 'Edm.String'> | null;
  taxCode?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  cndnRoundingOffDiffAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  conditionAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  conditionControl?: DeserializedType<T, 'Edm.String'> | null;
  conditionInactiveReason?: DeserializedType<T, 'Edm.String'> | null;
  conditionClass?: DeserializedType<T, 'Edm.String'> | null;
  prcgProcedureCounterForHeader?: DeserializedType<T, 'Edm.String'> | null;
  factorForConditionBasisValue?: DeserializedType<T, 'Edm.Double'> | null;
  structureCondition?: DeserializedType<T, 'Edm.String'> | null;
  periodFactorForCndnBasisValue?: DeserializedType<T, 'Edm.Double'> | null;
  pricingScaleBasis?: DeserializedType<T, 'Edm.String'> | null;
  conditionScaleBasisValue?: DeserializedType<T, 'Edm.Decimal'> | null;
  conditionScaleBasisUnit?: DeserializedType<T, 'Edm.String'> | null;
  conditionScaleBasisCurrency?: DeserializedType<T, 'Edm.String'> | null;
  cndnIsRelevantForIntcoBilling?: DeserializedType<T, 'Edm.Boolean'> | null;
  conditionIsManuallyChanged?: DeserializedType<T, 'Edm.Boolean'> | null;
  conditionIsForConfiguration?: DeserializedType<T, 'Edm.Boolean'> | null;
  variantCondition?: DeserializedType<T, 'Edm.String'> | null;
  toSalesOrder?: SalesOrderType<T> | null;
}
//# sourceMappingURL=SalesOrderHeaderPrElement.d.ts.map
