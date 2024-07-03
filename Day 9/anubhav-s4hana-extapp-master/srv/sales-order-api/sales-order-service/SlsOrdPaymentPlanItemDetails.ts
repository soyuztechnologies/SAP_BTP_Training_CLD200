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
import type { SlsOrdPaymentPlanItemDetailsApi } from './SlsOrdPaymentPlanItemDetailsApi';
import { SalesOrder, SalesOrderType } from './SalesOrder';

/**
 * This class represents the entity "A_SlsOrdPaymentPlanItemDetails" of service "API_SALES_ORDER_SRV".
 */
export class SlsOrdPaymentPlanItemDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SlsOrdPaymentPlanItemDetailsType<T>
{
  /**
   * Technical entity name for SlsOrdPaymentPlanItemDetails.
   */
  static _entityName = 'A_SlsOrdPaymentPlanItemDetails';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
  /**
   * All key fields of the SlsOrdPaymentPlanItemDetails entity
   */
  static _keys = ['SalesOrder', 'PaymentPlanItem'];
  /**
   * Sales Order.
   * Maximum length: 10.
   */
  salesOrder!: DeserializedType<T, 'Edm.String'>;
  /**
   * Item for billing plan/invoice plan/payment cards.
   * Maximum length: 6.
   */
  paymentPlanItem!: DeserializedType<T, 'Edm.String'>;
  /**
   * Billing Plan Number / Invoicing Plan Number.
   * Maximum length: 10.
   * @nullable
   */
  paymentPlan?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Payment: Payment Type.
   * Maximum length: 4.
   * @nullable
   */
  electronicPaymentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Payment: Account Number.
   * Maximum length: 25.
   * @nullable
   */
  electronicPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Payment: Valid from.
   * @nullable
   */
  ePaytValidityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Electronic Payment: Valid to.
   * @nullable
   */
  ePaytValidityEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Electronic Payment: Name of Account Holder.
   * Maximum length: 40.
   * @nullable
   */
  electronicPaymentHolderName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Payment: Authorized Amount.
   * @nullable
   */
  authorizedAmountInAuthznCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Currency Key.
   * Maximum length: 5.
   * @nullable
   */
  authorizationCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Payment: Authorization Number.
   * Maximum length: 10.
   * @nullable
   */
  authorizationByDigitalPaytSrvc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Payment: Authorization Reference Code.
   * Maximum length: 15.
   * @nullable
   */
  authorizationByAcquirer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Payment: Authorization Date.
   * @nullable
   */
  authorizationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Electronic Payment: Authorization Time.
   * @nullable
   */
  authorizationTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * Payment cards: Result text.
   * Maximum length: 40.
   * @nullable
   */
  authorizationStatusName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Token for Digital Payment Integration in SD.
   * Maximum length: 25.
   * @nullable
   */
  ePaytByDigitalPaymentSrvc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Payment: Call Status.
   * Maximum length: 1.
   * @nullable
   */
  electronicPaymentCallStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Payment: Response to Authorization Checks.
   * Maximum length: 1.
   * @nullable
   */
  ePaytAuthorizationResult?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Payment: Amount to Be Authorized.
   * @nullable
   */
  ePaytToBeAuthorizedAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Electronic Payment: Authorization Expired.
   * @nullable
   */
  ePaytAuthorizationIsExpired?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Electronic Payment: Amount Changed.
   * @nullable
   */
  ePaytAmountIsChanged?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Electronic Payment: Preauthorization.
   * @nullable
   */
  preauthorizationIsRequested?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Payment Service Provider for Digital Payments.
   * Maximum length: 4.
   * @nullable
   */
  paymentServiceProvider?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Digital Payments: Payment ID from Payment Service Provider.
   * Maximum length: 40.
   * @nullable
   */
  paymentByPaymentServicePrvdr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * SAP Digital Payments: Transaction ID of PSP.
   * Maximum length: 40.
   * @nullable
   */
  transactionByPaytSrvcPrvdr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Payment: Merchant ID at Clearing House.
   * Maximum length: 15.
   * @nullable
   */
  merchantByClearingHouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unique identifier of a previous successful authorization.
   * Maximum length: 44.
   * @nullable
   */
  paymentCardAuthznRelationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Value to be billed/calc. on date in billing/invoice plan.
   * @nullable
   */
  maximumToBeAuthorizedAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Higher-level payment card plan number for billing.
   * Maximum length: 10.
   * @nullable
   */
  paytPlnForAuthorizationItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Higher-level item in billing plan.
   * Maximum length: 6.
   * @nullable
   */
  paytPlnItmForAuthorizationItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrder} entity.
   */
  toSalesOrder?: SalesOrder<T> | null;

  constructor(readonly _entityApi: SlsOrdPaymentPlanItemDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface SlsOrdPaymentPlanItemDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  salesOrder: DeserializedType<T, 'Edm.String'>;
  paymentPlanItem: DeserializedType<T, 'Edm.String'>;
  paymentPlan?: DeserializedType<T, 'Edm.String'> | null;
  electronicPaymentType?: DeserializedType<T, 'Edm.String'> | null;
  electronicPayment?: DeserializedType<T, 'Edm.String'> | null;
  ePaytValidityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  ePaytValidityEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  electronicPaymentHolderName?: DeserializedType<T, 'Edm.String'> | null;
  authorizedAmountInAuthznCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  authorizationCurrency?: DeserializedType<T, 'Edm.String'> | null;
  authorizationByDigitalPaytSrvc?: DeserializedType<T, 'Edm.String'> | null;
  authorizationByAcquirer?: DeserializedType<T, 'Edm.String'> | null;
  authorizationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  authorizationTime?: DeserializedType<T, 'Edm.Time'> | null;
  authorizationStatusName?: DeserializedType<T, 'Edm.String'> | null;
  ePaytByDigitalPaymentSrvc?: DeserializedType<T, 'Edm.String'> | null;
  electronicPaymentCallStatus?: DeserializedType<T, 'Edm.String'> | null;
  ePaytAuthorizationResult?: DeserializedType<T, 'Edm.String'> | null;
  ePaytToBeAuthorizedAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  ePaytAuthorizationIsExpired?: DeserializedType<T, 'Edm.Boolean'> | null;
  ePaytAmountIsChanged?: DeserializedType<T, 'Edm.Boolean'> | null;
  preauthorizationIsRequested?: DeserializedType<T, 'Edm.Boolean'> | null;
  paymentServiceProvider?: DeserializedType<T, 'Edm.String'> | null;
  paymentByPaymentServicePrvdr?: DeserializedType<T, 'Edm.String'> | null;
  transactionByPaytSrvcPrvdr?: DeserializedType<T, 'Edm.String'> | null;
  merchantByClearingHouse?: DeserializedType<T, 'Edm.String'> | null;
  paymentCardAuthznRelationId?: DeserializedType<T, 'Edm.String'> | null;
  maximumToBeAuthorizedAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  paytPlnForAuthorizationItem?: DeserializedType<T, 'Edm.String'> | null;
  paytPlnItmForAuthorizationItem?: DeserializedType<T, 'Edm.String'> | null;
  toSalesOrder?: SalesOrderType<T> | null;
}
