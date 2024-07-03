/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DeSerializers,
  DefaultDeSerializers,
  FunctionImportRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
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
export declare function rejectApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: RejectApprovalRequestParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): FunctionImportRequestBuilder<
  DeSerializersT,
  RejectApprovalRequestParameters<DeSerializersT>,
  FunctionResult
>;
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
export declare function releaseApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ReleaseApprovalRequestParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): FunctionImportRequestBuilder<
  DeSerializersT,
  ReleaseApprovalRequestParameters<DeSerializersT>,
  FunctionResult
>;
/**
 * @deprecated Since v2.13.0. Use `operations` instead.
 */
export declare const functionImports: {
  rejectApprovalRequest: typeof rejectApprovalRequest;
  releaseApprovalRequest: typeof releaseApprovalRequest;
};
//# sourceMappingURL=function-imports.d.ts.map
