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
  rejectApprovalRequest,
  releaseApprovalRequest,
  RejectApprovalRequestParameters,
  ReleaseApprovalRequestParameters
} from './function-imports';
import { BigNumber } from 'bignumber.js';
import { Moment } from 'moment';
import {
  defaultDeSerializers,
  DeSerializers,
  DefaultDeSerializers,
  mergeDefaultDeSerializersWith,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';

export function salesOrderService<
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
  deSerializers: Partial<
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
  > = defaultDeSerializers as any
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
> {
  return new SalesOrderService(mergeDefaultDeSerializersWith(deSerializers));
}
class SalesOrderService<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis: Record<string, any> = {};
  private deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT) {
    this.deSerializers = deSerializers;
  }

  private initApi(key: string, ctor: new (...args: any[]) => any): any {
    if (!this.apis[key]) {
      this.apis[key] = new ctor(this.deSerializers);
    }
    return this.apis[key];
  }

  get salesOrderApi(): SalesOrderApi<DeSerializersT> {
    const api = this.initApi('salesOrderApi', SalesOrderApi);
    const linkedApis = [
      this.initApi('salesOrderBillingPlanApi', SalesOrderBillingPlanApi),
      this.initApi('salesOrderItemApi', SalesOrderItemApi),
      this.initApi('salesOrderHeaderPartnerApi', SalesOrderHeaderPartnerApi),
      this.initApi(
        'slsOrdPaymentPlanItemDetailsApi',
        SlsOrdPaymentPlanItemDetailsApi
      ),
      this.initApi('salesOrderPrecdgProcFlowApi', SalesOrderPrecdgProcFlowApi),
      this.initApi(
        'salesOrderHeaderPrElementApi',
        SalesOrderHeaderPrElementApi
      ),
      this.initApi('salesOrderRelatedObjectApi', SalesOrderRelatedObjectApi),
      this.initApi(
        'salesOrderSubsqntProcFlowApi',
        SalesOrderSubsqntProcFlowApi
      ),
      this.initApi('salesOrderTextApi', SalesOrderTextApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get salesOrderBillingPlanApi(): SalesOrderBillingPlanApi<DeSerializersT> {
    const api = this.initApi(
      'salesOrderBillingPlanApi',
      SalesOrderBillingPlanApi
    );
    const linkedApis = [
      this.initApi(
        'salesOrderBillingPlanItemApi',
        SalesOrderBillingPlanItemApi
      ),
      this.initApi('salesOrderApi', SalesOrderApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get salesOrderBillingPlanItemApi(): SalesOrderBillingPlanItemApi<DeSerializersT> {
    const api = this.initApi(
      'salesOrderBillingPlanItemApi',
      SalesOrderBillingPlanItemApi
    );
    const linkedApis = [
      this.initApi('salesOrderBillingPlanApi', SalesOrderBillingPlanApi),
      this.initApi('salesOrderApi', SalesOrderApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get salesOrderHeaderPartnerApi(): SalesOrderHeaderPartnerApi<DeSerializersT> {
    const api = this.initApi(
      'salesOrderHeaderPartnerApi',
      SalesOrderHeaderPartnerApi
    );
    const linkedApis = [
      this.initApi('salesOrderPartnerAddressApi', SalesOrderPartnerAddressApi),
      this.initApi('salesOrderApi', SalesOrderApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get salesOrderHeaderPrElementApi(): SalesOrderHeaderPrElementApi<DeSerializersT> {
    const api = this.initApi(
      'salesOrderHeaderPrElementApi',
      SalesOrderHeaderPrElementApi
    );
    const linkedApis = [this.initApi('salesOrderApi', SalesOrderApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get salesOrderItemApi(): SalesOrderItemApi<DeSerializersT> {
    const api = this.initApi('salesOrderItemApi', SalesOrderItemApi);
    const linkedApis = [
      this.initApi(
        'salesOrderItemBillingPlanApi',
        SalesOrderItemBillingPlanApi
      ),
      this.initApi('salesOrderItemPartnerApi', SalesOrderItemPartnerApi),
      this.initApi(
        'salesOrderItmPrecdgProcFlowApi',
        SalesOrderItmPrecdgProcFlowApi
      ),
      this.initApi('salesOrderItemPrElementApi', SalesOrderItemPrElementApi),
      this.initApi(
        'salesOrderItemRelatedObjectApi',
        SalesOrderItemRelatedObjectApi
      ),
      this.initApi('salesOrderApi', SalesOrderApi),
      this.initApi('salesOrderScheduleLineApi', SalesOrderScheduleLineApi),
      this.initApi(
        'salesOrderItmSubsqntProcFlowApi',
        SalesOrderItmSubsqntProcFlowApi
      ),
      this.initApi('salesOrderItemTextApi', SalesOrderItemTextApi),
      this.initApi('salesOrderValAddedSrvcApi', SalesOrderValAddedSrvcApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get salesOrderItemBillingPlanApi(): SalesOrderItemBillingPlanApi<DeSerializersT> {
    const api = this.initApi(
      'salesOrderItemBillingPlanApi',
      SalesOrderItemBillingPlanApi
    );
    const linkedApis = [
      this.initApi(
        'slsOrderItemBillingPlanItemApi',
        SlsOrderItemBillingPlanItemApi
      ),
      this.initApi('salesOrderApi', SalesOrderApi),
      this.initApi('salesOrderItemApi', SalesOrderItemApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get salesOrderItemPartnerApi(): SalesOrderItemPartnerApi<DeSerializersT> {
    const api = this.initApi(
      'salesOrderItemPartnerApi',
      SalesOrderItemPartnerApi
    );
    const linkedApis = [
      this.initApi(
        'salesOrderItemPartnerAddressApi',
        SalesOrderItemPartnerAddressApi
      ),
      this.initApi('salesOrderApi', SalesOrderApi),
      this.initApi('salesOrderItemApi', SalesOrderItemApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get salesOrderItemPartnerAddressApi(): SalesOrderItemPartnerAddressApi<DeSerializersT> {
    const api = this.initApi(
      'salesOrderItemPartnerAddressApi',
      SalesOrderItemPartnerAddressApi
    );
    const linkedApis = [
      this.initApi('salesOrderItemPartnerApi', SalesOrderItemPartnerApi),
      this.initApi('salesOrderApi', SalesOrderApi),
      this.initApi('salesOrderItemApi', SalesOrderItemApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get salesOrderItemPrElementApi(): SalesOrderItemPrElementApi<DeSerializersT> {
    const api = this.initApi(
      'salesOrderItemPrElementApi',
      SalesOrderItemPrElementApi
    );
    const linkedApis = [
      this.initApi('salesOrderApi', SalesOrderApi),
      this.initApi('salesOrderItemApi', SalesOrderItemApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get salesOrderItemRelatedObjectApi(): SalesOrderItemRelatedObjectApi<DeSerializersT> {
    const api = this.initApi(
      'salesOrderItemRelatedObjectApi',
      SalesOrderItemRelatedObjectApi
    );
    const linkedApis = [
      this.initApi('salesOrderApi', SalesOrderApi),
      this.initApi('salesOrderItemApi', SalesOrderItemApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get salesOrderItemTextApi(): SalesOrderItemTextApi<DeSerializersT> {
    const api = this.initApi('salesOrderItemTextApi', SalesOrderItemTextApi);
    const linkedApis = [
      this.initApi('salesOrderApi', SalesOrderApi),
      this.initApi('salesOrderItemApi', SalesOrderItemApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get salesOrderItmPrecdgProcFlowApi(): SalesOrderItmPrecdgProcFlowApi<DeSerializersT> {
    const api = this.initApi(
      'salesOrderItmPrecdgProcFlowApi',
      SalesOrderItmPrecdgProcFlowApi
    );
    const linkedApis = [
      this.initApi('salesOrderApi', SalesOrderApi),
      this.initApi('salesOrderItemApi', SalesOrderItemApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get salesOrderItmSubsqntProcFlowApi(): SalesOrderItmSubsqntProcFlowApi<DeSerializersT> {
    const api = this.initApi(
      'salesOrderItmSubsqntProcFlowApi',
      SalesOrderItmSubsqntProcFlowApi
    );
    const linkedApis = [
      this.initApi('salesOrderApi', SalesOrderApi),
      this.initApi('salesOrderItemApi', SalesOrderItemApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get salesOrderPartnerAddressApi(): SalesOrderPartnerAddressApi<DeSerializersT> {
    const api = this.initApi(
      'salesOrderPartnerAddressApi',
      SalesOrderPartnerAddressApi
    );
    const linkedApis = [
      this.initApi('salesOrderHeaderPartnerApi', SalesOrderHeaderPartnerApi),
      this.initApi('salesOrderApi', SalesOrderApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get salesOrderPrecdgProcFlowApi(): SalesOrderPrecdgProcFlowApi<DeSerializersT> {
    const api = this.initApi(
      'salesOrderPrecdgProcFlowApi',
      SalesOrderPrecdgProcFlowApi
    );
    const linkedApis = [this.initApi('salesOrderApi', SalesOrderApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get salesOrderRelatedObjectApi(): SalesOrderRelatedObjectApi<DeSerializersT> {
    const api = this.initApi(
      'salesOrderRelatedObjectApi',
      SalesOrderRelatedObjectApi
    );
    const linkedApis = [this.initApi('salesOrderApi', SalesOrderApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get salesOrderScheduleLineApi(): SalesOrderScheduleLineApi<DeSerializersT> {
    return this.initApi('salesOrderScheduleLineApi', SalesOrderScheduleLineApi);
  }

  get salesOrderSubsqntProcFlowApi(): SalesOrderSubsqntProcFlowApi<DeSerializersT> {
    const api = this.initApi(
      'salesOrderSubsqntProcFlowApi',
      SalesOrderSubsqntProcFlowApi
    );
    const linkedApis = [this.initApi('salesOrderApi', SalesOrderApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get salesOrderTextApi(): SalesOrderTextApi<DeSerializersT> {
    const api = this.initApi('salesOrderTextApi', SalesOrderTextApi);
    const linkedApis = [this.initApi('salesOrderApi', SalesOrderApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get salesOrderValAddedSrvcApi(): SalesOrderValAddedSrvcApi<DeSerializersT> {
    return this.initApi('salesOrderValAddedSrvcApi', SalesOrderValAddedSrvcApi);
  }

  get slsOrderItemBillingPlanItemApi(): SlsOrderItemBillingPlanItemApi<DeSerializersT> {
    const api = this.initApi(
      'slsOrderItemBillingPlanItemApi',
      SlsOrderItemBillingPlanItemApi
    );
    const linkedApis = [
      this.initApi(
        'salesOrderItemBillingPlanApi',
        SalesOrderItemBillingPlanApi
      ),
      this.initApi('salesOrderApi', SalesOrderApi),
      this.initApi('salesOrderItemApi', SalesOrderItemApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get slsOrdPaymentPlanItemDetailsApi(): SlsOrdPaymentPlanItemDetailsApi<DeSerializersT> {
    const api = this.initApi(
      'slsOrdPaymentPlanItemDetailsApi',
      SlsOrdPaymentPlanItemDetailsApi
    );
    const linkedApis = [this.initApi('salesOrderApi', SalesOrderApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  /**
   * @deprecated Since v2.13.0. Use {@link operations} instead.
   */
  get functionImports() {
    return {
      rejectApprovalRequest: (
        parameter: RejectApprovalRequestParameters<DeSerializersT>
      ) => rejectApprovalRequest(parameter, this.deSerializers),
      releaseApprovalRequest: (
        parameter: ReleaseApprovalRequestParameters<DeSerializersT>
      ) => releaseApprovalRequest(parameter, this.deSerializers)
    };
  }

  /**
   * Get unbound functions and actions.
   */
  get operations() {
    return { ...this.functionImports };
  }

  get batch(): typeof batch {
    return batch;
  }

  get changeset(): typeof changeset {
    return changeset;
  }
}
