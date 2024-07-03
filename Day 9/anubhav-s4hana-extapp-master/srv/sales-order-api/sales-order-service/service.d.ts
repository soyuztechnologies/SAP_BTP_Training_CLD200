/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOrderApi } from './SalesOrderApi';
import { SalesOrderBillingPlanApi } from './SalesOrderBillingPlanApi';
import { SalesOrderBillingPlanItemApi } from './SalesOrderBillingPlanItemApi';
import { SalesOrderHeaderPartnerApi } from './SalesOrderHeaderPartnerApi';
import { SalesOrderHeaderPrElementApi } from './SalesOrderHeaderPrElementApi';
import { SalesOrderItemApi } from './SalesOrderItemApi';
import { SalesOrderItemBillingPlanApi } from './SalesOrderItemBillingPlanApi';
import { SalesOrderItemPartnerApi } from './SalesOrderItemPartnerApi';
import { SalesOrderItemPartnerAddressApi } from './SalesOrderItemPartnerAddressApi';
import { SalesOrderItemPrElementApi } from './SalesOrderItemPrElementApi';
import { SalesOrderItemRelatedObjectApi } from './SalesOrderItemRelatedObjectApi';
import { SalesOrderItemTextApi } from './SalesOrderItemTextApi';
import { SalesOrderItmPrecdgProcFlowApi } from './SalesOrderItmPrecdgProcFlowApi';
import { SalesOrderItmSubsqntProcFlowApi } from './SalesOrderItmSubsqntProcFlowApi';
import { SalesOrderPartnerAddressApi } from './SalesOrderPartnerAddressApi';
import { SalesOrderPrecdgProcFlowApi } from './SalesOrderPrecdgProcFlowApi';
import { SalesOrderRelatedObjectApi } from './SalesOrderRelatedObjectApi';
import { SalesOrderScheduleLineApi } from './SalesOrderScheduleLineApi';
import { SalesOrderSubsqntProcFlowApi } from './SalesOrderSubsqntProcFlowApi';
import { SalesOrderTextApi } from './SalesOrderTextApi';
import { SalesOrderValAddedSrvcApi } from './SalesOrderValAddedSrvcApi';
import { SlsOrderItemBillingPlanItemApi } from './SlsOrderItemBillingPlanItemApi';
import { SlsOrdPaymentPlanItemDetailsApi } from './SlsOrdPaymentPlanItemDetailsApi';
import {
  RejectApprovalRequestParameters,
  ReleaseApprovalRequestParameters
} from './function-imports';
import { BigNumber } from 'bignumber.js';
import { Moment } from 'moment';
import {
  DeSerializers,
  DefaultDeSerializers,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';
export declare function salesOrderService<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateTimeT = Moment,
  TimeT = Time
>(
  deSerializers?: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateTimeT,
      TimeT
    >
  >
): SalesOrderService<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateTimeT,
    TimeT
  >
>;
declare class SalesOrderService<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis;
  private deSerializers;
  constructor(deSerializers: DeSerializersT);
  private initApi;
  get salesOrderApi(): SalesOrderApi<DeSerializersT>;
  get salesOrderBillingPlanApi(): SalesOrderBillingPlanApi<DeSerializersT>;
  get salesOrderBillingPlanItemApi(): SalesOrderBillingPlanItemApi<DeSerializersT>;
  get salesOrderHeaderPartnerApi(): SalesOrderHeaderPartnerApi<DeSerializersT>;
  get salesOrderHeaderPrElementApi(): SalesOrderHeaderPrElementApi<DeSerializersT>;
  get salesOrderItemApi(): SalesOrderItemApi<DeSerializersT>;
  get salesOrderItemBillingPlanApi(): SalesOrderItemBillingPlanApi<DeSerializersT>;
  get salesOrderItemPartnerApi(): SalesOrderItemPartnerApi<DeSerializersT>;
  get salesOrderItemPartnerAddressApi(): SalesOrderItemPartnerAddressApi<DeSerializersT>;
  get salesOrderItemPrElementApi(): SalesOrderItemPrElementApi<DeSerializersT>;
  get salesOrderItemRelatedObjectApi(): SalesOrderItemRelatedObjectApi<DeSerializersT>;
  get salesOrderItemTextApi(): SalesOrderItemTextApi<DeSerializersT>;
  get salesOrderItmPrecdgProcFlowApi(): SalesOrderItmPrecdgProcFlowApi<DeSerializersT>;
  get salesOrderItmSubsqntProcFlowApi(): SalesOrderItmSubsqntProcFlowApi<DeSerializersT>;
  get salesOrderPartnerAddressApi(): SalesOrderPartnerAddressApi<DeSerializersT>;
  get salesOrderPrecdgProcFlowApi(): SalesOrderPrecdgProcFlowApi<DeSerializersT>;
  get salesOrderRelatedObjectApi(): SalesOrderRelatedObjectApi<DeSerializersT>;
  get salesOrderScheduleLineApi(): SalesOrderScheduleLineApi<DeSerializersT>;
  get salesOrderSubsqntProcFlowApi(): SalesOrderSubsqntProcFlowApi<DeSerializersT>;
  get salesOrderTextApi(): SalesOrderTextApi<DeSerializersT>;
  get salesOrderValAddedSrvcApi(): SalesOrderValAddedSrvcApi<DeSerializersT>;
  get slsOrderItemBillingPlanItemApi(): SlsOrderItemBillingPlanItemApi<DeSerializersT>;
  get slsOrdPaymentPlanItemDetailsApi(): SlsOrdPaymentPlanItemDetailsApi<DeSerializersT>;
  /**
   * @deprecated Since v2.13.0. Use {@link operations} instead.
   */
  get functionImports(): {
    rejectApprovalRequest: (
      parameter: RejectApprovalRequestParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').FunctionImportRequestBuilder<
      DeSerializersT,
      RejectApprovalRequestParameters<DeSerializersT>,
      import('./FunctionResult').FunctionResult<DefaultDeSerializers>
    >;
    releaseApprovalRequest: (
      parameter: ReleaseApprovalRequestParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').FunctionImportRequestBuilder<
      DeSerializersT,
      ReleaseApprovalRequestParameters<DeSerializersT>,
      import('./FunctionResult').FunctionResult<DefaultDeSerializers>
    >;
  };
  /**
   * Get unbound functions and actions.
   */
  get operations(): {
    rejectApprovalRequest: (
      parameter: RejectApprovalRequestParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').FunctionImportRequestBuilder<
      DeSerializersT,
      RejectApprovalRequestParameters<DeSerializersT>,
      import('./FunctionResult').FunctionResult<DefaultDeSerializers>
    >;
    releaseApprovalRequest: (
      parameter: ReleaseApprovalRequestParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').FunctionImportRequestBuilder<
      DeSerializersT,
      ReleaseApprovalRequestParameters<DeSerializersT>,
      import('./FunctionResult').FunctionResult<DefaultDeSerializers>
    >;
  };
  get batch(): typeof batch;
  get changeset(): typeof changeset;
}
export {};
//# sourceMappingURL=service.d.ts.map
