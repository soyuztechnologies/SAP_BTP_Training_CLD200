/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOrderBillingPlan } from './SalesOrderBillingPlan';
import { SalesOrderBillingPlanRequestBuilder } from './SalesOrderBillingPlanRequestBuilder';
import { SalesOrderBillingPlanItemApi } from './SalesOrderBillingPlanItemApi';
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
  Link,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class SalesOrderBillingPlanApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesOrderBillingPlan<DeSerializersT>, DeSerializersT>
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
      SalesOrderBillingPlan<DeSerializersT>,
      DeSerializersT,
      SalesOrderBillingPlanItemApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER: OneToOneLink<
      SalesOrderBillingPlan<DeSerializersT>,
      DeSerializersT,
      SalesOrderApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SalesOrderBillingPlanItemApi<DeSerializersT>,
      SalesOrderApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_BILLING_PLAN_ITEM: new Link('to_BillingPlanItem', this, linkedApis[0]),
      TO_SALES_ORDER: new OneToOneLink('to_SalesOrder', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = SalesOrderBillingPlan;

  requestBuilder(): SalesOrderBillingPlanRequestBuilder<DeSerializersT> {
    return new SalesOrderBillingPlanRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesOrderBillingPlan<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SalesOrderBillingPlan<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesOrderBillingPlan<DeSerializersT>,
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
    typeof SalesOrderBillingPlan,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesOrderBillingPlan,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SALES_ORDER: OrderableEdmTypeField<
      SalesOrderBillingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILLING_PLAN: OrderableEdmTypeField<
      SalesOrderBillingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILLING_PLAN_START_DATE: OrderableEdmTypeField<
      SalesOrderBillingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    BILLING_PLAN_START_DATE_RULE: OrderableEdmTypeField<
      SalesOrderBillingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_BILLING_PLAN: OrderableEdmTypeField<
      SalesOrderBillingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_CATEGORY: OrderableEdmTypeField<
      SalesOrderBillingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_TYPE: OrderableEdmTypeField<
      SalesOrderBillingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_END_DATE: OrderableEdmTypeField<
      SalesOrderBillingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    BILLING_PLAN_END_DATE_RULE: OrderableEdmTypeField<
      SalesOrderBillingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_SEARCH_TERM: OrderableEdmTypeField<
      SalesOrderBillingPlan<DeSerializers>,
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
      SalesOrderBillingPlan<DeSerializersT>,
      DeSerializersT,
      SalesOrderBillingPlanItemApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER: OneToOneLink<
      SalesOrderBillingPlan<DeSerializersT>,
      DeSerializersT,
      SalesOrderApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesOrderBillingPlan<DeSerializers>>;
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
        ALL_FIELDS: new AllFields('*', SalesOrderBillingPlan)
      };
    }

    return this._schema;
  }
}
