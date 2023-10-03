using { anubhav.db } from '../db/datamodel';
using { anubhav.cds } from '../db/CDSViews';


service CatalogService @(path : 'CatalogService', requires: 'authenticated-user') {
    //@Capabilities.Updatable: false
    entity BusinessPartnerSet as projection on db.master.businesspartner;
    entity AddressSet as projection on db.master.address;
    //@readonly
    entity EmployeeSet @(restrict: [ 
                        { grant: ['READ'], to: 'Viewer', where: 'bankName = $user.BankName' },
                        { grant: ['WRITE'], to: 'Admin' }
                        ]) as projection on db.master.employees;
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
        @cds.odata.bindingparameter.name : '_anubhav'
        @Common.SideEffects : {
                TargetProperties : ['_anubhav/GROSS_AMOUNT']
            }  
        action boost() returns PurchaseOrder;
        @cds.odata.bindingparameter.name : '_ananya'
        @Common.SideEffects : {
                TargetProperties : ['_ananya/OVERALL_STATUS']
            }  
        action setOrderProcessing();
        function largestOrder() returns array of PurchaseOrder;
    };

    function getOrderDefaults() returns PurchaseOrder;
    entity PurchaseOrderItems as projection on db.transaction.poitems;
    entity ProductSet as projection on db.master.product;
    //entity PurchaseOrderSet as projection on cds.CDSViews.POWorklist;
    //entity ItemView as projection on cds.CDSViews.ItemView;
    //entity ProductSet as projection on cds.CDSViews.ProductView;
    ///entity ProductSales as projection on cds.CDSViews.CProductValuesView;
}