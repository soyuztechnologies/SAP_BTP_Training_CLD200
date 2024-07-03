/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  entityDeserializer,
  transformReturnValueForComplexType,
  DeSerializers,
  DefaultDeSerializers,
  defaultDeSerializers,
  FunctionImportParameter,
  FunctionImportRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { salesOrderService } from './service';
import { FunctionResult } from './FunctionResult';

/**
 * Type of the parameters to be passed to {@link rejectApprovalRequest}.
 */
export interface RejectApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Sales Order.
   */
  salesOrder?: string | null;
}

/**
 * Reject Approval Request.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function rejectApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: RejectApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): FunctionImportRequestBuilder<
  DeSerializersT,
  RejectApprovalRequestParameters<DeSerializersT>,
  FunctionResult
> {
  const params = {
    salesOrder: new FunctionImportParameter(
      'SalesOrder',
      'Edm.String',
      parameters.salesOrder
    )
  };

  return new FunctionImportRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_SALES_ORDER_SRV',
    'rejectApprovalRequest',
    data =>
      transformReturnValueForComplexType(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, FunctionResult)
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link releaseApprovalRequest}.
 */
export interface ReleaseApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Sales Order.
   */
  salesOrder?: string | null;
}

/**
 * Release Approval Request.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function releaseApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ReleaseApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): FunctionImportRequestBuilder<
  DeSerializersT,
  ReleaseApprovalRequestParameters<DeSerializersT>,
  FunctionResult
> {
  const params = {
    salesOrder: new FunctionImportParameter(
      'SalesOrder',
      'Edm.String',
      parameters.salesOrder
    )
  };

  return new FunctionImportRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_SALES_ORDER_SRV',
    'releaseApprovalRequest',
    data =>
      transformReturnValueForComplexType(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, FunctionResult)
      ),
    params,
    deSerializers
  );
}

/**
 * @deprecated Since v2.13.0. Use `operations` instead.
 */
export const functionImports = {
  rejectApprovalRequest,
  releaseApprovalRequest
};
