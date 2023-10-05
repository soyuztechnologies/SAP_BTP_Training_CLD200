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
import { SalesOrderSubsqntProcFlow } from './SalesOrderSubsqntProcFlow';

/**
 * Request builder class for operations supported on the {@link SalesOrderSubsqntProcFlow} entity.
 */
export class SalesOrderSubsqntProcFlowRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderSubsqntProcFlow<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesOrderSubsqntProcFlow` entity based on its keys.
   * @param salesOrder Key property. See {@link SalesOrderSubsqntProcFlow.salesOrder}.
   * @param docRelationshipUuid Key property. See {@link SalesOrderSubsqntProcFlow.docRelationshipUuid}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderSubsqntProcFlow` entity based on its keys.
   */
  getByKey(
    salesOrder: DeserializedType<T, 'Edm.String'>,
    docRelationshipUuid: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<SalesOrderSubsqntProcFlow<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderSubsqntProcFlow<T>, T>(
      this.entityApi,
      {
        SalesOrder: salesOrder,
        DocRelationshipUUID: docRelationshipUuid
      }
    );
  }

  /**
   * Returns a request builder for querying all `SalesOrderSubsqntProcFlow` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderSubsqntProcFlow` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderSubsqntProcFlow<T>, T> {
    return new GetAllRequestBuilder<SalesOrderSubsqntProcFlow<T>, T>(
      this.entityApi
    );
  }
}
