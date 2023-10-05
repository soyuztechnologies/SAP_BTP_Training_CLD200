/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOrderItemBillingPlan } from './SalesOrderItemBillingPlan';
import { SalesOrderItemBillingPlanRequestBuilder } from './SalesOrderItemBillingPlanRequestBuilder';
import { SlsOrderItemBillingPlanItemApi } from './SlsOrderItemBillingPlanItemApi';
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
  Link,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class SalesOrderItemBillingPlanApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SalesOrderItemBillingPlan<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link toBillingPlanItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BILLING_PLAN_ITEM: Link<
      SalesOrderItemBillingPlan<DeSerializersT>,
      DeSerializersT,
      SlsOrderItemBillingPlanItemApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER: OneToOneLink<
      SalesOrderItemBillingPlan<DeSerializersT>,
      DeSerializersT,
      SalesOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrderItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER_ITEM: OneToOneLink<
      SalesOrderItemBillingPlan<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SlsOrderItemBillingPlanItemApi<DeSerializersT>,
      SalesOrderApi<DeSerializersT>,
      SalesOrderItemApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_BILLING_PLAN_ITEM: new Link('to_BillingPlanItem', this, linkedApis[0]),
      TO_SALES_ORDER: new OneToOneLink('to_SalesOrder', this, linkedApis[1]),
      TO_SALES_ORDER_ITEM: new OneToOneLink(
        'to_SalesOrderItem',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = SalesOrderItemBillingPlan;

  requestBuilder(): SalesOrderItemBillingPlanRequestBuilder<DeSerializersT> {
    return new SalesOrderItemBillingPlanRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesOrderItemBillingPlan<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesOrderItemBillingPlan<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesOrderItemBillingPlan<DeSerializersT>,
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
    typeof SalesOrderItemBillingPlan,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesOrderItemBillingPlan,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SALES_ORDER: OrderableEdmTypeField<
      SalesOrderItemBillingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ORDER_ITEM: OrderableEdmTypeField<
      SalesOrderItemBillingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILLING_PLAN: OrderableEdmTypeField<
      SalesOrderItemBillingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILLING_PLAN_IS_IN_HEADER: OrderableEdmTypeField<
      SalesOrderItemBillingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    BILLING_PLAN_START_DATE: OrderableEdmTypeField<
      SalesOrderItemBillingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    BILLING_PLAN_START_DATE_RULE: OrderableEdmTypeField<
      SalesOrderItemBillingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_BILLING_PLAN: OrderableEdmTypeField<
      SalesOrderItemBillingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_CATEGORY: OrderableEdmTypeField<
      SalesOrderItemBillingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_TYPE: OrderableEdmTypeField<
      SalesOrderItemBillingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_END_DATE: OrderableEdmTypeField<
      SalesOrderItemBillingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    BILLING_PLAN_END_DATE_RULE: OrderableEdmTypeField<
      SalesOrderItemBillingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_SEARCH_TERM: OrderableEdmTypeField<
      SalesOrderItemBillingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toBillingPlanItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BILLING_PLAN_ITEM: Link<
      SalesOrderItemBillingPlan<DeSerializersT>,
      DeSerializersT,
      SlsOrderItemBillingPlanItemApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER: OneToOneLink<
      SalesOrderItemBillingPlan<DeSerializersT>,
      DeSerializersT,
      SalesOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrderItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER_ITEM: OneToOneLink<
      SalesOrderItemBillingPlan<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesOrderItemBillingPlan<DeSerializers>>;
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
         * Static representation of the {@link billingPlanIsInHeader} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_PLAN_IS_IN_HEADER: fieldBuilder.buildEdmTypeField(
          'BillingPlanIsInHeader',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link billingPlanStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_PLAN_START_DATE: fieldBuilder.buildEdmTypeField(
          'BillingPlanStartDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link billingPlanStartDateRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_PLAN_START_DATE_RULE: fieldBuilder.buildEdmTypeField(
          'BillingPlanStartDateRule',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link referenceBillingPlan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_BILLING_PLAN: fieldBuilder.buildEdmTypeField(
          'ReferenceBillingPlan',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billingPlanCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_PLAN_CATEGORY: fieldBuilder.buildEdmTypeField(
          'BillingPlanCategory',
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
         * Static representation of the {@link billingPlanEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_PLAN_END_DATE: fieldBuilder.buildEdmTypeField(
          'BillingPlanEndDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link billingPlanEndDateRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_PLAN_END_DATE_RULE: fieldBuilder.buildEdmTypeField(
          'BillingPlanEndDateRule',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billingPlanSearchTerm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_PLAN_SEARCH_TERM: fieldBuilder.buildEdmTypeField(
          'BillingPlanSearchTerm',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesOrderItemBillingPlan)
      };
    }

    return this._schema;
  }
}
