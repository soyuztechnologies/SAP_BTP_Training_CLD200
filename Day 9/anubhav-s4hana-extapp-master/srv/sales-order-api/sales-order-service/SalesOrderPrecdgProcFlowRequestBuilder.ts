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
import { SalesOrderPrecdgProcFlow } from './SalesOrderPrecdgProcFlow';

/**
 * Request builder class for operations supported on the {@link SalesOrderPrecdgProcFlow} entity.
 */
export class SalesOrderPrecdgProcFlowRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderPrecdgProcFlow<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesOrderPrecdgProcFlow` entity based on its keys.
   * @param salesOrder Key property. See {@link SalesOrderPrecdgProcFlow.salesOrder}.
   * @param docRelationshipUuid Key property. See {@link SalesOrderPrecdgProcFlow.docRelationshipUuid}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderPrecdgProcFlow` entity based on its keys.
   */
  getByKey(
    salesOrder: DeserializedType<T, 'Edm.String'>,
    docRelationshipUuid: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<SalesOrderPrecdgProcFlow<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderPrecdgProcFlow<T>, T>(
      this.entityApi,
      {
        SalesOrder: salesOrder,
        DocRelationshipUUID: docRelationshipUuid
      }
    );
  }

  /**
   * Returns a request builder for querying all `SalesOrderPrecdgProcFlow` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderPrecdgProcFlow` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderPrecdgProcFlow<T>, T> {
    return new GetAllRequestBuilder<SalesOrderPrecdgProcFlow<T>, T>(
      this.entityApi
    );
  }
}
