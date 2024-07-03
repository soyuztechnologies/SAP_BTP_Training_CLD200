/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SlsOrderItemBillingPlanItem } from './SlsOrderItemBillingPlanItem';
import { SlsOrderItemBillingPlanItemRequestBuilder } from './SlsOrderItemBillingPlanItemRequestBuilder';
import { SalesOrderItemBillingPlanApi } from './SalesOrderItemBillingPlanApi';
import { SalesOrderApi } from './SalesOrderApi';
import { SalesOrderItemApi } from './SalesOrderItemApi';
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
export class SlsOrderItemBillingPlanItemApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SlsOrderItemBillingPlanItem<DeSerializersT>, DeSerializersT>
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
      SlsOrderItemBillingPlanItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemBillingPlanApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER: OneToOneLink<
      SlsOrderItemBillingPlanItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrderItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER_ITEM: OneToOneLink<
      SlsOrderItemBillingPlanItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SalesOrderItemBillingPlanApi<DeSerializersT>,
      SalesOrderApi<DeSerializersT>,
      SalesOrderItemApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_BILLING_PLAN: new OneToOneLink('to_BillingPlan', this, linkedApis[0]),
      TO_SALES_ORDER: new OneToOneLink('to_SalesOrder', this, linkedApis[1]),
      TO_SALES_ORDER_ITEM: new OneToOneLink(
        'to_SalesOrderItem',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = SlsOrderItemBillingPlanItem;

  requestBuilder(): SlsOrderItemBillingPlanItemRequestBuilder<DeSerializersT> {
    return new SlsOrderItemBillingPlanItemRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SlsOrderItemBillingPlanItem<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SlsOrderItemBillingPlanItem<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SlsOrderItemBillingPlanItem<DeSerializersT>,
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
    typeof SlsOrderItemBillingPlanItem,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SlsOrderItemBillingPlanItem,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SALES_ORDER: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ORDER_ITEM: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILLING_PLAN: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILLING_PLAN_ITEM: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILLING_PLAN_DATE_CATEGORY: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_BILLING_DATE: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    BILLING_PLAN_AMOUNT: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    TRANSACTION_CURRENCY: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_AMOUNT_PERCENT: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CUSTOMER_PAYMENT_TERMS: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROPOSED_BILLING_DOCUMENT_TYPE: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_DATE_DESCRIPTION_CODE: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_BLOCK_REASON: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_SERVICE_START_DATE: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    BILLING_PLAN_SERVICE_END_DATE: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    BILLING_PLAN_RELATED_BILLG_STATUS: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_TYPE: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADOPTING_BILLING_DATE_ID: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_BILLING_RULE: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_MILESTONE_USAGE: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLG_PLN_DTE_CORRECTION_RFND_TYPE: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_EXCHANGE_RATE: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    POSTPONEMENT_REASON: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
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
      SlsOrderItemBillingPlanItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemBillingPlanApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER: OneToOneLink<
      SlsOrderItemBillingPlanItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrderItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER_ITEM: OneToOneLink<
      SlsOrderItemBillingPlanItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SlsOrderItemBillingPlanItem<DeSerializers>>;
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
         * Static representation of the {@link salesOrderItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_ITEM: fieldBuilder.buildEdmTypeField(
          'SalesOrderItem',
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
        ALL_FIELDS: new AllFields('*', SlsOrderItemBillingPlanItem)
      };
    }

    return this._schema;
  }
}
