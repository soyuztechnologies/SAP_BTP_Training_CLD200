/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOrderSubsqntProcFlow } from './SalesOrderSubsqntProcFlow';
import { SalesOrderSubsqntProcFlowRequestBuilder } from './SalesOrderSubsqntProcFlowRequestBuilder';
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
  Time,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class SalesOrderSubsqntProcFlowApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SalesOrderSubsqntProcFlow<DeSerializersT>, DeSerializersT>
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
      SalesOrderSubsqntProcFlow<DeSerializersT>,
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

  entityConstructor = SalesOrderSubsqntProcFlow;

  requestBuilder(): SalesOrderSubsqntProcFlowRequestBuilder<DeSerializersT> {
    return new SalesOrderSubsqntProcFlowRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesOrderSubsqntProcFlow<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesOrderSubsqntProcFlow<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesOrderSubsqntProcFlow<DeSerializersT>,
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
    typeof SalesOrderSubsqntProcFlow,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesOrderSubsqntProcFlow,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SALES_ORDER: OrderableEdmTypeField<
      SalesOrderSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOC_RELATIONSHIP_UUID: OrderableEdmTypeField<
      SalesOrderSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    SUBSEQUENT_DOCUMENT: OrderableEdmTypeField<
      SalesOrderSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBSEQUENT_DOCUMENT_CATEGORY: OrderableEdmTypeField<
      SalesOrderSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESS_FLOW_LEVEL: OrderableEdmTypeField<
      SalesOrderSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERALL_SD_PROCESS_STATUS: OrderableEdmTypeField<
      SalesOrderSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      SalesOrderSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CREATION_TIME: OrderableEdmTypeField<
      SalesOrderSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.Time',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      SalesOrderSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER: OneToOneLink<
      SalesOrderSubsqntProcFlow<DeSerializersT>,
      DeSerializersT,
      SalesOrderApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesOrderSubsqntProcFlow<DeSerializers>>;
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
         * Static representation of the {@link docRelationshipUuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_RELATIONSHIP_UUID: fieldBuilder.buildEdmTypeField(
          'DocRelationshipUUID',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link subsequentDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSEQUENT_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'SubsequentDocument',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subsequentDocumentCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSEQUENT_DOCUMENT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'SubsequentDocumentCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link processFlowLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_FLOW_LEVEL: fieldBuilder.buildEdmTypeField(
          'ProcessFlowLevel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overallSdProcessStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERALL_SD_PROCESS_STATUS: fieldBuilder.buildEdmTypeField(
          'OverallSDProcessStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_DATE: fieldBuilder.buildEdmTypeField(
          'CreationDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link creationTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_TIME: fieldBuilder.buildEdmTypeField(
          'CreationTime',
          'Edm.Time',
          true
        ),
        /**
         * Static representation of the {@link lastChangeDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGE_DATE: fieldBuilder.buildEdmTypeField(
          'LastChangeDate',
          'Edm.DateTime',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesOrderSubsqntProcFlow)
      };
    }

    return this._schema;
  }
}
