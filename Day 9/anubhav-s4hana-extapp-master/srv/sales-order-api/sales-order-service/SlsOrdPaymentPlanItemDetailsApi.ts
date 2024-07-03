/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SlsOrdPaymentPlanItemDetails } from './SlsOrdPaymentPlanItemDetails';
import { SlsOrdPaymentPlanItemDetailsRequestBuilder } from './SlsOrdPaymentPlanItemDetailsRequestBuilder';
import { SalesOrderApi } from './SalesOrderApi';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  Time,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class SlsOrdPaymentPlanItemDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SlsOrdPaymentPlanItemDetails<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER: OneToOneLink<
      SlsOrdPaymentPlanItemDetails<DeSerializersT>,
      DeSerializersT,
      SalesOrderApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [SalesOrderApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      TO_SALES_ORDER: new OneToOneLink('to_SalesOrder', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = SlsOrdPaymentPlanItemDetails;

  requestBuilder(): SlsOrdPaymentPlanItemDetailsRequestBuilder<DeSerializersT> {
    return new SlsOrdPaymentPlanItemDetailsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SlsOrdPaymentPlanItemDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SlsOrdPaymentPlanItemDetails<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SlsOrdPaymentPlanItemDetails<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof SlsOrdPaymentPlanItemDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SlsOrdPaymentPlanItemDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SALES_ORDER: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAYMENT_PLAN_ITEM: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAYMENT_PLAN: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_PAYMENT_TYPE: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_PAYMENT: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    E_PAYT_VALIDITY_START_DATE: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    E_PAYT_VALIDITY_END_DATE: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    ELECTRONIC_PAYMENT_HOLDER_NAME: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTHORIZED_AMOUNT_IN_AUTHZN_CRCY: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    AUTHORIZATION_CURRENCY: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTHORIZATION_BY_DIGITAL_PAYT_SRVC: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTHORIZATION_BY_ACQUIRER: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTHORIZATION_DATE: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    AUTHORIZATION_TIME: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Time',
      true,
      true
    >;
    AUTHORIZATION_STATUS_NAME: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    E_PAYT_BY_DIGITAL_PAYMENT_SRVC: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_PAYMENT_CALL_STATUS: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    E_PAYT_AUTHORIZATION_RESULT: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    E_PAYT_TO_BE_AUTHORIZED_AMOUNT: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    E_PAYT_AUTHORIZATION_IS_EXPIRED: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    E_PAYT_AMOUNT_IS_CHANGED: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PREAUTHORIZATION_IS_REQUESTED: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PAYMENT_SERVICE_PROVIDER: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_BY_PAYMENT_SERVICE_PRVDR: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_BY_PAYT_SRVC_PRVDR: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MERCHANT_BY_CLEARING_HOUSE: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_CARD_AUTHZN_RELATION_ID: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_TO_BE_AUTHORIZED_AMOUNT: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PAYT_PLN_FOR_AUTHORIZATION_ITEM: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYT_PLN_ITM_FOR_AUTHORIZATION_ITEM: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER: OneToOneLink<
      SlsOrdPaymentPlanItemDetails<DeSerializersT>,
      DeSerializersT,
      SalesOrderApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SlsOrdPaymentPlanItemDetails<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link salesOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER: fieldBuilder.buildEdmTypeField(
          'SalesOrder',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link paymentPlanItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_PLAN_ITEM: fieldBuilder.buildEdmTypeField(
          'PaymentPlanItem',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link paymentPlan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_PLAN: fieldBuilder.buildEdmTypeField(
          'PaymentPlan',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link electronicPaymentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_PAYMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'ElectronicPaymentType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link electronicPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_PAYMENT: fieldBuilder.buildEdmTypeField(
          'ElectronicPayment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ePaytValidityStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_PAYT_VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField(
          'EPaytValidityStartDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link ePaytValidityEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_PAYT_VALIDITY_END_DATE: fieldBuilder.buildEdmTypeField(
          'EPaytValidityEndDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link electronicPaymentHolderName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_PAYMENT_HOLDER_NAME: fieldBuilder.buildEdmTypeField(
          'ElectronicPaymentHolderName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link authorizedAmountInAuthznCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORIZED_AMOUNT_IN_AUTHZN_CRCY: fieldBuilder.buildEdmTypeField(
          'AuthorizedAmountInAuthznCrcy',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link authorizationCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORIZATION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AuthorizationCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link authorizationByDigitalPaytSrvc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORIZATION_BY_DIGITAL_PAYT_SRVC: fieldBuilder.buildEdmTypeField(
          'AuthorizationByDigitalPaytSrvc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link authorizationByAcquirer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORIZATION_BY_ACQUIRER: fieldBuilder.buildEdmTypeField(
          'AuthorizationByAcquirer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link authorizationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORIZATION_DATE: fieldBuilder.buildEdmTypeField(
          'AuthorizationDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link authorizationTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORIZATION_TIME: fieldBuilder.buildEdmTypeField(
          'AuthorizationTime',
          'Edm.Time',
          true
        ),
        /**
         * Static representation of the {@link authorizationStatusName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORIZATION_STATUS_NAME: fieldBuilder.buildEdmTypeField(
          'AuthorizationStatusName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ePaytByDigitalPaymentSrvc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_PAYT_BY_DIGITAL_PAYMENT_SRVC: fieldBuilder.buildEdmTypeField(
          'EPaytByDigitalPaymentSrvc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link electronicPaymentCallStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_PAYMENT_CALL_STATUS: fieldBuilder.buildEdmTypeField(
          'ElectronicPaymentCallStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ePaytAuthorizationResult} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_PAYT_AUTHORIZATION_RESULT: fieldBuilder.buildEdmTypeField(
          'EPaytAuthorizationResult',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ePaytToBeAuthorizedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_PAYT_TO_BE_AUTHORIZED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'EPaytToBeAuthorizedAmount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link ePaytAuthorizationIsExpired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_PAYT_AUTHORIZATION_IS_EXPIRED: fieldBuilder.buildEdmTypeField(
          'EPaytAuthorizationIsExpired',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link ePaytAmountIsChanged} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_PAYT_AMOUNT_IS_CHANGED: fieldBuilder.buildEdmTypeField(
          'EPaytAmountIsChanged',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link preauthorizationIsRequested} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREAUTHORIZATION_IS_REQUESTED: fieldBuilder.buildEdmTypeField(
          'PreauthorizationIsRequested',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link paymentServiceProvider} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SERVICE_PROVIDER: fieldBuilder.buildEdmTypeField(
          'PaymentServiceProvider',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentByPaymentServicePrvdr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_BY_PAYMENT_SERVICE_PRVDR: fieldBuilder.buildEdmTypeField(
          'PaymentByPaymentServicePrvdr',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionByPaytSrvcPrvdr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_BY_PAYT_SRVC_PRVDR: fieldBuilder.buildEdmTypeField(
          'TransactionByPaytSrvcPrvdr',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link merchantByClearingHouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MERCHANT_BY_CLEARING_HOUSE: fieldBuilder.buildEdmTypeField(
          'MerchantByClearingHouse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentCardAuthznRelationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_CARD_AUTHZN_RELATION_ID: fieldBuilder.buildEdmTypeField(
          'PaymentCardAuthznRelationID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maximumToBeAuthorizedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_TO_BE_AUTHORIZED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaximumToBeAuthorizedAmount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link paytPlnForAuthorizationItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYT_PLN_FOR_AUTHORIZATION_ITEM: fieldBuilder.buildEdmTypeField(
          'PaytPlnForAuthorizationItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paytPlnItmForAuthorizationItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYT_PLN_ITM_FOR_AUTHORIZATION_ITEM: fieldBuilder.buildEdmTypeField(
          'PaytPlnItmForAuthorizationItem',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SlsOrdPaymentPlanItemDetails)
      };
    }

    return this._schema;
  }
}
