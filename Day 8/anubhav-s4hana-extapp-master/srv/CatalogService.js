const cds = require('@sap/cds');

module.exports = cds.service.impl(async function(srv){

    const { MySalesOrder } = this.entities;

    var getAllSalesOrders = async function(){
        const { salesOrderService } = require('./sales-order-api/sales-order-service');
        const { salesOrderApi } = salesOrderService();
        const dataSalesData = await salesOrderApi.requestBuilder().getAll().top(30)
        .select(
            salesOrderApi.schema.SALES_ORDER,
            salesOrderApi.schema.SALES_ORGANIZATION,
            salesOrderApi.schema.SALES_ORDER_TYPE,
            salesOrderApi.schema.SOLD_TO_PARTY,
            salesOrderApi.schema.PAYMENT_METHOD,
            salesOrderApi.schema.TO_ITEM
        )
        .execute({
            destinationName: "S4HANA"
            // "url": "http://103.207.171.202:8021",
            // "username": "mob***",
            // "password": "***"
        });
        return dataSalesData;
    };

    srv.on('READ', MySalesOrder, async(req) => {
        return await getAllSalesOrders().then(
            salesOrderTable => {
                var aRecord = [];
                console.log(salesOrderTable);
                salesOrderTable.forEach(element => {
                    var item = {};
                    item.SalesOrder = element.salesOrder;
                    item.SalesOrganization = element.salesOrganization;
                    item.SalesOrderType = element.salesOrderType;
                    item.SoldToParty = element.soldToParty;
                    item.PaymentMethod = element.paymentMethod;
                    if(element.toItem[0]){
                        item.Material = element.toItem[0].material;
                        item.RequestedQuantity = element.toItem[0].requestedQuantity;
                        item.NetAmount = element.toItem[0].netAmount;
                    }else{
                        item.Material = "";
                        item.RequestedQuantity = "";
                        item.NetAmount = "";
                    }
                    
                    aRecord.push(item);
                });
                return aRecord;
            }
        );
    });

});