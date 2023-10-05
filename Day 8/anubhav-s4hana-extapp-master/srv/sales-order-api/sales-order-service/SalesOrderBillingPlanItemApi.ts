/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOrderBillingPlanItem } from './SalesOrderBillingPlanItem';
import { SalesOrderBillingPlanItemRequestBuilder } from './SalesOrderBillingPlanItemRequestBuilder';
import { SalesOrderBillingPlanApi } from './SalesOrderBillingPlanApi';
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
export class SalesOrderBillingPlanItemApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SalesOrderBillingPlanItem<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toBillingPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BILLING_PLAN: OneToOneLink<
      SalesOrderBillingPlanItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderBillingPlanApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER: OneToOneLink<
      SalesOrderBillingPlanItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SalesOrderBillingPlanApi<DeSerializersT>,
      SalesOrderApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_BILLING_PLAN: new OneToOneLink('to_BillingPlan', this, linkedApis[0]),
      TO_SALES_ORDER: new OneToOneLink('to_SalesOrder', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = SalesOrderBillingPlanItem;

  requestBuilder(): SalesOrderBillingPlanItemRequestBuilder<DeSerializersT> {
    return new SalesOrderBillingPlanItemRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesOrderBillingPlanItem<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesOrderBillingPlanItem<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesOrderBillingPlanItem<DeSerializersT>,
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
    typeof SalesOrderBillingPlanItem,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesOrderBillingPlanItem,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SALES_ORDER: OrderableEdmTypeField<
      SalesOrderBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILLING_PLAN: OrderableEdmTypeField<
      SalesOrderBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILLING_PLAN_ITEM: OrderableEdmTypeField<
      SalesOrderBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILLING_PLAN_DATE_CATEGORY: OrderableEdmTypeField<
      SalesOrderBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_BILLING_DATE: OrderableEdmTypeField<
      SalesOrderBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    BILLING_PLAN_AMOUNT: OrderableEdmTypeField<
      SalesOrderBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    TRANSACTION_CURRENCY: OrderableEdmTypeField<
      SalesOrderBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_AMOUNT_PERCENT: OrderableEdmTypeField<
      SalesOrderBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CUSTOMER_PAYMENT_TERMS: OrderableEdmTypeField<
      SalesOrderBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROPOSED_BILLING_DOCUMENT_TYPE: OrderableEdmTypeField<
      SalesOrderBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_DATE_DESCRIPTION_CODE: OrderableEdmTypeField<
      SalesOrderBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_BLOCK_REASON: OrderableEdmTypeField<
      SalesOrderBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_SERVICE_START_DATE: OrderableEdmTypeField<
      SalesOrderBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    BILLING_PLAN_SERVICE_END_DATE: OrderableEdmTypeField<
      SalesOrderBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    BILLING_PLAN_RELATED_BILLG_STATUS: OrderableEdmTypeField<
      SalesOrderBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_TYPE: OrderableEdmTypeField<
      SalesOrderBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADOPTING_BILLING_DATE_ID: OrderableEdmTypeField<
      SalesOrderBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_BILLING_RULE: OrderableEdmTypeField<
      SalesOrderBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_MILESTONE_USAGE: OrderableEdmTypeField<
      SalesOrderBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLG_PLN_DTE_CORRECTION_RFND_TYPE: OrderableEdmTypeField<
      SalesOrderBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_EXCHANGE_RATE: OrderableEdmTypeField<
      SalesOrderBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    POSTPONEMENT_REASON: OrderableEdmTypeField<
      SalesOrderBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toBillingPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BILLING_PLAN: OneToOneLink<
      SalesOrderBillingPlanItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderBillingPlanApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER: OneToOneLink<
      SalesOrderBillingPlanItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesOrderBillingPlanItem<DeSerializers>>;
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
         * Static representation of the {@link billingPlan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_PLAN: fieldBuilder.buildEdmTypeField(
          'BillingPlan',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link billingPlanItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_PLAN_ITEM: fieldBuilder.buildEdmTypeField(
          'BillingPlanItem',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link billingPlanDateCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_PLAN_DATE_CATEGORY: fieldBuilder.buildEdmTypeField(
          'BillingPlanDateCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billingPlanBillingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_PLAN_BILLING_DATE: fieldBuilder.buildEdmTypeField(
          'BillingPlanBillingDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link billingPlanAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_PLAN_AMOUNT: fieldBuilder.buildEdmTypeField(
          'BillingPlanAmount',
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
         * Static representation of the {@link billingPlanAmountPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_PLAN_AMOUNT_PERCENT: fieldBuilder.buildEdmTypeField(
          'BillingPlanAmountPercent',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link customerPaymentTerms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_PAYMENT_TERMS: fieldBuilder.buildEdmTypeField(
          'CustomerPaymentTerms',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link proposedBillingDocumentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPOSED_BILLING_DOCUMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'ProposedBillingDocumentType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billingPlanDateDescriptionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_PLAN_DATE_DESCRIPTION_CODE: fieldBuilder.buildEdmTypeField(
          'BillingPlanDateDescriptionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billingBlockReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_BLOCK_REASON: fieldBuilder.buildEdmTypeField(
          'BillingBlockReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billingPlanServiceStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_PLAN_SERVICE_START_DATE: fieldBuilder.buildEdmTypeField(
          'BillingPlanServiceStartDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link billingPlanServiceEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_PLAN_SERVICE_END_DATE: fieldBuilder.buildEdmTypeField(
          'BillingPlanServiceEndDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link billingPlanRelatedBillgStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_PLAN_RELATED_BILLG_STATUS: fieldBuilder.buildEdmTypeField(
          'BillingPlanRelatedBillgStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billingPlanType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_PLAN_TYPE: fieldBuilder.buildEdmTypeField(
          'BillingPlanType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link adoptingBillingDateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADOPTING_BILLING_DATE_ID: fieldBuilder.buildEdmTypeField(
          'AdoptingBillingDateID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billingPlanBillingRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_PLAN_BILLING_RULE: fieldBuilder.buildEdmTypeField(
          'BillingPlanBillingRule',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billingPlanMilestoneUsage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_PLAN_MILESTONE_USAGE: fieldBuilder.buildEdmTypeField(
          'BillingPlanMilestoneUsage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billgPlnDteCorrectionRfndType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLG_PLN_DTE_CORRECTION_RFND_TYPE: fieldBuilder.buildEdmTypeField(
          'BillgPlnDteCorrectionRfndType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountingExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'AccountingExchangeRate',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link postponementReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTPONEMENT_REASON: fieldBuilder.buildEdmTypeField(
          'PostponementReason',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesOrderBillingPlanItem)
      };
    }

    return this._schema;
  }
}
