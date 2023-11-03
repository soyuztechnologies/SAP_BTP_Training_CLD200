using { anubhav.db } from '../db/datamodel';
using { anubhav.cds } from '../db/CDSViews';


service CatalogService @(path : 'CatalogService') {
    //@Capabilities.Updatable: false
    entity BusinessPartnerSet as projection on db.master.businesspartner;
    entity AddressSet as projection on db.master.address;
    //@readonly
    entity EmployeeSet as projection on db.master.employees {
        ID,
        nameFirst,
        nameLast,
        sex,
        phoneNumber,
        email,
        salaryAmount
    };
    entity PurchaseOrder @(
        odata.draft.enabled: true
    ) as projection on db.transaction.purchaseorder{
        *,
        case OVERALL_STATUS
            when 'N' then 'New'
            when 'P' then 'Paid'
            when 'B' then 'Blocked'
            else 'Delivered' end as OVERALL_STATUS: String(20),
        case OVERALL_STATUS
            when 'N' then 0
            when 'P' then 1
            when 'B' then 2
            else 3 end as Criticality: Integer,
            Items

    }
    actions{
        
        function largestOrder() returns array of PurchaseOrder;
        action boost() returns PurchaseOrder;
        
    };
    entity PurchaseOrderItems as projection on db.transaction.poitems;
    entity ProductSet as projection on db.master.product;
    //entity PurchaseOrderSet as projection on cds.CDSViews.POWorklist;
    //entity ItemView as projection on cds.CDSViews.ItemView;
    //entity ProductSet as projection on cds.CDSViews.ProductView;
    ///entity ProductSales as projection on cds.CDSViews.CProductValuesView;
}