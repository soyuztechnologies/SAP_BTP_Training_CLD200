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
import { SalesOrderPartnerAddress } from './SalesOrderPartnerAddress';

/**
 * Request builder class for operations supported on the {@link SalesOrderPartnerAddress} entity.
 */
export class SalesOrderPartnerAddressRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderPartnerAddress<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesOrderPartnerAddress` entity based on its keys.
   * @param salesOrder Key property. See {@link SalesOrderPartnerAddress.salesOrder}.
   * @param partnerFunction Key property. See {@link SalesOrderPartnerAddress.partnerFunction}.
   * @param addressRepresentationCode Key property. See {@link SalesOrderPartnerAddress.addressRepresentationCode}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderPartnerAddress` entity based on its keys.
   */
  getByKey(
    salesOrder: DeserializedType<T, 'Edm.String'>,
    partnerFunction: DeserializedType<T, 'Edm.String'>,
    addressRepresentationCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderPartnerAddress<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderPartnerAddress<T>, T>(
      this.entityApi,
      {
        SalesOrder: salesOrder,
        PartnerFunction: partnerFunction,
        AddressRepresentationCode: addressRepresentationCode
      }
    );
  }

  /**
   * Returns a request builder for querying all `SalesOrderPartnerAddress` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderPartnerAddress` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderPartnerAddress<T>, T> {
    return new GetAllRequestBuilder<SalesOrderPartnerAddress<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderPartnerAddress`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderPartnerAddress`.
   */
  update(
    entity: SalesOrderPartnerAddress<T>
  ): UpdateRequestBuilder<SalesOrderPartnerAddress<T>, T> {
    return new UpdateRequestBuilder<SalesOrderPartnerAddress<T>, T>(
      this.entityApi,
      entity
    );
  }
}
