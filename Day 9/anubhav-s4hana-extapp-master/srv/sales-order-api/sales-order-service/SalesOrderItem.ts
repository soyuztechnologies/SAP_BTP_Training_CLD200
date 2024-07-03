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
import type { SalesOrderItemApi } from './SalesOrderItemApi';
import {
  SalesOrderItemBillingPlan,
  SalesOrderItemBillingPlanType
} from './SalesOrderItemBillingPlan';
import {
  SalesOrderItemPartner,
  SalesOrderItemPartnerType
} from './SalesOrderItemPartner';
import {
  SalesOrderItmPrecdgProcFlow,
  SalesOrderItmPrecdgProcFlowType
} from './SalesOrderItmPrecdgProcFlow';
import {
  SalesOrderItemPrElement,
  SalesOrderItemPrElementType
} from './SalesOrderItemPrElement';
import {
  SalesOrderItemRelatedObject,
  SalesOrderItemRelatedObjectType
} from './SalesOrderItemRelatedObject';
import { SalesOrder, SalesOrderType } from './SalesOrder';
import {
  SalesOrderScheduleLine,
  SalesOrderScheduleLineType
} from './SalesOrderScheduleLine';
import {
  SalesOrderItmSubsqntProcFlow,
  SalesOrderItmSubsqntProcFlowType
} from './SalesOrderItmSubsqntProcFlow';
import {
  SalesOrderItemText,
  SalesOrderItemTextType
} from './SalesOrderItemText';
import {
  SalesOrderValAddedSrvc,
  SalesOrderValAddedSrvcType
} from './SalesOrderValAddedSrvc';

/**
 * This class represents the entity "A_SalesOrderItem" of service "API_SALES_ORDER_SRV".
 */
export class SalesOrderItem<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesOrderItemType<T>
{
  /**
   * Technical entity name for SalesOrderItem.
   */
  static _entityName = 'A_SalesOrderItem';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
  /**
   * All key fields of the SalesOrderItem entity
   */
  static _keys = ['SalesOrder', 'SalesOrderItem'];
  /**
   * Sales Order.
   * Maximum length: 10.
   */
  salesOrder!: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Order Item.
   * Maximum length: 6.
   */
  salesOrderItem!: DeserializedType<T, 'Edm.String'>;
  /**
   * Higher-Level Item in Bill of Material Structures.
   * Maximum length: 6.
   * @nullable
   */
  higherLevelItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ID for higher-level item usage.
   * Maximum length: 1.
   * @nullable
   */
  higherLevelItemUsage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Document Item Category.
   * Maximum length: 4.
   * @nullable
   */
  salesOrderItemCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Short text for sales order item.
   * Maximum length: 40.
   * @nullable
   */
  salesOrderItemText?: DeserializedType<T, 'Edm.String'> | null;
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
   * Item Number of the Underlying Purchase Order.
   * Maximum length: 6.
   * @nullable
   */
  underlyingPurchaseOrderItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Item ID.
   * Maximum length: 40.
   * @nullable
   */
  externalItemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Number.
   * Maximum length: 40.
   * @nullable
   */
  material?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Number Used by Customer.
   * Maximum length: 35.
   * @nullable
   */
  materialByCustomer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date for Pricing and Exchange Rate.
   * @nullable
   */
  pricingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Pricing Reference Material.
   * Maximum length: 40.
   * @nullable
   */
  pricingReferenceMaterial?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Plan Number / Invoicing Plan Number.
   * Maximum length: 10.
   * @nullable
   */
  billingPlan?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Quantity.
   * @nullable
   */
  requestedQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Unit of the Requested Quantity.
   * Maximum length: 3.
   * @nullable
   */
  requestedQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * SAP Unit Code for Requested Quantity.
   * Maximum length: 3.
   * @nullable
   */
  requestedQuantitySapUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ISO Unit Code for Requested Quantity.
   * Maximum length: 3.
   * @nullable
   */
  requestedQuantityIsoUnit?: DeserializedType<T, 'Edm.String'> | null;
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
   * Cumulative Confirmed Quantity in Sales Unit.
   * @nullable
   */
  confdDelivQtyInOrderQtyUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Gross Weight of the Item.
   * @nullable
   */
  itemGrossWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Net Weight of the Item.
   * @nullable
   */
  itemNetWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Unit of Weight.
   * Maximum length: 3.
   * @nullable
   */
  itemWeightUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * SAP Unit Code for Item Weight.
   * Maximum length: 3.
   * @nullable
   */
  itemWeightSapUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ISO Unit Code for Item Weight.
   * Maximum length: 3.
   * @nullable
   */
  itemWeightIsoUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Volume of the item.
   * @nullable
   */
  itemVolume?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Volume Unit.
   * Maximum length: 3.
   * @nullable
   */
  itemVolumeUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * SAP Unit Code for Item Volume.
   * Maximum length: 3.
   * @nullable
   */
  itemVolumeSapUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ISO Unit Code for Item Volume.
   * Maximum length: 3.
   * @nullable
   */
  itemVolumeIsoUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * SD Document Currency.
   * Maximum length: 5.
   * @nullable
   */
  transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Net Value of the Order Item in Document Currency.
   * @nullable
   */
  netAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Overall Reference Status (Item).
   * Maximum length: 1.
   * @nullable
   */
  totalSdDocReferenceStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Status (Item).
   * Maximum length: 1.
   * @nullable
   */
  sdDocReferenceStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason for material substitution.
   * Maximum length: 4.
   * @nullable
   */
  materialSubstitutionReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Group.
   * Maximum length: 9.
   * @nullable
   */
  materialGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Price Group.
   * Maximum length: 2.
   * @nullable
   */
  materialPricingGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Group 1.
   * Maximum length: 3.
   * @nullable
   */
  additionalMaterialGroup1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Group 2.
   * Maximum length: 3.
   * @nullable
   */
  additionalMaterialGroup2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Group 3.
   * Maximum length: 3.
   * @nullable
   */
  additionalMaterialGroup3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Group 4.
   * Maximum length: 3.
   * @nullable
   */
  additionalMaterialGroup4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Group 5.
   * Maximum length: 3.
   * @nullable
   */
  additionalMaterialGroup5?: DeserializedType<T, 'Edm.String'> | null;
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
   * Date on which services are rendered.
   * @nullable
   */
  servicesRenderedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Batch Number.
   * Maximum length: 10.
   * @nullable
   */
  batch?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plant (Own or External).
   * Maximum length: 4.
   * @nullable
   */
  productionPlant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Original Plant in Plant Substitution.
   * Maximum length: 4.
   * @nullable
   */
  originalPlant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Substitution Status for Alternative-Based Confirmation (ABC).
   * Maximum length: 1.
   * @nullable
   */
  altvBsdConfSubstitutionStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Storage Location.
   * Maximum length: 4.
   * @nullable
   */
  storageLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Group (Items are delivered together).
   * Maximum length: 3.
   * @nullable
   */
  deliveryGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Point / Receiving Point.
   * Maximum length: 4.
   * @nullable
   */
  shippingPoint?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Type.
   * Maximum length: 2.
   * @nullable
   */
  shippingType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Priority.
   * Maximum length: 2.
   * @nullable
   */
  deliveryPriority?: DeserializedType<T, 'Edm.String'> | null;
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
   * Tax Amount in Document Currency.
   * @nullable
   */
  taxAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Tax Classification for Material.
   * Maximum length: 1.
   * @nullable
   */
  productTaxClassification1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Classification for Material.
   * Maximum length: 1.
   * @nullable
   */
  productTaxClassification2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Classification for Material.
   * Maximum length: 1.
   * @nullable
   */
  productTaxClassification3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Classification for Material.
   * Maximum length: 1.
   * @nullable
   */
  productTaxClassification4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Classification for Material.
   * Maximum length: 1.
   * @nullable
   */
  productTaxClassification5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Classification for Material.
   * Maximum length: 1.
   * @nullable
   */
  productTaxClassification6?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Classification for Material.
   * Maximum length: 1.
   * @nullable
   */
  productTaxClassification7?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Classification for Material.
   * Maximum length: 1.
   * @nullable
   */
  productTaxClassification8?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Classification for Material.
   * Maximum length: 1.
   * @nullable
   */
  productTaxClassification9?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Assignment Group for Material.
   * Maximum length: 2.
   * @nullable
   */
  matlAccountAssignmentGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost in Document Currency.
   * @nullable
   */
  costAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Terms of Payment Key.
   * Maximum length: 4.
   * @nullable
   */
  customerPaymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Value Date.
   * @nullable
   */
  fixedValueDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Customer Group.
   * Maximum length: 2.
   * @nullable
   */
  customerGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason for Rejection of Sales Documents.
   * Maximum length: 2.
   * @nullable
   */
  salesDocumentRjcnReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Block for Item.
   * Maximum length: 2.
   * @nullable
   */
  itemBillingBlockReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Relevant for POD processing.
   * @nullable
   */
  slsDocIsRlvtForProofOfDeliv?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Work Breakdown Structure Element (WBS Element).
   * Maximum length: 24.
   * @nullable
   */
  wbsElement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Profit Center.
   * Maximum length: 10.
   * @nullable
   */
  profitCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate for Postings to Financial Accounting.
   * @nullable
   */
  accountingExchangeRate?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Document Number of Reference Document.
   * Maximum length: 10.
   * @nullable
   */
  referenceSdDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item number of the reference item.
   * Maximum length: 6.
   * @nullable
   */
  referenceSdDocumentItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Overall Processing Status (Item).
   * Maximum length: 1.
   * @nullable
   */
  sdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Status (Item).
   * Maximum length: 1.
   * @nullable
   */
  deliveryStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order-Related Billing Status (Item).
   * Maximum length: 1.
   * @nullable
   */
  orderRelatedBillingStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Season Year.
   * Maximum length: 4.
   * @nullable
   */
  productSeasonYear?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Season.
   * Maximum length: 10.
   * @nullable
   */
  productSeason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fashion Collection.
   * Maximum length: 10.
   * @nullable
   */
  productCollection?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fashion Theme.
   * Maximum length: 10.
   * @nullable
   */
  productTheme?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Season Completeness Indicator.
   * Maximum length: 1.
   * @nullable
   */
  seasonCompletenessStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cancellation Date.
   * @nullable
   */
  fashionCancelDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Characteristic Value 1.
   * Maximum length: 18.
   * @nullable
   */
  productCharacteristic1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Characteristic Value 2.
   * Maximum length: 18.
   * @nullable
   */
  productCharacteristic2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Characteristic Value 3.
   * Maximum length: 18.
   * @nullable
   */
  productCharacteristic3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PSST Group.
   * Maximum length: 10.
   * @nullable
   */
  shippingGroupNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PSST Grouping Rule.
   * Maximum length: 4.
   * @nullable
   */
  shippingGroupRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cross-Plant Configurable Material.
   * Maximum length: 40.
   * @nullable
   */
  crossPlantConfigurableProduct?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Category.
   * Maximum length: 2.
   * @nullable
   */
  productCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requirement Segment.
   * Maximum length: 40.
   * @nullable
   */
  requirementSegment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrderItemBillingPlan} entity.
   */
  toBillingPlan?: SalesOrderItemBillingPlan<T> | null;
  /**
   * One-to-many navigation property to the {@link SalesOrderItemPartner} entity.
   */
  toPartner!: SalesOrderItemPartner<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderItmPrecdgProcFlow} entity.
   */
  toPrecedingProcFlowDocItem!: SalesOrderItmPrecdgProcFlow<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderItemPrElement} entity.
   */
  toPricingElement!: SalesOrderItemPrElement<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderItemRelatedObject} entity.
   */
  toRelatedObject!: SalesOrderItemRelatedObject<T>[];
  /**
   * One-to-one navigation property to the {@link SalesOrder} entity.
   */
  toSalesOrder?: SalesOrder<T> | null;
  /**
   * One-to-many navigation property to the {@link SalesOrderScheduleLine} entity.
   */
  toScheduleLine!: SalesOrderScheduleLine<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderItmSubsqntProcFlow} entity.
   */
  toSubsequentProcFlowDocItem!: SalesOrderItmSubsqntProcFlow<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderItemText} entity.
   */
  toText!: SalesOrderItemText<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderValAddedSrvc} entity.
   */
  toValueAddedService!: SalesOrderValAddedSrvc<T>[];

  constructor(readonly _entityApi: SalesOrderItemApi<T>) {
    super(_entityApi);
  }
}

export interface SalesOrderItemType<
  T extends DeSerializers = DefaultDeSerializers
> {
  salesOrder: DeserializedType<T, 'Edm.String'>;
  salesOrderItem: DeserializedType<T, 'Edm.String'>;
  higherLevelItem?: DeserializedType<T, 'Edm.String'> | null;
  higherLevelItemUsage?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderItemCategory?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderItemText?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderByCustomer?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderByShipToParty?: DeserializedType<T, 'Edm.String'> | null;
  underlyingPurchaseOrderItem?: DeserializedType<T, 'Edm.String'> | null;
  externalItemId?: DeserializedType<T, 'Edm.String'> | null;
  material?: DeserializedType<T, 'Edm.String'> | null;
  materialByCustomer?: DeserializedType<T, 'Edm.String'> | null;
  pricingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  pricingReferenceMaterial?: DeserializedType<T, 'Edm.String'> | null;
  billingPlan?: DeserializedType<T, 'Edm.String'> | null;
  requestedQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  requestedQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  requestedQuantitySapUnit?: DeserializedType<T, 'Edm.String'> | null;
  requestedQuantityIsoUnit?: DeserializedType<T, 'Edm.String'> | null;
  orderQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  orderQuantitySapUnit?: DeserializedType<T, 'Edm.String'> | null;
  orderQuantityIsoUnit?: DeserializedType<T, 'Edm.String'> | null;
  confdDelivQtyInOrderQtyUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  itemGrossWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  itemNetWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  itemWeightUnit?: DeserializedType<T, 'Edm.String'> | null;
  itemWeightSapUnit?: DeserializedType<T, 'Edm.String'> | null;
  itemWeightIsoUnit?: DeserializedType<T, 'Edm.String'> | null;
  itemVolume?: DeserializedType<T, 'Edm.Decimal'> | null;
  itemVolumeUnit?: DeserializedType<T, 'Edm.String'> | null;
  itemVolumeSapUnit?: DeserializedType<T, 'Edm.String'> | null;
  itemVolumeIsoUnit?: DeserializedType<T, 'Edm.String'> | null;
  transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  netAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  totalSdDocReferenceStatus?: DeserializedType<T, 'Edm.String'> | null;
  sdDocReferenceStatus?: DeserializedType<T, 'Edm.String'> | null;
  materialSubstitutionReason?: DeserializedType<T, 'Edm.String'> | null;
  materialGroup?: DeserializedType<T, 'Edm.String'> | null;
  materialPricingGroup?: DeserializedType<T, 'Edm.String'> | null;
  additionalMaterialGroup1?: DeserializedType<T, 'Edm.String'> | null;
  additionalMaterialGroup2?: DeserializedType<T, 'Edm.String'> | null;
  additionalMaterialGroup3?: DeserializedType<T, 'Edm.String'> | null;
  additionalMaterialGroup4?: DeserializedType<T, 'Edm.String'> | null;
  additionalMaterialGroup5?: DeserializedType<T, 'Edm.String'> | null;
  billingDocumentDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  contractAccount?: DeserializedType<T, 'Edm.String'> | null;
  additionalValueDays?: DeserializedType<T, 'Edm.String'> | null;
  servicesRenderedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  batch?: DeserializedType<T, 'Edm.String'> | null;
  productionPlant?: DeserializedType<T, 'Edm.String'> | null;
  originalPlant?: DeserializedType<T, 'Edm.String'> | null;
  altvBsdConfSubstitutionStatus?: DeserializedType<T, 'Edm.String'> | null;
  storageLocation?: DeserializedType<T, 'Edm.String'> | null;
  deliveryGroup?: DeserializedType<T, 'Edm.String'> | null;
  shippingPoint?: DeserializedType<T, 'Edm.String'> | null;
  shippingType?: DeserializedType<T, 'Edm.String'> | null;
  deliveryPriority?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDateTypeRule?: DeserializedType<T, 'Edm.String'> | null;
  incotermsClassification?: DeserializedType<T, 'Edm.String'> | null;
  incotermsTransferLocation?: DeserializedType<T, 'Edm.String'> | null;
  incotermsLocation1?: DeserializedType<T, 'Edm.String'> | null;
  incotermsLocation2?: DeserializedType<T, 'Edm.String'> | null;
  taxAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  productTaxClassification1?: DeserializedType<T, 'Edm.String'> | null;
  productTaxClassification2?: DeserializedType<T, 'Edm.String'> | null;
  productTaxClassification3?: DeserializedType<T, 'Edm.String'> | null;
  productTaxClassification4?: DeserializedType<T, 'Edm.String'> | null;
  productTaxClassification5?: DeserializedType<T, 'Edm.String'> | null;
  productTaxClassification6?: DeserializedType<T, 'Edm.String'> | null;
  productTaxClassification7?: DeserializedType<T, 'Edm.String'> | null;
  productTaxClassification8?: DeserializedType<T, 'Edm.String'> | null;
  productTaxClassification9?: DeserializedType<T, 'Edm.String'> | null;
  matlAccountAssignmentGroup?: DeserializedType<T, 'Edm.String'> | null;
  costAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  customerPaymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  fixedValueDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  customerGroup?: DeserializedType<T, 'Edm.String'> | null;
  salesDocumentRjcnReason?: DeserializedType<T, 'Edm.String'> | null;
  itemBillingBlockReason?: DeserializedType<T, 'Edm.String'> | null;
  slsDocIsRlvtForProofOfDeliv?: DeserializedType<T, 'Edm.Boolean'> | null;
  wbsElement?: DeserializedType<T, 'Edm.String'> | null;
  profitCenter?: DeserializedType<T, 'Edm.String'> | null;
  accountingExchangeRate?: DeserializedType<T, 'Edm.Decimal'> | null;
  referenceSdDocument?: DeserializedType<T, 'Edm.String'> | null;
  referenceSdDocumentItem?: DeserializedType<T, 'Edm.String'> | null;
  sdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
  deliveryStatus?: DeserializedType<T, 'Edm.String'> | null;
  orderRelatedBillingStatus?: DeserializedType<T, 'Edm.String'> | null;
  productSeasonYear?: DeserializedType<T, 'Edm.String'> | null;
  productSeason?: DeserializedType<T, 'Edm.String'> | null;
  productCollection?: DeserializedType<T, 'Edm.String'> | null;
  productTheme?: DeserializedType<T, 'Edm.String'> | null;
  seasonCompletenessStatus?: DeserializedType<T, 'Edm.String'> | null;
  fashionCancelDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  productCharacteristic1?: DeserializedType<T, 'Edm.String'> | null;
  productCharacteristic2?: DeserializedType<T, 'Edm.String'> | null;
  productCharacteristic3?: DeserializedType<T, 'Edm.String'> | null;
  shippingGroupNumber?: DeserializedType<T, 'Edm.String'> | null;
  shippingGroupRule?: DeserializedType<T, 'Edm.String'> | null;
  crossPlantConfigurableProduct?: DeserializedType<T, 'Edm.String'> | null;
  productCategory?: DeserializedType<T, 'Edm.String'> | null;
  requirementSegment?: DeserializedType<T, 'Edm.String'> | null;
  toBillingPlan?: SalesOrderItemBillingPlanType<T> | null;
  toPartner: SalesOrderItemPartnerType<T>[];
  toPrecedingProcFlowDocItem: SalesOrderItmPrecdgProcFlowType<T>[];
  toPricingElement: SalesOrderItemPrElementType<T>[];
  toRelatedObject: SalesOrderItemRelatedObjectType<T>[];
  toSalesOrder?: SalesOrderType<T> | null;
  toScheduleLine: SalesOrderScheduleLineType<T>[];
  toSubsequentProcFlowDocItem: SalesOrderItmSubsqntProcFlowType<T>[];
  toText: SalesOrderItemTextType<T>[];
  toValueAddedService: SalesOrderValAddedSrvcType<T>[];
}
