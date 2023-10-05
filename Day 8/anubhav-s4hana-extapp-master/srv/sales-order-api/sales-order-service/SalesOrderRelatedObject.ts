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
import type { SalesOrderRelatedObjectApi } from './SalesOrderRelatedObjectApi';
import { SalesOrder, SalesOrderType } from './SalesOrder';

/**
 * This class represents the entity "A_SalesOrderRelatedObject" of service "API_SALES_ORDER_SRV".
 */
export class SalesOrderRelatedObject<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOrderRelatedObjectType<T>
{
  /**
   * Technical entity name for SalesOrderRelatedObject.
   */
  static _entityName = 'A_SalesOrderRelatedObject';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
  /**
   * All key fields of the SalesOrderRelatedObject entity
   */
  static _keys = ['SalesOrder', 'SDDocRelatedObjectSequenceNmbr'];
  /**
   * Sales Order.
   * Maximum length: 10.
   */
  salesOrder!: DeserializedType<T, 'Edm.String'>;
  /**
   * Sequence Number of the Related Object of an SD Document.
   * Maximum length: 4.
   */
  sdDocRelatedObjectSequenceNmbr!: DeserializedType<T, 'Edm.String'>;
  /**
   * Type of the Related Object of an SD Document.
   * Maximum length: 5.
   * @nullable
   */
  sdDocumentRelatedObjectType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * System of the Related Object of an SD Document.
   * Maximum length: 60.
   * @nullable
   */
  sdDocRelatedObjectSystem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference of the Related Object of an SD Document.
   * Maximum length: 60.
   * @nullable
   */
  sdDocRelatedObjectReference1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference of the Related Object of an SD Document.
   * Maximum length: 60.
   * @nullable
   */
  sdDocRelatedObjectReference2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrder} entity.
   */
  toSalesOrder?: SalesOrder<T> | null;

  constructor(readonly _entityApi: SalesOrderRelatedObjectApi<T>) {
    super(_entityApi);
  }
}

export interface SalesOrderRelatedObjectType<
  T extends DeSerializers = DefaultDeSerializers
> {
  salesOrder: DeserializedType<T, 'Edm.String'>;
  sdDocRelatedObjectSequenceNmbr: DeserializedType<T, 'Edm.String'>;
  sdDocumentRelatedObjectType?: DeserializedType<T, 'Edm.String'> | null;
  sdDocRelatedObjectSystem?: DeserializedType<T, 'Edm.String'> | null;
  sdDocRelatedObjectReference1?: DeserializedType<T, 'Edm.String'> | null;
  sdDocRelatedObjectReference2?: DeserializedType<T, 'Edm.String'> | null;
  toSalesOrder?: SalesOrderType<T> | null;
}
