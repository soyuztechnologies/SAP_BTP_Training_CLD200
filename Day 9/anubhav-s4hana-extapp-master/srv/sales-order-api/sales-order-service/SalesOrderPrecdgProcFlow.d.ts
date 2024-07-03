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
import type { SalesOrderPrecdgProcFlowApi } from './SalesOrderPrecdgProcFlowApi';
import { SalesOrder, SalesOrderType } from './SalesOrder';
/**
 * This class represents the entity "A_SalesOrderPrecdgProcFlow" of service "API_SALES_ORDER_SRV".
 */
export declare class SalesOrderPrecdgProcFlow<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOrderPrecdgProcFlowType<T>
{
  readonly _entityApi: SalesOrderPrecdgProcFlowApi<T>;
  /**
   * Technical entity name for SalesOrderPrecdgProcFlow.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the SalesOrderPrecdgProcFlow entity
   */
  static _keys: string[];
  /**
   * Subsequent Sales and Distribution Document.
   * Maximum length: 10.
   */
  salesOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * SD Unique Document Relationship Identification.
   */
  docRelationshipUuid: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Preceding sales and distribution document.
   * Maximum length: 10.
   * @nullable
   */
  precedingDocument?: DeserializedType<T, 'Edm.String'> | null;
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
  constructor(_entityApi: SalesOrderPrecdgProcFlowApi<T>);
}
export interface SalesOrderPrecdgProcFlowType<
  T extends DeSerializers = DefaultDeSerializers
> {
  salesOrder: DeserializedType<T, 'Edm.String'>;
  docRelationshipUuid: DeserializedType<T, 'Edm.Guid'>;
  precedingDocument?: DeserializedType<T, 'Edm.String'> | null;
  precedingDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
  processFlowLevel?: DeserializedType<T, 'Edm.String'> | null;
  overallSdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  creationTime?: DeserializedType<T, 'Edm.Time'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  toSalesOrder?: SalesOrderType<T> | null;
}
//# sourceMappingURL=SalesOrderPrecdgProcFlow.d.ts.map
