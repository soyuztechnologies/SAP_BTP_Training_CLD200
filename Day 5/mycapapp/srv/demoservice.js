const cds = require("@sap/cds");
const { employees } = cds.entities("anubhav.db.master");

module.exports = (srv) => {
     
    //comm
    srv.on ('spiderman', req => `Hello  ${req.data.to}!`)

    //Please overwrite the standard behavior of my entity
    srv.on("READ",'ReadEmpSrv', async (req,res) => {

        var whereCondition = req.data;
        console.log(whereCondition);
        // if(whereCondition.hasOwnProperty("ID")){
        results = await cds.tx(req).run(SELECT.from(employees).limit(10).where(whereCondition));
        // }else{
            // results = await cds.tx(req).run(SELECT.from(employees).limit(1));
        // }
        for (let i = 0; i < results.length; i++) {
            results[i].nameMiddle = "changed!";            
        }
        return results;
    });


    
    srv.on("CREATE", "InserEmployeeSrv", async(req,res) => {
        var dataSet = req.data;
        let returnData = await cds.transaction(req).run([
            INSERT.into(employees).entries(dataSet)
        ]).then((resolve, reject)=>{
            if(typeof(resolve) !== undefined){
                return req.data;
            }else{
                req.error(500,"Create Failed");
            }
        }).catch( err => {
            req.error(500,"There was an error "+ err.toString());
        });
        return returnData;
    });

    srv.on("UPDATE", "UpdateEmployeeSrv", async(req,res) => {
        var dataSet = req.data;
        let returnData = await cds.transaction(req).run([
            UPDATE(employees).set({
                nameFirst: req.data.nameFirst
            }).where({ID: req.data.ID}),
            UPDATE(employees).set({
                nameLast: req.data.nameLast
            }).where({ID: req.data.ID})
        ]).then((resolve, reject)=>{
            if(typeof(resolve) !== undefined){
                return req.data;
            }else{
                req.error(500,"Create Failed");
            }
        }).catch( err => {
            req.error(500,"There was an error "+ err.toString());
        });
        return returnData;
    });

    srv.on("DELETE", "DeleteEmployeeSrv", async(req,res) => {
        var dataSet = req.data;
        console.log(req.data.ID)
        let returnData = await cds.transaction(req).run([
            DELETE.from(employees).where({ID: req.data.ID})
        ]).then((resolve, reject)=>{
            if(typeof(resolve) !== undefined){
                return req.data;
            }else{
                req.error(500,"Create Failed");
            }
        }).catch( err => {
            req.error(500,"There was an error "+ err.toString());
        });

        return returnData;
    });


}