/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOrderHeaderPrElement } from './SalesOrderHeaderPrElement';
import { SalesOrderHeaderPrElementRequestBuilder } from './SalesOrderHeaderPrElementRequestBuilder';
import { SalesOrderApi } from './SalesOrderApi';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class SalesOrderHeaderPrElementApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SalesOrderHeaderPrElement<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER: OneToOneLink<
      SalesOrderHeaderPrElement<DeSerializersT>,
      DeSerializersT,
      SalesOrderApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [SalesOrderApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      TO_SALES_ORDER: new OneToOneLink('to_SalesOrder', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = SalesOrderHeaderPrElement;

  requestBuilder(): SalesOrderHeaderPrElementRequestBuilder<DeSerializersT> {
    return new SalesOrderHeaderPrElementRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesOrderHeaderPrElement<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesOrderHeaderPrElement<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesOrderHeaderPrElement<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof SalesOrderHeaderPrElement,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesOrderHeaderPrElement,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SALES_ORDER: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICING_PROCEDURE_STEP: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICING_PROCEDURE_COUNTER: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONDITION_TYPE: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICING_DATE_TIME: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_CONDITION_DETERMINATION_DTE: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CONDITION_CALCULATION_TYPE: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_BASE_VALUE: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CONDITION_RATE_VALUE: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CONDITION_CURRENCY: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_QUANTITY: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CONDITION_QUANTITY_UNIT: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_QUANTITY_SAP_UNIT: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_QUANTITY_ISO_UNIT: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_CATEGORY: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_IS_FOR_STATISTICS: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PRICING_SCALE_TYPE: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_ORIGIN: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_GROUP_CONDITION: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_RECORD: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_SEQUENTIAL_NUMBER: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_CODE: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_TAX_CODE: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CNDN_ROUNDING_OFF_DIFF_AMOUNT: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CONDITION_AMOUNT: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    TRANSACTION_CURRENCY: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_CONTROL: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_INACTIVE_REASON: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_CLASS: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRCG_PROCEDURE_COUNTER_FOR_HEADER: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FACTOR_FOR_CONDITION_BASIS_VALUE: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    STRUCTURE_CONDITION: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_FACTOR_FOR_CNDN_BASIS_VALUE: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PRICING_SCALE_BASIS: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_SCALE_BASIS_VALUE: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CONDITION_SCALE_BASIS_UNIT: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_SCALE_BASIS_CURRENCY: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CNDN_IS_RELEVANT_FOR_INTCO_BILLING: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    CONDITION_IS_MANUALLY_CHANGED: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    CONDITION_IS_FOR_CONFIGURATION: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    VARIANT_CONDITION: OrderableEdmTypeField<
      SalesOrderHeaderPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER: OneToOneLink<
      SalesOrderHeaderPrElement<DeSerializersT>,
      DeSerializersT,
      SalesOrderApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesOrderHeaderPrElement<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link salesOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER: fieldBuilder.buildEdmTypeField(
          'SalesOrder',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link pricingProcedureStep} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICING_PROCEDURE_STEP: fieldBuilder.buildEdmTypeField(
          'PricingProcedureStep',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link pricingProcedureCounter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICING_PROCEDURE_COUNTER: fieldBuilder.buildEdmTypeField(
          'PricingProcedureCounter',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link conditionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_TYPE: fieldBuilder.buildEdmTypeField(
          'ConditionType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pricingDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICING_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'PricingDateTime',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceConditionDeterminationDte} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_CONDITION_DETERMINATION_DTE: fieldBuilder.buildEdmTypeField(
          'PriceConditionDeterminationDte',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link conditionCalculationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_CALCULATION_TYPE: fieldBuilder.buildEdmTypeField(
          'ConditionCalculationType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link conditionBaseValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_BASE_VALUE: fieldBuilder.buildEdmTypeField(
          'ConditionBaseValue',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link conditionRateValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_RATE_VALUE: fieldBuilder.buildEdmTypeField(
          'ConditionRateValue',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link conditionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'ConditionCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link conditionQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ConditionQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link conditionQuantityUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_QUANTITY_UNIT: fieldBuilder.buildEdmTypeField(
          'ConditionQuantityUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link conditionQuantitySapUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_QUANTITY_SAP_UNIT: fieldBuilder.buildEdmTypeField(
          'ConditionQuantitySAPUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link conditionQuantityIsoUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_QUANTITY_ISO_UNIT: fieldBuilder.buildEdmTypeField(
          'ConditionQuantityISOUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link conditionCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ConditionCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link conditionIsForStatistics} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_IS_FOR_STATISTICS: fieldBuilder.buildEdmTypeField(
          'ConditionIsForStatistics',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link pricingScaleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICING_SCALE_TYPE: fieldBuilder.buildEdmTypeField(
          'PricingScaleType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link conditionOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_ORIGIN: fieldBuilder.buildEdmTypeField(
          'ConditionOrigin',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isGroupCondition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_GROUP_CONDITION: fieldBuilder.buildEdmTypeField(
          'IsGroupCondition',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link conditionRecord} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_RECORD: fieldBuilder.buildEdmTypeField(
          'ConditionRecord',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link conditionSequentialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_SEQUENTIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConditionSequentialNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE: fieldBuilder.buildEdmTypeField('TaxCode', 'Edm.String', true),
        /**
         * Static representation of the {@link withholdingTaxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_CODE: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cndnRoundingOffDiffAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CNDN_ROUNDING_OFF_DIFF_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CndnRoundingOffDiffAmount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link conditionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ConditionAmount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link transactionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'TransactionCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link conditionControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_CONTROL: fieldBuilder.buildEdmTypeField(
          'ConditionControl',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link conditionInactiveReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_INACTIVE_REASON: fieldBuilder.buildEdmTypeField(
          'ConditionInactiveReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link conditionClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_CLASS: fieldBuilder.buildEdmTypeField(
          'ConditionClass',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prcgProcedureCounterForHeader} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRCG_PROCEDURE_COUNTER_FOR_HEADER: fieldBuilder.buildEdmTypeField(
          'PrcgProcedureCounterForHeader',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link factorForConditionBasisValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACTOR_FOR_CONDITION_BASIS_VALUE: fieldBuilder.buildEdmTypeField(
          'FactorForConditionBasisValue',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link structureCondition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STRUCTURE_CONDITION: fieldBuilder.buildEdmTypeField(
          'StructureCondition',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periodFactorForCndnBasisValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_FACTOR_FOR_CNDN_BASIS_VALUE: fieldBuilder.buildEdmTypeField(
          'PeriodFactorForCndnBasisValue',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link pricingScaleBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICING_SCALE_BASIS: fieldBuilder.buildEdmTypeField(
          'PricingScaleBasis',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link conditionScaleBasisValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_SCALE_BASIS_VALUE: fieldBuilder.buildEdmTypeField(
          'ConditionScaleBasisValue',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link conditionScaleBasisUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_SCALE_BASIS_UNIT: fieldBuilder.buildEdmTypeField(
          'ConditionScaleBasisUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link conditionScaleBasisCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_SCALE_BASIS_CURRENCY: fieldBuilder.buildEdmTypeField(
          'ConditionScaleBasisCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cndnIsRelevantForIntcoBilling} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CNDN_IS_RELEVANT_FOR_INTCO_BILLING: fieldBuilder.buildEdmTypeField(
          'CndnIsRelevantForIntcoBilling',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link conditionIsManuallyChanged} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_IS_MANUALLY_CHANGED: fieldBuilder.buildEdmTypeField(
          'ConditionIsManuallyChanged',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link conditionIsForConfiguration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_IS_FOR_CONFIGURATION: fieldBuilder.buildEdmTypeField(
          'ConditionIsForConfiguration',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link variantCondition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANT_CONDITION: fieldBuilder.buildEdmTypeField(
          'VariantCondition',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesOrderHeaderPrElement)
      };
    }

    return this._schema;
  }
}
