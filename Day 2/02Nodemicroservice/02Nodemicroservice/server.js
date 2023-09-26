//getting the object of reusable module
const express = require('express');
//Initialize an App
const app = express();
//express middleware to expose whole folder
app.use(express.static('webapp'));
//Add a end point - /"blank" - this is the default end point
//which will trigger when app starts
app.get('/', function (req, res) {
  res.send('Hello SAP BTP Developers !!');
});

// app.get('/index.html', (req,res) => {
//     res.sendFile(__dirname + '/webapp/index.html');
// });

// app.get('/vendors', (req,res) => {
//     //Postgre - call postgre
//     //prepare json and return
//     res.sendFile(__dirname + '/webapp/vendor.json');
// });

// app.get('/myfile', (req, res) => {
//     res.sendFile(__dirname + "/webapp/myfile.txt");
// });

console.log("Local server is running on http://localhost:3000");

//Start server at port 3000
app.listen(process.env.PORT || 3000)

