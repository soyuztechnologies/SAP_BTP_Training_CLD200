const cds = require("@sap/cds");
const { employees } = cds.entities("anubhav.db.master");
const mysrvdemo = function(srv){

    srv.on("READ", "ReadEmployeeSrv", async(req,res) => {

        var results = [];

        //Example 1: hardcoded data
        // results.push({
        //     "ID":"02BD2137-0890-1EEA-A6C2-VV55C19787CD",
        //     "nameFirst": "Chistiano",
        //     "nameLast": "Ronaldo"
        // });


        //Example 2: Use Select on DB table
        //results = await cds.tx(req).run(SELECT.from(employees).limit(10));

        //Example 3: Use Select on DB table with where
        //results = await cds.tx(req).run(SELECT.from(employees).limit(10).where({"nameFirst":"Susan"}));

        //Example 4:Caller will pass the condition like ID
        //use /Entity/key
        var whereCondition = req.data;
        console.log(whereCondition);
        if(whereCondition.hasOwnProperty("ID")){
            results = await cds.tx(req).run(SELECT.from(employees).limit(10).where(whereCondition));
        }else{
            results = await cds.tx(req).run(SELECT.from(employees).limit(1));
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

};

module.exports = mysrvdemo;