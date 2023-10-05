/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOrderItmPrecdgProcFlow } from './SalesOrderItmPrecdgProcFlow';
import { SalesOrderItmPrecdgProcFlowRequestBuilder } from './SalesOrderItmPrecdgProcFlowRequestBuilder';
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
  Time,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class SalesOrderItmPrecdgProcFlowApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SalesOrderItmPrecdgProcFlow<DeSerializersT>, DeSerializersT>
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
      SalesOrderItmPrecdgProcFlow<DeSerializersT>,
      DeSerializersT,
      SalesOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrderItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER_ITEM: OneToOneLink<
      SalesOrderItmPrecdgProcFlow<DeSerializersT>,
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

  entityConstructor = SalesOrderItmPrecdgProcFlow;

  requestBuilder(): SalesOrderItmPrecdgProcFlowRequestBuilder<DeSerializersT> {
    return new SalesOrderItmPrecdgProcFlowRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesOrderItmPrecdgProcFlow<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesOrderItmPrecdgProcFlow<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesOrderItmPrecdgProcFlow<DeSerializersT>,
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
    typeof SalesOrderItmPrecdgProcFlow,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesOrderItmPrecdgProcFlow,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SALES_ORDER: OrderableEdmTypeField<
      SalesOrderItmPrecdgProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ORDER_ITEM: OrderableEdmTypeField<
      SalesOrderItmPrecdgProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOC_RELATIONSHIP_UUID: OrderableEdmTypeField<
      SalesOrderItmPrecdgProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PRECEDING_DOCUMENT: OrderableEdmTypeField<
      SalesOrderItmPrecdgProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRECEDING_DOCUMENT_ITEM: OrderableEdmTypeField<
      SalesOrderItmPrecdgProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRECEDING_DOCUMENT_CATEGORY: OrderableEdmTypeField<
      SalesOrderItmPrecdgProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESS_FLOW_LEVEL: OrderableEdmTypeField<
      SalesOrderItmPrecdgProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELATED_PROC_FLOW_DOC_STS_FIELD_NAME: OrderableEdmTypeField<
      SalesOrderItmPrecdgProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SD_PROCESS_STATUS: OrderableEdmTypeField<
      SalesOrderItmPrecdgProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_TRANSFER_STATUS: OrderableEdmTypeField<
      SalesOrderItmPrecdgProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRELIM_BILLING_DOCUMENT_STATUS: OrderableEdmTypeField<
      SalesOrderItmPrecdgProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      SalesOrderItmPrecdgProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CREATION_TIME: OrderableEdmTypeField<
      SalesOrderItmPrecdgProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.Time',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      SalesOrderItmPrecdgProcFlow<DeSerializers>,
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
      SalesOrderItmPrecdgProcFlow<DeSerializersT>,
      DeSerializersT,
      SalesOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrderItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER_ITEM: OneToOneLink<
      SalesOrderItmPrecdgProcFlow<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesOrderItmPrecdgProcFlow<DeSerializers>>;
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
         * Static representation of the {@link docRelationshipUuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_RELATIONSHIP_UUID: fieldBuilder.buildEdmTypeField(
          'DocRelationshipUUID',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link precedingDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRECEDING_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'PrecedingDocument',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link precedingDocumentItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRECEDING_DOCUMENT_ITEM: fieldBuilder.buildEdmTypeField(
          'PrecedingDocumentItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link precedingDocumentCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRECEDING_DOCUMENT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'PrecedingDocumentCategory',
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
         * Static representation of the {@link relatedProcFlowDocStsFieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATED_PROC_FLOW_DOC_STS_FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'RelatedProcFlowDocStsFieldName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sdProcessStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SD_PROCESS_STATUS: fieldBuilder.buildEdmTypeField(
          'SDProcessStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountingTransferStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_TRANSFER_STATUS: fieldBuilder.buildEdmTypeField(
          'AccountingTransferStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prelimBillingDocumentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRELIM_BILLING_DOCUMENT_STATUS: fieldBuilder.buildEdmTypeField(
          'PrelimBillingDocumentStatus',
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
        ALL_FIELDS: new AllFields('*', SalesOrderItmPrecdgProcFlow)
      };
    }

    return this._schema;
  }
}
