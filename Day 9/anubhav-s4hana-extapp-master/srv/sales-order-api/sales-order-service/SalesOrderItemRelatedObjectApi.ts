/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOrderItemRelatedObject } from './SalesOrderItemRelatedObject';
import { SalesOrderItemRelatedObjectRequestBuilder } from './SalesOrderItemRelatedObjectRequestBuilder';
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
export class SalesOrderItemRelatedObjectApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SalesOrderItemRelatedObject<DeSerializersT>, DeSerializersT>
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
      SalesOrderItemRelatedObject<DeSerializersT>,
      DeSerializersT,
      SalesOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrderItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER_ITEM: OneToOneLink<
      SalesOrderItemRelatedObject<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SalesOrderApi<DeSerializersT>,
      SalesOrderItemApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_SALES_ORDER: new OneToOneLink('to_SalesOrder', this, linkedApis[0]),
      TO_SALES_ORDER_ITEM: new OneToOneLink(
        'to_SalesOrderItem',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = SalesOrderItemRelatedObject;

  requestBuilder(): SalesOrderItemRelatedObjectRequestBuilder<DeSerializersT> {
    return new SalesOrderItemRelatedObjectRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesOrderItemRelatedObject<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesOrderItemRelatedObject<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesOrderItemRelatedObject<DeSerializersT>,
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
    typeof SalesOrderItemRelatedObject,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesOrderItemRelatedObject,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SALES_ORDER: OrderableEdmTypeField<
      SalesOrderItemRelatedObject<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ORDER_ITEM: OrderableEdmTypeField<
      SalesOrderItemRelatedObject<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SD_DOC_RELATED_OBJECT_SEQUENCE_NMBR: OrderableEdmTypeField<
      SalesOrderItemRelatedObject<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SD_DOCUMENT_RELATED_OBJECT_TYPE: OrderableEdmTypeField<
      SalesOrderItemRelatedObject<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SD_DOC_RELATED_OBJECT_SYSTEM: OrderableEdmTypeField<
      SalesOrderItemRelatedObject<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SD_DOC_RELATED_OBJECT_REFERENCE_1: OrderableEdmTypeField<
      SalesOrderItemRelatedObject<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SD_DOC_RELATED_OBJECT_REFERENCE_2: OrderableEdmTypeField<
      SalesOrderItemRelatedObject<DeSerializers>,
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
      SalesOrderItemRelatedObject<DeSerializersT>,
      DeSerializersT,
      SalesOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrderItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER_ITEM: OneToOneLink<
      SalesOrderItemRelatedObject<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesOrderItemRelatedObject<DeSerializers>>;
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
         * Static representation of the {@link sdDocRelatedObjectSequenceNmbr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SD_DOC_RELATED_OBJECT_SEQUENCE_NMBR: fieldBuilder.buildEdmTypeField(
          'SDDocRelatedObjectSequenceNmbr',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sdDocumentRelatedObjectType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SD_DOCUMENT_RELATED_OBJECT_TYPE: fieldBuilder.buildEdmTypeField(
          'SDDocumentRelatedObjectType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sdDocRelatedObjectSystem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SD_DOC_RELATED_OBJECT_SYSTEM: fieldBuilder.buildEdmTypeField(
          'SDDocRelatedObjectSystem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sdDocRelatedObjectReference1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SD_DOC_RELATED_OBJECT_REFERENCE_1: fieldBuilder.buildEdmTypeField(
          'SDDocRelatedObjectReference1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sdDocRelatedObjectReference2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SD_DOC_RELATED_OBJECT_REFERENCE_2: fieldBuilder.buildEdmTypeField(
          'SDDocRelatedObjectReference2',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesOrderItemRelatedObject)
      };
    }

    return this._schema;
  }
}
