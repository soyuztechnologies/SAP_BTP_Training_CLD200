"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlsOrdPaymentPlanItemDetailsApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const SlsOrdPaymentPlanItemDetails_1 = require("./SlsOrdPaymentPlanItemDetails");
const SlsOrdPaymentPlanItemDetailsRequestBuilder_1 = require("./SlsOrdPaymentPlanItemDetailsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SlsOrdPaymentPlanItemDetailsApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SlsOrdPaymentPlanItemDetails_1.SlsOrdPaymentPlanItemDetails;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_SALES_ORDER: new odata_v2_1.OneToOneLink('to_SalesOrder', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new SlsOrdPaymentPlanItemDetailsRequestBuilder_1.SlsOrdPaymentPlanItemDetailsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SlsOrdPaymentPlanItemDetails_1.SlsOrdPaymentPlanItemDetails, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link salesOrder} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_ORDER: fieldBuilder.buildEdmTypeField('SalesOrder', 'Edm.String', false),
                /**
                 * Static representation of the {@link paymentPlanItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYMENT_PLAN_ITEM: fieldBuilder.buildEdmTypeField('PaymentPlanItem', 'Edm.String', false),
                /**
                 * Static representation of the {@link paymentPlan} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYMENT_PLAN: fieldBuilder.buildEdmTypeField('PaymentPlan', 'Edm.String', true),
                /**
                 * Static representation of the {@link electronicPaymentType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ELECTRONIC_PAYMENT_TYPE: fieldBuilder.buildEdmTypeField('ElectronicPaymentType', 'Edm.String', true),
                /**
                 * Static representation of the {@link electronicPayment} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ELECTRONIC_PAYMENT: fieldBuilder.buildEdmTypeField('ElectronicPayment', 'Edm.String', true),
                /**
                 * Static representation of the {@link ePaytValidityStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                E_PAYT_VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField('EPaytValidityStartDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link ePaytValidityEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                E_PAYT_VALIDITY_END_DATE: fieldBuilder.buildEdmTypeField('EPaytValidityEndDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link electronicPaymentHolderName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ELECTRONIC_PAYMENT_HOLDER_NAME: fieldBuilder.buildEdmTypeField('ElectronicPaymentHolderName', 'Edm.String', true),
                /**
                 * Static representation of the {@link authorizedAmountInAuthznCrcy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AUTHORIZED_AMOUNT_IN_AUTHZN_CRCY: fieldBuilder.buildEdmTypeField('AuthorizedAmountInAuthznCrcy', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link authorizationCurrency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AUTHORIZATION_CURRENCY: fieldBuilder.buildEdmTypeField('AuthorizationCurrency', 'Edm.String', true),
                /**
                 * Static representation of the {@link authorizationByDigitalPaytSrvc} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AUTHORIZATION_BY_DIGITAL_PAYT_SRVC: fieldBuilder.buildEdmTypeField('AuthorizationByDigitalPaytSrvc', 'Edm.String', true),
                /**
                 * Static representation of the {@link authorizationByAcquirer} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AUTHORIZATION_BY_ACQUIRER: fieldBuilder.buildEdmTypeField('AuthorizationByAcquirer', 'Edm.String', true),
                /**
                 * Static representation of the {@link authorizationDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AUTHORIZATION_DATE: fieldBuilder.buildEdmTypeField('AuthorizationDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link authorizationTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AUTHORIZATION_TIME: fieldBuilder.buildEdmTypeField('AuthorizationTime', 'Edm.Time', true),
                /**
                 * Static representation of the {@link authorizationStatusName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AUTHORIZATION_STATUS_NAME: fieldBuilder.buildEdmTypeField('AuthorizationStatusName', 'Edm.String', true),
                /**
                 * Static representation of the {@link ePaytByDigitalPaymentSrvc} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                E_PAYT_BY_DIGITAL_PAYMENT_SRVC: fieldBuilder.buildEdmTypeField('EPaytByDigitalPaymentSrvc', 'Edm.String', true),
                /**
                 * Static representation of the {@link electronicPaymentCallStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ELECTRONIC_PAYMENT_CALL_STATUS: fieldBuilder.buildEdmTypeField('ElectronicPaymentCallStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link ePaytAuthorizationResult} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                E_PAYT_AUTHORIZATION_RESULT: fieldBuilder.buildEdmTypeField('EPaytAuthorizationResult', 'Edm.String', true),
                /**
                 * Static representation of the {@link ePaytToBeAuthorizedAmount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                E_PAYT_TO_BE_AUTHORIZED_AMOUNT: fieldBuilder.buildEdmTypeField('EPaytToBeAuthorizedAmount', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link ePaytAuthorizationIsExpired} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                E_PAYT_AUTHORIZATION_IS_EXPIRED: fieldBuilder.buildEdmTypeField('EPaytAuthorizationIsExpired', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link ePaytAmountIsChanged} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                E_PAYT_AMOUNT_IS_CHANGED: fieldBuilder.buildEdmTypeField('EPaytAmountIsChanged', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link preauthorizationIsRequested} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PREAUTHORIZATION_IS_REQUESTED: fieldBuilder.buildEdmTypeField('PreauthorizationIsRequested', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link paymentServiceProvider} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYMENT_SERVICE_PROVIDER: fieldBuilder.buildEdmTypeField('PaymentServiceProvider', 'Edm.String', true),
                /**
                 * Static representation of the {@link paymentByPaymentServicePrvdr} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYMENT_BY_PAYMENT_SERVICE_PRVDR: fieldBuilder.buildEdmTypeField('PaymentByPaymentServicePrvdr', 'Edm.String', true),
                /**
                 * Static representation of the {@link transactionByPaytSrvcPrvdr} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TRANSACTION_BY_PAYT_SRVC_PRVDR: fieldBuilder.buildEdmTypeField('TransactionByPaytSrvcPrvdr', 'Edm.String', true),
                /**
                 * Static representation of the {@link merchantByClearingHouse} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MERCHANT_BY_CLEARING_HOUSE: fieldBuilder.buildEdmTypeField('MerchantByClearingHouse', 'Edm.String', true),
                /**
                 * Static representation of the {@link paymentCardAuthznRelationId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYMENT_CARD_AUTHZN_RELATION_ID: fieldBuilder.buildEdmTypeField('PaymentCardAuthznRelationID', 'Edm.String', true),
                /**
                 * Static representation of the {@link maximumToBeAuthorizedAmount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAXIMUM_TO_BE_AUTHORIZED_AMOUNT: fieldBuilder.buildEdmTypeField('MaximumToBeAuthorizedAmount', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link paytPlnForAuthorizationItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYT_PLN_FOR_AUTHORIZATION_ITEM: fieldBuilder.buildEdmTypeField('PaytPlnForAuthorizationItem', 'Edm.String', true),
                /**
                 * Static representation of the {@link paytPlnItmForAuthorizationItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYT_PLN_ITM_FOR_AUTHORIZATION_ITEM: fieldBuilder.buildEdmTypeField('PaytPlnItmForAuthorizationItem', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', SlsOrdPaymentPlanItemDetails_1.SlsOrdPaymentPlanItemDetails)
            };
        }
        return this._schema;
    }
}
exports.SlsOrdPaymentPlanItemDetailsApi = SlsOrdPaymentPlanItemDetailsApi;
//# sourceMappingURL=SlsOrdPaymentPlanItemDetailsApi.js.map