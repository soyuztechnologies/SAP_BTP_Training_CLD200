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
import type { SalesOrderApi } from './SalesOrderApi';
import {
  SalesOrderBillingPlan,
  SalesOrderBillingPlanType
} from './SalesOrderBillingPlan';
import { SalesOrderItem, SalesOrderItemType } from './SalesOrderItem';
import {
  SalesOrderHeaderPartner,
  SalesOrderHeaderPartnerType
} from './SalesOrderHeaderPartner';
import {
  SlsOrdPaymentPlanItemDetails,
  SlsOrdPaymentPlanItemDetailsType
} from './SlsOrdPaymentPlanItemDetails';
import {
  SalesOrderPrecdgProcFlow,
  SalesOrderPrecdgProcFlowType
} from './SalesOrderPrecdgProcFlow';
import {
  SalesOrderHeaderPrElement,
  SalesOrderHeaderPrElementType
} from './SalesOrderHeaderPrElement';
import {
  SalesOrderRelatedObject,
  SalesOrderRelatedObjectType
} from './SalesOrderRelatedObject';
import {
  SalesOrderSubsqntProcFlow,
  SalesOrderSubsqntProcFlowType
} from './SalesOrderSubsqntProcFlow';
import { SalesOrderText, SalesOrderTextType } from './SalesOrderText';
/**
 * This class represents the entity "A_SalesOrder" of service "API_SALES_ORDER_SRV".
 */
export declare class SalesOrder<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesOrderType<T>
{
  readonly _entityApi: SalesOrderApi<T>;
  /**
   * Technical entity name for SalesOrder.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the SalesOrder entity
   */
  static _keys: string[];
  /**
   * Sales Order.
   * Maximum length: 10.
   */
  salesOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Order Type.
   * Maximum length: 4.
   * @nullable
   */
  salesOrderType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Organization.
   * Maximum length: 4.
   * @nullable
   */
  salesOrganization?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Channel.
   * Maximum length: 2.
   * @nullable
   */
  distributionChannel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Division.
   * Maximum length: 2.
   * @nullable
   */
  organizationDivision?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Group.
   * Maximum length: 3.
   * @nullable
   */
  salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Office.
   * Maximum length: 4.
   * @nullable
   */
  salesOffice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales District.
   * Maximum length: 6.
   * @nullable
   */
  salesDistrict?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sold-to Party.
   * Maximum length: 10.
   * @nullable
   */
  soldToParty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Record Created On.
   * @nullable
   */
  creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Name of Person Responsible for Creating the Object.
   * Maximum length: 12.
   * @nullable
   */
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Changed On.
   * @nullable
   */
  lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * External Business System ID.
   * Maximum length: 60.
   * @nullable
   */
  senderBusinessSystemName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Document ID.
   * Maximum length: 40.
   * @nullable
   */
  externalDocumentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun).
   * @nullable
   */
  lastChangeDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Timestamp for Revision of External Calls.
   * @nullable
   */
  externalDocLastChangeDateTime?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  /**
   * Customer Reference.
   * Maximum length: 35.
   * @nullable
   */
  purchaseOrderByCustomer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship-to Party's Customer Reference.
   * Maximum length: 35.
   * @nullable
   */
  purchaseOrderByShipToParty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Purchase Order Type.
   * Maximum length: 4.
   * @nullable
   */
  customerPurchaseOrderType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Reference Date.
   * @nullable
   */
  customerPurchaseOrderDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Document Date (Date Received/Sent).
   * @nullable
   */
  salesOrderDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Net Value of the Sales Order in Document Currency.
   * @nullable
   */
  totalNetAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Delivery Status (All Items).
   * Maximum length: 1.
   * @nullable
   */
  overallDeliveryStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Overall Block Status (Header).
   * Maximum length: 1.
   * @nullable
   */
  totalBlockStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order-Related Billing Status (All Items).
   * Maximum length: 1.
   * @nullable
   */
  overallOrdReltdBillgStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Status (All Items).
   * Maximum length: 1.
   * @nullable
   */
  overallSdDocReferenceStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * SD Document Currency.
   * Maximum length: 5.
   * @nullable
   */
  transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Reason (Reason for the Business Transaction).
   * Maximum length: 3.
   * @nullable
   */
  sdDocumentReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date for Pricing and Exchange Rate.
   * @nullable
   */
  pricingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Exchange Rate for Price Determination.
   * @nullable
   */
  priceDetnExchangeRate?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Billing Plan Number / Invoicing Plan Number.
   * Maximum length: 10.
   * @nullable
   */
  billingPlan?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Delivery Date.
   * @nullable
   */
  requestedDeliveryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Shipping Conditions.
   * Maximum length: 2.
   * @nullable
   */
  shippingCondition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Complete Delivery Defined for Each Sales Order?.
   * @nullable
   */
  completeDeliveryIsDefined?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Shipping Type.
   * Maximum length: 2.
   * @nullable
   */
  shippingType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Block in SD Document.
   * Maximum length: 2.
   * @nullable
   */
  headerBillingBlockReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Block (Document Header).
   * Maximum length: 2.
   * @nullable
   */
  deliveryBlockReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Date Rule.
   * Maximum length: 1.
   * @nullable
   */
  deliveryDateTypeRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incoterms (Part 1).
   * Maximum length: 3.
   * @nullable
   */
  incotermsClassification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incoterms (Part 2).
   * Maximum length: 28.
   * @nullable
   */
  incotermsTransferLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incoterms Location 1.
   * Maximum length: 70.
   * @nullable
   */
  incotermsLocation1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incoterms Location 2.
   * Maximum length: 70.
   * @nullable
   */
  incotermsLocation2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incoterms Version.
   * Maximum length: 4.
   * @nullable
   */
  incotermsVersion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Price Group.
   * Maximum length: 2.
   * @nullable
   */
  customerPriceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price List Type.
   * Maximum length: 2.
   * @nullable
   */
  priceListType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Terms of Payment Key.
   * Maximum length: 4.
   * @nullable
   */
  customerPaymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Method.
   * Maximum length: 1.
   * @nullable
   */
  paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Value Date.
   * @nullable
   */
  fixedValueDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Assignment Number.
   * Maximum length: 18.
   * @nullable
   */
  assignmentReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Number of Reference Document.
   * Maximum length: 10.
   * @nullable
   */
  referenceSdDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Category of Preceding SD Document.
   * Maximum length: 4.
   * @nullable
   */
  referenceSdDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Document Number.
   * Maximum length: 16.
   * @nullable
   */
  accountingDocExternalReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Assignment Group for Customer.
   * Maximum length: 2.
   * @nullable
   */
  customerAccountAssignmentGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate for Postings to Financial Accounting.
   * @nullable
   */
  accountingExchangeRate?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Customer Group.
   * Maximum length: 2.
   * @nullable
   */
  customerGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Group 1.
   * Maximum length: 3.
   * @nullable
   */
  additionalCustomerGroup1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Group 2.
   * Maximum length: 3.
   * @nullable
   */
  additionalCustomerGroup2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Group 3.
   * Maximum length: 3.
   * @nullable
   */
  additionalCustomerGroup3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Group 4.
   * Maximum length: 3.
   * @nullable
   */
  additionalCustomerGroup4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Group 5.
   * Maximum length: 3.
   * @nullable
   */
  additionalCustomerGroup5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Relevant for POD processing.
   * @nullable
   */
  slsDocIsRlvtForProofOfDeliv?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Alternative Tax Classification.
   * Maximum length: 1.
   * @nullable
   */
  customerTaxClassification1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Classification 2 for Customer.
   * Maximum length: 1.
   * @nullable
   */
  customerTaxClassification2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Classification 3 for Customer.
   * Maximum length: 1.
   * @nullable
   */
  customerTaxClassification3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Classification 4 for Customer.
   * Maximum length: 1.
   * @nullable
   */
  customerTaxClassification4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Classification 5 for Customer.
   * Maximum length: 1.
   * @nullable
   */
  customerTaxClassification5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Classification 6 for Customer.
   * Maximum length: 1.
   * @nullable
   */
  customerTaxClassification6?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Classification 7 for Customer.
   * Maximum length: 1.
   * @nullable
   */
  customerTaxClassification7?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Classification 8 for Customer.
   * Maximum length: 1.
   * @nullable
   */
  customerTaxClassification8?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Classification 9 for Customer.
   * Maximum length: 1.
   * @nullable
   */
  customerTaxClassification9?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Departure Country/Region.
   * Maximum length: 3.
   * @nullable
   */
  taxDepartureCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Destination Country/Region.
   * Maximum length: 3.
   * @nullable
   */
  vatRegistrationCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approval Request Reason ID.
   * Maximum length: 4.
   * @nullable
   */
  salesOrderApprovalReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Approval Status.
   * Maximum length: 1.
   * @nullable
   */
  salesDocApprovalStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Overall Processing Status (Header/All Items).
   * Maximum length: 1.
   * @nullable
   */
  overallSdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Overall Status of Credit Checks.
   * Maximum length: 1.
   * @nullable
   */
  totalCreditCheckStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Overall Delivery Status (All Items).
   * Maximum length: 1.
   * @nullable
   */
  overallTotalDeliveryStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rejection Status (All Items).
   * Maximum length: 1.
   * @nullable
   */
  overallSdDocumentRejectionSts?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Date.
   * @nullable
   */
  billingDocumentDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Contract Account Number.
   * Maximum length: 12.
   * @nullable
   */
  contractAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Additional Value Days.
   * Maximum length: 2.
   * @nullable
   */
  additionalValueDays?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase order number supplement.
   * Maximum length: 4.
   * @nullable
   */
  customerPurchaseOrderSuplmnt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date on which services are rendered.
   * @nullable
   */
  servicesRenderedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Cancellation Date.
   * @nullable
   */
  fashionCancelDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Customer Group 6.
   * Maximum length: 3.
   * @nullable
   */
  retailAdditionalCustomerGrp6?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Group 7.
   * Maximum length: 3.
   * @nullable
   */
  retailAdditionalCustomerGrp7?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Group 8.
   * Maximum length: 3.
   * @nullable
   */
  retailAdditionalCustomerGrp8?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Group 9.
   * Maximum length: 3.
   * @nullable
   */
  retailAdditionalCustomerGrp9?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Group 10.
   * Maximum length: 3.
   * @nullable
   */
  retailAdditionalCustomerGrp10?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrderBillingPlan} entity.
   */
  toBillingPlan?: SalesOrderBillingPlan<T> | null;
  /**
   * One-to-many navigation property to the {@link SalesOrderItem} entity.
   */
  toItem: SalesOrderItem<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderHeaderPartner} entity.
   */
  toPartner: SalesOrderHeaderPartner<T>[];
  /**
   * One-to-many navigation property to the {@link SlsOrdPaymentPlanItemDetails} entity.
   */
  toPaymentPlanItemDetails: SlsOrdPaymentPlanItemDetails<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderPrecdgProcFlow} entity.
   */
  toPrecedingProcFlowDoc: SalesOrderPrecdgProcFlow<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderHeaderPrElement} entity.
   */
  toPricingElement: SalesOrderHeaderPrElement<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderRelatedObject} entity.
   */
  toRelatedObject: SalesOrderRelatedObject<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderSubsqntProcFlow} entity.
   */
  toSubsequentProcFlowDoc: SalesOrderSubsqntProcFlow<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderText} entity.
   */
  toText: SalesOrderText<T>[];
  constructor(_entityApi: SalesOrderApi<T>);
}
export interface SalesOrderType<
  T extends DeSerializers = DefaultDeSerializers
> {
  salesOrder: DeserializedType<T, 'Edm.String'>;
  salesOrderType?: DeserializedType<T, 'Edm.String'> | null;
  salesOrganization?: DeserializedType<T, 'Edm.String'> | null;
  distributionChannel?: DeserializedType<T, 'Edm.String'> | null;
  organizationDivision?: DeserializedType<T, 'Edm.String'> | null;
  salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  salesOffice?: DeserializedType<T, 'Edm.String'> | null;
  salesDistrict?: DeserializedType<T, 'Edm.String'> | null;
  soldToParty?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  senderBusinessSystemName?: DeserializedType<T, 'Edm.String'> | null;
  externalDocumentId?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  externalDocLastChangeDateTime?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  purchaseOrderByCustomer?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderByShipToParty?: DeserializedType<T, 'Edm.String'> | null;
  customerPurchaseOrderType?: DeserializedType<T, 'Edm.String'> | null;
  customerPurchaseOrderDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  salesOrderDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  totalNetAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  overallDeliveryStatus?: DeserializedType<T, 'Edm.String'> | null;
  totalBlockStatus?: DeserializedType<T, 'Edm.String'> | null;
  overallOrdReltdBillgStatus?: DeserializedType<T, 'Edm.String'> | null;
  overallSdDocReferenceStatus?: DeserializedType<T, 'Edm.String'> | null;
  transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  sdDocumentReason?: DeserializedType<T, 'Edm.String'> | null;
  pricingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  priceDetnExchangeRate?: DeserializedType<T, 'Edm.Decimal'> | null;
  billingPlan?: DeserializedType<T, 'Edm.String'> | null;
  requestedDeliveryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  shippingCondition?: DeserializedType<T, 'Edm.String'> | null;
  completeDeliveryIsDefined?: DeserializedType<T, 'Edm.Boolean'> | null;
  shippingType?: DeserializedType<T, 'Edm.String'> | null;
  headerBillingBlockReason?: DeserializedType<T, 'Edm.String'> | null;
  deliveryBlockReason?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDateTypeRule?: DeserializedType<T, 'Edm.String'> | null;
  incotermsClassification?: DeserializedType<T, 'Edm.String'> | null;
  incotermsTransferLocation?: DeserializedType<T, 'Edm.String'> | null;
  incotermsLocation1?: DeserializedType<T, 'Edm.String'> | null;
  incotermsLocation2?: DeserializedType<T, 'Edm.String'> | null;
  incotermsVersion?: DeserializedType<T, 'Edm.String'> | null;
  customerPriceGroup?: DeserializedType<T, 'Edm.String'> | null;
  priceListType?: DeserializedType<T, 'Edm.String'> | null;
  customerPaymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  fixedValueDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  assignmentReference?: DeserializedType<T, 'Edm.String'> | null;
  referenceSdDocument?: DeserializedType<T, 'Edm.String'> | null;
  referenceSdDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
  accountingDocExternalReference?: DeserializedType<T, 'Edm.String'> | null;
  customerAccountAssignmentGroup?: DeserializedType<T, 'Edm.String'> | null;
  accountingExchangeRate?: DeserializedType<T, 'Edm.Decimal'> | null;
  customerGroup?: DeserializedType<T, 'Edm.String'> | null;
  additionalCustomerGroup1?: DeserializedType<T, 'Edm.String'> | null;
  additionalCustomerGroup2?: DeserializedType<T, 'Edm.String'> | null;
  additionalCustomerGroup3?: DeserializedType<T, 'Edm.String'> | null;
  additionalCustomerGroup4?: DeserializedType<T, 'Edm.String'> | null;
  additionalCustomerGroup5?: DeserializedType<T, 'Edm.String'> | null;
  slsDocIsRlvtForProofOfDeliv?: DeserializedType<T, 'Edm.Boolean'> | null;
  customerTaxClassification1?: DeserializedType<T, 'Edm.String'> | null;
  customerTaxClassification2?: DeserializedType<T, 'Edm.String'> | null;
  customerTaxClassification3?: DeserializedType<T, 'Edm.String'> | null;
  customerTaxClassification4?: DeserializedType<T, 'Edm.String'> | null;
  customerTaxClassification5?: DeserializedType<T, 'Edm.String'> | null;
  customerTaxClassification6?: DeserializedType<T, 'Edm.String'> | null;
  customerTaxClassification7?: DeserializedType<T, 'Edm.String'> | null;
  customerTaxClassification8?: DeserializedType<T, 'Edm.String'> | null;
  customerTaxClassification9?: DeserializedType<T, 'Edm.String'> | null;
  taxDepartureCountry?: DeserializedType<T, 'Edm.String'> | null;
  vatRegistrationCountry?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderApprovalReason?: DeserializedType<T, 'Edm.String'> | null;
  salesDocApprovalStatus?: DeserializedType<T, 'Edm.String'> | null;
  overallSdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
  totalCreditCheckStatus?: DeserializedType<T, 'Edm.String'> | null;
  overallTotalDeliveryStatus?: DeserializedType<T, 'Edm.String'> | null;
  overallSdDocumentRejectionSts?: DeserializedType<T, 'Edm.String'> | null;
  billingDocumentDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  contractAccount?: DeserializedType<T, 'Edm.String'> | null;
  additionalValueDays?: DeserializedType<T, 'Edm.String'> | null;
  customerPurchaseOrderSuplmnt?: DeserializedType<T, 'Edm.String'> | null;
  servicesRenderedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  fashionCancelDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  retailAdditionalCustomerGrp6?: DeserializedType<T, 'Edm.String'> | null;
  retailAdditionalCustomerGrp7?: DeserializedType<T, 'Edm.String'> | null;
  retailAdditionalCustomerGrp8?: DeserializedType<T, 'Edm.String'> | null;
  retailAdditionalCustomerGrp9?: DeserializedType<T, 'Edm.String'> | null;
  retailAdditionalCustomerGrp10?: DeserializedType<T, 'Edm.String'> | null;
  toBillingPlan?: SalesOrderBillingPlanType<T> | null;
  toItem: SalesOrderItemType<T>[];
  toPartner: SalesOrderHeaderPartnerType<T>[];
  toPaymentPlanItemDetails: SlsOrdPaymentPlanItemDetailsType<T>[];
  toPrecedingProcFlowDoc: SalesOrderPrecdgProcFlowType<T>[];
  toPricingElement: SalesOrderHeaderPrElementType<T>[];
  toRelatedObject: SalesOrderRelatedObjectType<T>[];
  toSubsequentProcFlowDoc: SalesOrderSubsqntProcFlowType<T>[];
  toText: SalesOrderTextType<T>[];
}
//# sourceMappingURL=SalesOrder.d.ts.map
