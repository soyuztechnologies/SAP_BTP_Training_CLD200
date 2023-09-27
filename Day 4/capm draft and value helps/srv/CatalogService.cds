using { anubhav.db } from '../db/datamodel';
using { cappo.cds } from '../db/CDSViews';

//Demo change for git
service CatalogService @(path:'CatalogService') {

    @Capabilities : { Insertable, Deletable: false }
    entity BusinessPartnerSet as projection on db.master.businesspartner;
    entity AddressSet as projection on db.master.address;
    @readonly
    entity EmployeeSet as projection on db.master.employees;
    entity PurchaseOrderItems as projection on db.transaction.poitems;
    entity POs @(
        title: 'Purchase order',
        odata.draft.enabled : true,
    ) as projection on db.transaction.purchaseorder{
        *,
        case OVERALL_STATUS
            when 'N' then 'New'
            when 'B' then 'Blocked'
            when 'D' then 'Delivered'
            when 'P' then 'Planned'
        end as OVERALL_STATUS: String(20),
        case OVERALL_STATUS
            when 'N' then 2
            when 'B' then 1
            when 'D' then 3
            when 'P' then 3
            end as Crtiticality: Integer,
        //round(GROSS_AMOUNT) as GROSS_AMOUNT: Decimal(10,2),
        Items: redirected to PurchaseOrderItems
    }actions{
        action boost();
        function largestOrder() returns array of POs;
    };
    entity ProductSet as projection on db.master.product;
    //entity CProductValuesView as projection on cds.CDSViews.CProductValuesView;

}