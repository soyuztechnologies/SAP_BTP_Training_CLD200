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
  UpdateRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { SalesOrderItemPartnerAddress } from './SalesOrderItemPartnerAddress';

/**
 * Request builder class for operations supported on the {@link SalesOrderItemPartnerAddress} entity.
 */
export class SalesOrderItemPartnerAddressRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderItemPartnerAddress<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesOrderItemPartnerAddress` entity based on its keys.
   * @param salesOrder Key property. See {@link SalesOrderItemPartnerAddress.salesOrder}.
   * @param salesOrderItem Key property. See {@link SalesOrderItemPartnerAddress.salesOrderItem}.
   * @param partnerFunction Key property. See {@link SalesOrderItemPartnerAddress.partnerFunction}.
   * @param addressRepresentationCode Key property. See {@link SalesOrderItemPartnerAddress.addressRepresentationCode}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderItemPartnerAddress` entity based on its keys.
   */
  getByKey(
    salesOrder: DeserializedType<T, 'Edm.String'>,
    salesOrderItem: DeserializedType<T, 'Edm.String'>,
    partnerFunction: DeserializedType<T, 'Edm.String'>,
    addressRepresentationCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderItemPartnerAddress<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderItemPartnerAddress<T>, T>(
      this.entityApi,
      {
        SalesOrder: salesOrder,
        SalesOrderItem: salesOrderItem,
        PartnerFunction: partnerFunction,
        AddressRepresentationCode: addressRepresentationCode
      }
    );
  }

  /**
   * Returns a request builder for querying all `SalesOrderItemPartnerAddress` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderItemPartnerAddress` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderItemPartnerAddress<T>, T> {
    return new GetAllRequestBuilder<SalesOrderItemPartnerAddress<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderItemPartnerAddress`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderItemPartnerAddress`.
   */
  update(
    entity: SalesOrderItemPartnerAddress<T>
  ): UpdateRequestBuilder<SalesOrderItemPartnerAddress<T>, T> {
    return new UpdateRequestBuilder<SalesOrderItemPartnerAddress<T>, T>(
      this.entityApi,
      entity
    );
  }
}
