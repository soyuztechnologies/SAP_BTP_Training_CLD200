/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { SalesOrderItmSubsqntProcFlow } from './SalesOrderItmSubsqntProcFlow';

/**
 * Request builder class for operations supported on the {@link SalesOrderItmSubsqntProcFlow} entity.
 */
export class SalesOrderItmSubsqntProcFlowRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderItmSubsqntProcFlow<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesOrderItmSubsqntProcFlow` entity based on its keys.
   * @param salesOrder Key property. See {@link SalesOrderItmSubsqntProcFlow.salesOrder}.
   * @param salesOrderItem Key property. See {@link SalesOrderItmSubsqntProcFlow.salesOrderItem}.
   * @param docRelationshipUuid Key property. See {@link SalesOrderItmSubsqntProcFlow.docRelationshipUuid}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderItmSubsqntProcFlow` entity based on its keys.
   */
  getByKey(
    salesOrder: DeserializedType<T, 'Edm.String'>,
    salesOrderItem: DeserializedType<T, 'Edm.String'>,
    docRelationshipUuid: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<SalesOrderItmSubsqntProcFlow<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderItmSubsqntProcFlow<T>, T>(
      this.entityApi,
      {
        SalesOrder: salesOrder,
        SalesOrderItem: salesOrderItem,
        DocRelationshipUUID: docRelationshipUuid
      }
    );
  }

  /**
   * Returns a request builder for querying all `SalesOrderItmSubsqntProcFlow` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderItmSubsqntProcFlow` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderItmSubsqntProcFlow<T>, T> {
    return new GetAllRequestBuilder<SalesOrderItmSubsqntProcFlow<T>, T>(
      this.entityApi
    );
  }
}
