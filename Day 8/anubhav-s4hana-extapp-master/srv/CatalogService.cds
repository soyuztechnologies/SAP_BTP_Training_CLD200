namespace btps4salesext.srv;

using { OP_API_SALES_ORDER_SRV_0001 as external  } from './external/OP_API_SALES_ORDER_SRV_0001.csn';

service CatalogService @(path:'CatalogService') {

    entity MySalesOrder as projection on external.A_SalesOrder;

}



