namespace anubhav.common;
using { Currency } from '@sap/cds/common';


type Gender : String(1) enum{
    male = 'M';
    female = 'F';
    undisclosed = 'U';
};

type AmountT : Decimal(10,2)@(
    Semantics.amount.currencyCode: 'CURRENCY_CODE',
    sap.unit:'CURRENCY_CODE'
);

aspect Amount: {
    CURRENCY: Currency;
    GROSS_AMOUNT: AmountT @(title : '{i18n>GrossAmount}');
    NET_AMOUNT: AmountT @(title : '{i18n>NetAmount}');
    TAX_AMOUNT: AmountT @(title : '{i18n>TaxAmount}');
}


type Guid: String(32);
type PhoneNumber: String(30)@assert.format : '^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$';
type Email: String(255)@assert.format : '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/';