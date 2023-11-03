module.exports = cds.service.impl( async function(){

    //here we can use our DB tables as objects
    const { PurchaseOrder, EmployeeSet, PurchaseOrderItems } = this.entities;
    //comm
    this.on('getOrderDefaults', async req => {
        return {OVERALL_STATUS: 'N'};
      });

    this.after('PATCH', PurchaseOrderItems, async data => {
        const tx = cds.tx(data);
        let orderInfo = { totamount: 0 };
        let result = await tx.read(PurchaseOrderItems.drafts)
                              .where({ ID: data.ID }).columns(['PARENT_KEY_ID']);
        let dbItemInfos = await tx.read(PurchaseOrderItems.drafts)
                                   .where({ PARENT_KEY_ID: result[0].PARENT_KEY_ID });
        for (let i = 0; i < dbItemInfos.length; i++) {
          if (dbItemInfos[i].GROSS_AMOUNT > 0) {
            orderInfo.GROSS_AMOUNT = orderInfo.GROSS_AMOUNT + dbItemInfos[i].GROSS_AMOUNT;
          }
          orderInfo.CURRENCY_code = dbItemInfos[i].CURRENCY_CODE;
        }
        console.log("To be updated " + result[0].PARENT_KEY_ID + "==>" +JSON.stringify(orderInfo))
        await cds.update(PurchaseOrder.drafts, result[0].PARENT_KEY_ID).set(orderInfo);
      
      });
      
      //Implementation [service.js]
    this.on('setOrderProcessing', PurchaseOrder, async req => {
        const tx = cds.tx(req);
        await tx.update(PurchaseOrder, req.params[0].ID).set({OVERALL_STATUS: 'D'});
    });

    this.on('boost', async (req,res) => {
        try {
            const ID = req.params[0];
            console.log("Hey Amigo, Your purchase order with id " + JSON.stringify(req.params[0]) + " will be boosted");
            const tx = cds.tx(req);
            //CDS Query Language - communicate to DB in agnostic manner
            await tx.update(PurchaseOrder).with({
                GROSS_AMOUNT: { '+=' : 20000 },
                NOTE: 'Boosted!!'
            }).where(ID);
        } catch (error) {
            return "Error " + error.toString();
        }
    });

    this.on('largestOrder', async (req,res) => {
        try {
            //const ID = req.params[0];
            const tx = cds.tx(req);
            
            //SELECT * UPTO 1 ROW FROM dbtab ORDER BY GROSS_AMOUNT desc
            const reply = await tx.read(PurchaseOrder).orderBy({
                GROSS_AMOUNT: 'desc'
            }).limit(1);

            return reply;
        } catch (error) {
            return "Error " + error.toString();
        }
    });

    //Step 2: define generic handler for validation
    this.before('CREATE', EmployeeSet, (req,res) => {
        console.log("Aa gaya " + req.data.salaryAmount);
        if(parseFloat(req.data.salaryAmount) >= 1000000){
            req.error(500, "Salary must be less than a million for employee");
        }
    });

    

})