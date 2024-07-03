"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemPartnerAddressApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const SalesOrderItemPartnerAddress_1 = require("./SalesOrderItemPartnerAddress");
const SalesOrderItemPartnerAddressRequestBuilder_1 = require("./SalesOrderItemPartnerAddressRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderItemPartnerAddressApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SalesOrderItemPartnerAddress_1.SalesOrderItemPartnerAddress;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_PARTNER: new odata_v2_1.OneToOneLink('to_Partner', this, linkedApis[0]),
            TO_SALES_ORDER: new odata_v2_1.OneToOneLink('to_SalesOrder', this, linkedApis[1]),
            TO_SALES_ORDER_ITEM: new odata_v2_1.OneToOneLink('to_SalesOrderItem', this, linkedApis[2])
        };
        return this;
    }
    requestBuilder() {
        return new SalesOrderItemPartnerAddressRequestBuilder_1.SalesOrderItemPartnerAddressRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SalesOrderItemPartnerAddress_1.SalesOrderItemPartnerAddress, this.deSerializers);
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
                 * Static representation of the {@link salesOrderItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_ORDER_ITEM: fieldBuilder.buildEdmTypeField('SalesOrderItem', 'Edm.String', false),
                /**
                 * Static representation of the {@link partnerFunction} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PARTNER_FUNCTION: fieldBuilder.buildEdmTypeField('PartnerFunction', 'Edm.String', false),
                /**
                 * Static representation of the {@link addressRepresentationCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS_REPRESENTATION_CODE: fieldBuilder.buildEdmTypeField('AddressRepresentationCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link correspondenceLanguage} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CORRESPONDENCE_LANGUAGE: fieldBuilder.buildEdmTypeField('CorrespondenceLanguage', 'Edm.String', true),
                /**
                 * Static representation of the {@link addresseeFullName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESSEE_FULL_NAME: fieldBuilder.buildEdmTypeField('AddresseeFullName', 'Edm.String', true),
                /**
                 * Static representation of the {@link organizationName1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORGANIZATION_NAME_1: fieldBuilder.buildEdmTypeField('OrganizationName1', 'Edm.String', true),
                /**
                 * Static representation of the {@link organizationName2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORGANIZATION_NAME_2: fieldBuilder.buildEdmTypeField('OrganizationName2', 'Edm.String', true),
                /**
                 * Static representation of the {@link organizationName3} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORGANIZATION_NAME_3: fieldBuilder.buildEdmTypeField('OrganizationName3', 'Edm.String', true),
                /**
                 * Static representation of the {@link organizationName4} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORGANIZATION_NAME_4: fieldBuilder.buildEdmTypeField('OrganizationName4', 'Edm.String', true),
                /**
                 * Static representation of the {@link cityName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CITY_NAME: fieldBuilder.buildEdmTypeField('CityName', 'Edm.String', true),
                /**
                 * Static representation of the {@link districtName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DISTRICT_NAME: fieldBuilder.buildEdmTypeField('DistrictName', 'Edm.String', true),
                /**
                 * Static representation of the {@link postalCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                POSTAL_CODE: fieldBuilder.buildEdmTypeField('PostalCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link streetName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STREET_NAME: fieldBuilder.buildEdmTypeField('StreetName', 'Edm.String', true),
                /**
                 * Static representation of the {@link streetPrefixName1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STREET_PREFIX_NAME_1: fieldBuilder.buildEdmTypeField('StreetPrefixName1', 'Edm.String', true),
                /**
                 * Static representation of the {@link streetPrefixName2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STREET_PREFIX_NAME_2: fieldBuilder.buildEdmTypeField('StreetPrefixName2', 'Edm.String', true),
                /**
                 * Static representation of the {@link streetSuffixName1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STREET_SUFFIX_NAME_1: fieldBuilder.buildEdmTypeField('StreetSuffixName1', 'Edm.String', true),
                /**
                 * Static representation of the {@link streetSuffixName2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STREET_SUFFIX_NAME_2: fieldBuilder.buildEdmTypeField('StreetSuffixName2', 'Edm.String', true),
                /**
                 * Static representation of the {@link houseNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HOUSE_NUMBER: fieldBuilder.buildEdmTypeField('HouseNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link country} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true),
                /**
                 * Static representation of the {@link region} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REGION: fieldBuilder.buildEdmTypeField('Region', 'Edm.String', true),
                /**
                 * Static representation of the {@link formOfAddress} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FORM_OF_ADDRESS: fieldBuilder.buildEdmTypeField('FormOfAddress', 'Edm.String', true),
                /**
                 * Static representation of the {@link taxJurisdiction} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TAX_JURISDICTION: fieldBuilder.buildEdmTypeField('TaxJurisdiction', 'Edm.String', true),
                /**
                 * Static representation of the {@link transportZone} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TRANSPORT_ZONE: fieldBuilder.buildEdmTypeField('TransportZone', 'Edm.String', true),
                /**
                 * Static representation of the {@link poBox} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PO_BOX: fieldBuilder.buildEdmTypeField('POBox', 'Edm.String', true),
                /**
                 * Static representation of the {@link poBoxPostalCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PO_BOX_POSTAL_CODE: fieldBuilder.buildEdmTypeField('POBoxPostalCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link emailAddress} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField('EmailAddress', 'Edm.String', true),
                /**
                 * Static representation of the {@link mobilePhoneCountry} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MOBILE_PHONE_COUNTRY: fieldBuilder.buildEdmTypeField('MobilePhoneCountry', 'Edm.String', true),
                /**
                 * Static representation of the {@link mobileNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MOBILE_NUMBER: fieldBuilder.buildEdmTypeField('MobileNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link phoneNumberCountry} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PHONE_NUMBER_COUNTRY: fieldBuilder.buildEdmTypeField('PhoneNumberCountry', 'Edm.String', true),
                /**
                 * Static representation of the {@link phoneNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PHONE_NUMBER: fieldBuilder.buildEdmTypeField('PhoneNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link phoneExtensionNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PHONE_EXTENSION_NUMBER: fieldBuilder.buildEdmTypeField('PhoneExtensionNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link faxNumberCountry} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FAX_NUMBER_COUNTRY: fieldBuilder.buildEdmTypeField('FaxNumberCountry', 'Edm.String', true),
                /**
                 * Static representation of the {@link faxAreaCodeSubscriberNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FAX_AREA_CODE_SUBSCRIBER_NUMBER: fieldBuilder.buildEdmTypeField('FaxAreaCodeSubscriberNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link faxExtensionNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FAX_EXTENSION_NUMBER: fieldBuilder.buildEdmTypeField('FaxExtensionNumber', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', SalesOrderItemPartnerAddress_1.SalesOrderItemPartnerAddress)
            };
        }
        return this._schema;
    }
}
exports.SalesOrderItemPartnerAddressApi = SalesOrderItemPartnerAddressApi;
//# sourceMappingURL=SalesOrderItemPartnerAddressApi.js.map