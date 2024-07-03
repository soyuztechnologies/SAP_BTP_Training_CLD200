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
import type { SalesOrderSubsqntProcFlowApi } from './SalesOrderSubsqntProcFlowApi';
import { SalesOrder, SalesOrderType } from './SalesOrder';

/**
 * This class represents the entity "A_SalesOrderSubsqntProcFlow" of service "API_SALES_ORDER_SRV".
 */
export class SalesOrderSubsqntProcFlow<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOrderSubsqntProcFlowType<T>
{
  /**
   * Technical entity name for SalesOrderSubsqntProcFlow.
   */
  static _entityName = 'A_SalesOrderSubsqntProcFlow';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
  /**
   * All key fields of the SalesOrderSubsqntProcFlow entity
   */
  static _keys = ['SalesOrder', 'DocRelationshipUUID'];
  /**
   * Preceding sales and distribution document.
   * Maximum length: 10.
   */
  salesOrder!: DeserializedType<T, 'Edm.String'>;
  /**
   * SD Unique Document Relationship Identification.
   */
  docRelationshipUuid!: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Subsequent Sales and Distribution Document.
   * Maximum length: 10.
   * @nullable
   */
  subsequentDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Category of Subsequent Document.
   * Maximum length: 4.
   * @nullable
   */
  subsequentDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Level of the document flow record.
   * Maximum length: 2.
   * @nullable
   */
  processFlowLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Overall Processing Status (Header/All Items).
   * Maximum length: 1.
   * @nullable
   */
  overallSdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
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

  constructor(readonly _entityApi: SalesOrderSubsqntProcFlowApi<T>) {
    super(_entityApi);
  }
}

export interface SalesOrderSubsqntProcFlowType<
  T extends DeSerializers = DefaultDeSerializers
> {
  salesOrder: DeserializedType<T, 'Edm.String'>;
  docRelationshipUuid: DeserializedType<T, 'Edm.Guid'>;
  subsequentDocument?: DeserializedType<T, 'Edm.String'> | null;
  subsequentDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
  processFlowLevel?: DeserializedType<T, 'Edm.String'> | null;
  overallSdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  creationTime?: DeserializedType<T, 'Edm.Time'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  toSalesOrder?: SalesOrderType<T> | null;
}
