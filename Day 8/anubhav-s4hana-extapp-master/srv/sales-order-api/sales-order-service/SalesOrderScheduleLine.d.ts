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
import type { SalesOrderScheduleLineApi } from './SalesOrderScheduleLineApi';
/**
 * This class represents the entity "A_SalesOrderScheduleLine" of service "API_SALES_ORDER_SRV".
 */
export declare class SalesOrderScheduleLine<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOrderScheduleLineType<T>
{
  readonly _entityApi: SalesOrderScheduleLineApi<T>;
  /**
   * Technical entity name for SalesOrderScheduleLine.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the SalesOrderScheduleLine entity
   */
  static _keys: string[];
  /**
   * Sales Document.
   * Maximum length: 10.
   */
  salesOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Document Item.
   * Maximum length: 6.
   */
  salesOrderItem: DeserializedType<T, 'Edm.String'>;
  /**
   * Schedule Line Number.
   * Maximum length: 4.
   */
  scheduleLine: DeserializedType<T, 'Edm.String'>;
  /**
   * Requested Delivery Date.
   * @nullable
   */
  requestedDeliveryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Confirmed Delivery Date.
   * @nullable
   */
  confirmedDeliveryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Sales Unit.
   * Maximum length: 3.
   * @nullable
   */
  orderQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * SAP Unit Code for Order Quantity.
   * Maximum length: 3.
   * @nullable
   */
  orderQuantitySapUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ISO Unit Code for Order Quantity.
   * Maximum length: 3.
   * @nullable
   */
  orderQuantityIsoUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Quantity in Sales Units.
   * @nullable
   */
  scheduleLineOrderQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Confirmed Quantity.
   * @nullable
   */
  confdOrderQtyByMatlAvailCheck?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Delivered Quantity.
   * @nullable
   */
  deliveredQtyInOrderQtyUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Open Confirmed Delivery Quantity.
   * @nullable
   */
  openConfdDelivQtyInOrdQtyUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Corrected quantity in sales unit.
   * @nullable
   */
  correctedQtyInOrderQtyUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Schedule Line Blocked for Delivery.
   * Maximum length: 2.
   * @nullable
   */
  delivBlockReasonForSchedLine?: DeserializedType<T, 'Edm.String'> | null;
  constructor(_entityApi: SalesOrderScheduleLineApi<T>);
}
export interface SalesOrderScheduleLineType<
  T extends DeSerializers = DefaultDeSerializers
> {
  salesOrder: DeserializedType<T, 'Edm.String'>;
  salesOrderItem: DeserializedType<T, 'Edm.String'>;
  scheduleLine: DeserializedType<T, 'Edm.String'>;
  requestedDeliveryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  confirmedDeliveryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  orderQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  orderQuantitySapUnit?: DeserializedType<T, 'Edm.String'> | null;
  orderQuantityIsoUnit?: DeserializedType<T, 'Edm.String'> | null;
  scheduleLineOrderQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  confdOrderQtyByMatlAvailCheck?: DeserializedType<T, 'Edm.Decimal'> | null;
  deliveredQtyInOrderQtyUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  openConfdDelivQtyInOrdQtyUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  correctedQtyInOrderQtyUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  delivBlockReasonForSchedLine?: DeserializedType<T, 'Edm.String'> | null;
}
//# sourceMappingURL=SalesOrderScheduleLine.d.ts.map
