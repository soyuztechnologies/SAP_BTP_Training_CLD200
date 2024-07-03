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
import type { SalesOrderHeaderPartnerApi } from './SalesOrderHeaderPartnerApi';
import {
  SalesOrderPartnerAddress,
  SalesOrderPartnerAddressType
} from './SalesOrderPartnerAddress';
import { SalesOrder, SalesOrderType } from './SalesOrder';

/**
 * This class represents the entity "A_SalesOrderHeaderPartner" of service "API_SALES_ORDER_SRV".
 */
export class SalesOrderHeaderPartner<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOrderHeaderPartnerType<T>
{
  /**
   * Technical entity name for SalesOrderHeaderPartner.
   */
  static _entityName = 'A_SalesOrderHeaderPartner';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
  /**
   * All key fields of the SalesOrderHeaderPartner entity
   */
  static _keys = ['SalesOrder', 'PartnerFunction'];
  /**
   * Sales Order.
   * Maximum length: 10.
   */
  salesOrder!: DeserializedType<T, 'Edm.String'>;
  /**
   * Partner Function.
   * Maximum length: 2.
   */
  partnerFunction!: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Number.
   * Maximum length: 10.
   * @nullable
   */
  customer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Number of Supplier.
   * Maximum length: 10.
   * @nullable
   */
  supplier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Personnel Number.
   * Maximum length: 8.
   * @nullable
   */
  personnel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number of Contact Person.
   * Maximum length: 10.
   * @nullable
   */
  contactPerson?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Number.
   * Maximum length: 10.
   * @nullable
   */
  addressId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * VAT Registration Number.
   * Maximum length: 20.
   * @nullable
   */
  vatRegistration?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link SalesOrderPartnerAddress} entity.
   */
  toAddress!: SalesOrderPartnerAddress<T>[];
  /**
   * One-to-one navigation property to the {@link SalesOrder} entity.
   */
  toSalesOrder?: SalesOrder<T> | null;

  constructor(readonly _entityApi: SalesOrderHeaderPartnerApi<T>) {
    super(_entityApi);
  }
}

export interface SalesOrderHeaderPartnerType<
  T extends DeSerializers = DefaultDeSerializers
> {
  salesOrder: DeserializedType<T, 'Edm.String'>;
  partnerFunction: DeserializedType<T, 'Edm.String'>;
  customer?: DeserializedType<T, 'Edm.String'> | null;
  supplier?: DeserializedType<T, 'Edm.String'> | null;
  personnel?: DeserializedType<T, 'Edm.String'> | null;
  contactPerson?: DeserializedType<T, 'Edm.String'> | null;
  addressId?: DeserializedType<T, 'Edm.String'> | null;
  vatRegistration?: DeserializedType<T, 'Edm.String'> | null;
  toAddress: SalesOrderPartnerAddressType<T>[];
  toSalesOrder?: SalesOrderType<T> | null;
}
