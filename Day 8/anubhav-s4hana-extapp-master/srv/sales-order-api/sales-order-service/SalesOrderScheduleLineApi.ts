/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOrderScheduleLine } from './SalesOrderScheduleLine';
import { SalesOrderScheduleLineRequestBuilder } from './SalesOrderScheduleLineRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class SalesOrderScheduleLineApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesOrderScheduleLine<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SalesOrderScheduleLine;

  requestBuilder(): SalesOrderScheduleLineRequestBuilder<DeSerializersT> {
    return new SalesOrderScheduleLineRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesOrderScheduleLine<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesOrderScheduleLine<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesOrderScheduleLine<DeSerializersT>,
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
    typeof SalesOrderScheduleLine,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesOrderScheduleLine,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SALES_ORDER: OrderableEdmTypeField<
      SalesOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ORDER_ITEM: OrderableEdmTypeField<
      SalesOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCHEDULE_LINE: OrderableEdmTypeField<
      SalesOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUESTED_DELIVERY_DATE: OrderableEdmTypeField<
      SalesOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CONFIRMED_DELIVERY_DATE: OrderableEdmTypeField<
      SalesOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    ORDER_QUANTITY_UNIT: OrderableEdmTypeField<
      SalesOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_QUANTITY_SAP_UNIT: OrderableEdmTypeField<
      SalesOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_QUANTITY_ISO_UNIT: OrderableEdmTypeField<
      SalesOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEDULE_LINE_ORDER_QUANTITY: OrderableEdmTypeField<
      SalesOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CONFD_ORDER_QTY_BY_MATL_AVAIL_CHECK: OrderableEdmTypeField<
      SalesOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    DELIVERED_QTY_IN_ORDER_QTY_UNIT: OrderableEdmTypeField<
      SalesOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    OPEN_CONFD_DELIV_QTY_IN_ORD_QTY_UNIT: OrderableEdmTypeField<
      SalesOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CORRECTED_QTY_IN_ORDER_QTY_UNIT: OrderableEdmTypeField<
      SalesOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    DELIV_BLOCK_REASON_FOR_SCHED_LINE: OrderableEdmTypeField<
      SalesOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SalesOrderScheduleLine<DeSerializers>>;
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
         * Static representation of the {@link scheduleLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_LINE: fieldBuilder.buildEdmTypeField(
          'ScheduleLine',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link requestedDeliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'RequestedDeliveryDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link confirmedDeliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'ConfirmedDeliveryDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link orderQuantityUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_QUANTITY_UNIT: fieldBuilder.buildEdmTypeField(
          'OrderQuantityUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderQuantitySapUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_QUANTITY_SAP_UNIT: fieldBuilder.buildEdmTypeField(
          'OrderQuantitySAPUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderQuantityIsoUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_QUANTITY_ISO_UNIT: fieldBuilder.buildEdmTypeField(
          'OrderQuantityISOUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scheduleLineOrderQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_LINE_ORDER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ScheduleLineOrderQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link confdOrderQtyByMatlAvailCheck} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFD_ORDER_QTY_BY_MATL_AVAIL_CHECK: fieldBuilder.buildEdmTypeField(
          'ConfdOrderQtyByMatlAvailCheck',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link deliveredQtyInOrderQtyUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERED_QTY_IN_ORDER_QTY_UNIT: fieldBuilder.buildEdmTypeField(
          'DeliveredQtyInOrderQtyUnit',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link openConfdDelivQtyInOrdQtyUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPEN_CONFD_DELIV_QTY_IN_ORD_QTY_UNIT: fieldBuilder.buildEdmTypeField(
          'OpenConfdDelivQtyInOrdQtyUnit',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link correctedQtyInOrderQtyUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTED_QTY_IN_ORDER_QTY_UNIT: fieldBuilder.buildEdmTypeField(
          'CorrectedQtyInOrderQtyUnit',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link delivBlockReasonForSchedLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIV_BLOCK_REASON_FOR_SCHED_LINE: fieldBuilder.buildEdmTypeField(
          'DelivBlockReasonForSchedLine',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesOrderScheduleLine)
      };
    }

    return this._schema;
  }
}
