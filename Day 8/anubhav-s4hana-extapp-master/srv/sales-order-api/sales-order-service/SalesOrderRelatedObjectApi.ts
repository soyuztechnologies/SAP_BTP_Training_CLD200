/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOrderRelatedObject } from './SalesOrderRelatedObject';
import { SalesOrderRelatedObjectRequestBuilder } from './SalesOrderRelatedObjectRequestBuilder';
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
export class SalesOrderRelatedObjectApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesOrderRelatedObject<DeSerializersT>, DeSerializersT>
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
      SalesOrderRelatedObject<DeSerializersT>,
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

  entityConstructor = SalesOrderRelatedObject;

  requestBuilder(): SalesOrderRelatedObjectRequestBuilder<DeSerializersT> {
    return new SalesOrderRelatedObjectRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesOrderRelatedObject<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesOrderRelatedObject<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesOrderRelatedObject<DeSerializersT>,
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
    typeof SalesOrderRelatedObject,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesOrderRelatedObject,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SALES_ORDER: OrderableEdmTypeField<
      SalesOrderRelatedObject<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SD_DOC_RELATED_OBJECT_SEQUENCE_NMBR: OrderableEdmTypeField<
      SalesOrderRelatedObject<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SD_DOCUMENT_RELATED_OBJECT_TYPE: OrderableEdmTypeField<
      SalesOrderRelatedObject<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SD_DOC_RELATED_OBJECT_SYSTEM: OrderableEdmTypeField<
      SalesOrderRelatedObject<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SD_DOC_RELATED_OBJECT_REFERENCE_1: OrderableEdmTypeField<
      SalesOrderRelatedObject<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SD_DOC_RELATED_OBJECT_REFERENCE_2: OrderableEdmTypeField<
      SalesOrderRelatedObject<DeSerializers>,
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
      SalesOrderRelatedObject<DeSerializersT>,
      DeSerializersT,
      SalesOrderApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesOrderRelatedObject<DeSerializers>>;
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
        ALL_FIELDS: new AllFields('*', SalesOrderRelatedObject)
      };
    }

    return this._schema;
  }
}
