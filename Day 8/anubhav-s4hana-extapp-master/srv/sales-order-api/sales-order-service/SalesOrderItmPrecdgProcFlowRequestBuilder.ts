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
import { SalesOrderItmPrecdgProcFlow } from './SalesOrderItmPrecdgProcFlow';

/**
 * Request builder class for operations supported on the {@link SalesOrderItmPrecdgProcFlow} entity.
 */
export class SalesOrderItmPrecdgProcFlowRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderItmPrecdgProcFlow<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesOrderItmPrecdgProcFlow` entity based on its keys.
   * @param salesOrder Key property. See {@link SalesOrderItmPrecdgProcFlow.salesOrder}.
   * @param salesOrderItem Key property. See {@link SalesOrderItmPrecdgProcFlow.salesOrderItem}.
   * @param docRelationshipUuid Key property. See {@link SalesOrderItmPrecdgProcFlow.docRelationshipUuid}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderItmPrecdgProcFlow` entity based on its keys.
   */
  getByKey(
    salesOrder: DeserializedType<T, 'Edm.String'>,
    salesOrderItem: DeserializedType<T, 'Edm.String'>,
    docRelationshipUuid: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<SalesOrderItmPrecdgProcFlow<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderItmPrecdgProcFlow<T>, T>(
      this.entityApi,
      {
        SalesOrder: salesOrder,
        SalesOrderItem: salesOrderItem,
        DocRelationshipUUID: docRelationshipUuid
      }
    );
  }

  /**
   * Returns a request builder for querying all `SalesOrderItmPrecdgProcFlow` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderItmPrecdgProcFlow` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderItmPrecdgProcFlow<T>, T> {
    return new GetAllRequestBuilder<SalesOrderItmPrecdgProcFlow<T>, T>(
      this.entityApi
    );
  }
}
