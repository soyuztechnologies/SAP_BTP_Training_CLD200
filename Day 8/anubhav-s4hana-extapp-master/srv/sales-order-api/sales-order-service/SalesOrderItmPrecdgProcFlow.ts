/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { SalesOrderItmPrecdgProcFlowApi } from './SalesOrderItmPrecdgProcFlowApi';
import { SalesOrder, SalesOrderType } from './SalesOrder';
import { SalesOrderItem, SalesOrderItemType } from './SalesOrderItem';

/**
 * This class represents the entity "A_SalesOrderItmPrecdgProcFlow" of service "API_SALES_ORDER_SRV".
 */
export class SalesOrderItmPrecdgProcFlow<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOrderItmPrecdgProcFlowType<T>
{
  /**
   * Technical entity name for SalesOrderItmPrecdgProcFlow.
   */
  static _entityName = 'A_SalesOrderItmPrecdgProcFlow';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
  /**
   * All key fields of the SalesOrderItmPrecdgProcFlow entity
   */
  static _keys = ['SalesOrder', 'SalesOrderItem', 'DocRelationshipUUID'];
  /**
   * Subsequent Sales and Distribution Document.
   * Maximum length: 10.
   */
  salesOrder!: DeserializedType<T, 'Edm.String'>;
  /**
   * Subsequent Item of an SD Document.
   * Maximum length: 6.
   */
  salesOrderItem!: DeserializedType<T, 'Edm.String'>;
  /**
   * SD Unique Document Relationship Identification.
   */
  docRelationshipUuid!: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Preceding sales and distribution document.
   * Maximum length: 10.
   * @nullable
   */
  precedingDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Preceding Item of an SD Document.
   * Maximum length: 6.
   * @nullable
   */
  precedingDocumentItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Category of Preceding SD Document.
   * Maximum length: 4.
   * @nullable
   */
  precedingDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Level of the document flow record.
   * Maximum length: 2.
   * @nullable
   */
  processFlowLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Field Name.
   * Maximum length: 30.
   * @nullable
   */
  relatedProcFlowDocStsFieldName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Overall Processing Status (Item).
   * Maximum length: 1.
   * @nullable
   */
  sdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status for Transfer to Accounting.
   * Maximum length: 1.
   * @nullable
   */
  accountingTransferStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Preliminary Billing Document Status.
   * Maximum length: 1.
   * @nullable
   */
  prelimBillingDocumentStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Record Created On.
   * @nullable
   */
  creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Entry time.
   * @nullable
   */
  creationTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * Last Changed On.
   * @nullable
   */
  lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrder} entity.
   */
  toSalesOrder?: SalesOrder<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrderItem} entity.
   */
  toSalesOrderItem?: SalesOrderItem<T> | null;

  constructor(readonly _entityApi: SalesOrderItmPrecdgProcFlowApi<T>) {
    super(_entityApi);
  }
}

export interface SalesOrderItmPrecdgProcFlowType<
  T extends DeSerializers = DefaultDeSerializers
> {
  salesOrder: DeserializedType<T, 'Edm.String'>;
  salesOrderItem: DeserializedType<T, 'Edm.String'>;
  docRelationshipUuid: DeserializedType<T, 'Edm.Guid'>;
  precedingDocument?: DeserializedType<T, 'Edm.String'> | null;
  precedingDocumentItem?: DeserializedType<T, 'Edm.String'> | null;
  precedingDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
  processFlowLevel?: DeserializedType<T, 'Edm.String'> | null;
  relatedProcFlowDocStsFieldName?: DeserializedType<T, 'Edm.String'> | null;
  sdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
  accountingTransferStatus?: DeserializedType<T, 'Edm.String'> | null;
  prelimBillingDocumentStatus?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  creationTime?: DeserializedType<T, 'Edm.Time'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  toSalesOrder?: SalesOrderType<T> | null;
  toSalesOrderItem?: SalesOrderItemType<T> | null;
}
