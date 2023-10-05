/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOrderItmSubsqntProcFlow } from './SalesOrderItmSubsqntProcFlow';
import { SalesOrderItmSubsqntProcFlowRequestBuilder } from './SalesOrderItmSubsqntProcFlowRequestBuilder';
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
export class SalesOrderItmSubsqntProcFlowApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SalesOrderItmSubsqntProcFlow<DeSerializersT>, DeSerializersT>
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
      SalesOrderItmSubsqntProcFlow<DeSerializersT>,
      DeSerializersT,
      SalesOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrderItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER_ITEM: OneToOneLink<
      SalesOrderItmSubsqntProcFlow<DeSerializersT>,
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

  entityConstructor = SalesOrderItmSubsqntProcFlow;

  requestBuilder(): SalesOrderItmSubsqntProcFlowRequestBuilder<DeSerializersT> {
    return new SalesOrderItmSubsqntProcFlowRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesOrderItmSubsqntProcFlow<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesOrderItmSubsqntProcFlow<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesOrderItmSubsqntProcFlow<DeSerializersT>,
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
    typeof SalesOrderItmSubsqntProcFlow,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesOrderItmSubsqntProcFlow,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SALES_ORDER: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ORDER_ITEM: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOC_RELATIONSHIP_UUID: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    SUBSEQUENT_DOCUMENT: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBSEQUENT_DOCUMENT_ITEM: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBSEQUENT_DOCUMENT_CATEGORY: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESS_FLOW_LEVEL: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELATED_PROC_FLOW_DOC_STS_FIELD_NAME: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SD_PROCESS_STATUS: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_TRANSFER_STATUS: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRELIM_BILLING_DOCUMENT_STATUS: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBSQNT_DOC_ITM_PRECDG_DOCUMENT: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBSQNT_DOC_ITM_PRECDG_DOC_ITEM: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBSQNT_DOC_ITM_PRECDG_DOC_CATEGORY: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CREATION_TIME: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.Time',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
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
      SalesOrderItmSubsqntProcFlow<DeSerializersT>,
      DeSerializersT,
      SalesOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrderItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER_ITEM: OneToOneLink<
      SalesOrderItmSubsqntProcFlow<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesOrderItmSubsqntProcFlow<DeSerializers>>;
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
         * Static representation of the {@link subsequentDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSEQUENT_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'SubsequentDocument',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subsequentDocumentItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSEQUENT_DOCUMENT_ITEM: fieldBuilder.buildEdmTypeField(
          'SubsequentDocumentItem',
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
         * Static representation of the {@link subsqntDocItmPrecdgDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSQNT_DOC_ITM_PRECDG_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'SubsqntDocItmPrecdgDocument',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subsqntDocItmPrecdgDocItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSQNT_DOC_ITM_PRECDG_DOC_ITEM: fieldBuilder.buildEdmTypeField(
          'SubsqntDocItmPrecdgDocItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subsqntDocItmPrecdgDocCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSQNT_DOC_ITM_PRECDG_DOC_CATEGORY: fieldBuilder.buildEdmTypeField(
          'SubsqntDocItmPrecdgDocCategory',
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
        ALL_FIELDS: new AllFields('*', SalesOrderItmSubsqntProcFlow)
      };
    }

    return this._schema;
  }
}
