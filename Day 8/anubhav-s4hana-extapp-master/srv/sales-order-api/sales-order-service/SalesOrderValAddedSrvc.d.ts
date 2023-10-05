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
import type { SalesOrderValAddedSrvcApi } from './SalesOrderValAddedSrvcApi';
/**
 * This class represents the entity "A_SalesOrderValAddedSrvc" of service "API_SALES_ORDER_SRV".
 */
export declare class SalesOrderValAddedSrvc<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOrderValAddedSrvcType<T>
{
  readonly _entityApi: SalesOrderValAddedSrvcApi<T>;
  /**
   * Technical entity name for SalesOrderValAddedSrvc.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the SalesOrderValAddedSrvc entity
   */
  static _keys: string[];
  /**
   * VAS Service Types.
   * Maximum length: 2.
   */
  valueAddedServiceType: DeserializedType<T, 'Edm.String'>;
  /**
   * VAS Sub Services.
   * Maximum length: 5.
   */
  valueAddedSubServiceType: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Number of Reference Document.
   * Maximum length: 10.
   */
  salesOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Item number of the reference item.
   * Maximum length: 6.
   */
  salesOrderItem: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Number.
   * Maximum length: 10.
   * @nullable
   */
  valAddedSrvcTransactionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Group.
   * Maximum length: 5.
   * @nullable
   */
  valAddedSrvcItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * Maximum length: 5.
   * @nullable
   */
  valAddedSrvcItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * VAS Material Number.
   * Maximum length: 40.
   * @nullable
   */
  valueAddedServiceProduct?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requirement Relevancy Flag for VAS Material.
   * @nullable
   */
  valAddedSrvcHasToBeOrdered?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * VAS Increment.
   * Maximum length: 4.
   * @nullable
   */
  valAddedSrvcIncrement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * VAS Charge Codes.
   * Maximum length: 3.
   * @nullable
   */
  valueAddedServiceChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Manual Entry Indicator.
   * Maximum length: 1.
   * @nullable
   */
  valAddedSrvcIsCreatedManually?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * VAS Item Number in SD.
   * Maximum length: 6.
   * @nullable
   */
  valAddedSrvcItemNumberInSd?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Procurement Relevant for VAS Material.
   * @nullable
   */
  valAddedSrvcIsRlvtForProcmt?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * VAS Field 1 for Free Use by Customer.
   * Maximum length: 20.
   * @nullable
   */
  valueAddedServiceText1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * VAS Field 2 for Free Use by Customer.
   * Maximum length: 20.
   * @nullable
   */
  valueAddedServiceText2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * VAS Field 3 for Free Use by Customer.
   * Maximum length: 20.
   * @nullable
   */
  valueAddedServiceText3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Value Added Service Long Text.
   * Maximum length: 132.
   * @nullable
   */
  valueAddedServiceLongText?: DeserializedType<T, 'Edm.String'> | null;
  constructor(_entityApi: SalesOrderValAddedSrvcApi<T>);
}
export interface SalesOrderValAddedSrvcType<
  T extends DeSerializers = DefaultDeSerializers
> {
  valueAddedServiceType: DeserializedType<T, 'Edm.String'>;
  valueAddedSubServiceType: DeserializedType<T, 'Edm.String'>;
  salesOrder: DeserializedType<T, 'Edm.String'>;
  salesOrderItem: DeserializedType<T, 'Edm.String'>;
  valAddedSrvcTransactionNumber?: DeserializedType<T, 'Edm.String'> | null;
  valAddedSrvcItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  valAddedSrvcItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  valueAddedServiceProduct?: DeserializedType<T, 'Edm.String'> | null;
  valAddedSrvcHasToBeOrdered?: DeserializedType<T, 'Edm.Boolean'> | null;
  valAddedSrvcIncrement?: DeserializedType<T, 'Edm.String'> | null;
  valueAddedServiceChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  valAddedSrvcIsCreatedManually?: DeserializedType<T, 'Edm.String'> | null;
  valAddedSrvcItemNumberInSd?: DeserializedType<T, 'Edm.String'> | null;
  valAddedSrvcIsRlvtForProcmt?: DeserializedType<T, 'Edm.Boolean'> | null;
  valueAddedServiceText1?: DeserializedType<T, 'Edm.String'> | null;
  valueAddedServiceText2?: DeserializedType<T, 'Edm.String'> | null;
  valueAddedServiceText3?: DeserializedType<T, 'Edm.String'> | null;
  valueAddedServiceLongText?: DeserializedType<T, 'Edm.String'> | null;
}
//# sourceMappingURL=SalesOrderValAddedSrvc.d.ts.map
