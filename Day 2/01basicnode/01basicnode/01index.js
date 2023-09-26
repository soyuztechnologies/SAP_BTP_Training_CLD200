//Example 6 - working with function

//print data on console
console.log("Hello BTPians");

this.tax = 100;

var x = 10;
var y = 20;

var addNumber = function(a,b){
    //classic function we cannot access global variables this.tax
    return a + b + this.tax;
}

//ES6 standard -- arrow function is a new syntax for creating function

mixNumber = (a,b) => {
    return a * b + this.tax;
}

var nextRes = mixNumber(x,y);
var result = addNumber(x,y);

console.log(nextRes);
console.log(result);

return;

//Exmaple 5 -array of json

var aEmployees = [
    {
        "empId": 1000010,
        "empName": "Anubhav",
        "salary": 50000,
        "currency": "AED"
    },
    {
        "empId": 1000020,
        "empName": "Rohit",
        "salary": 15000,
        "currency": "EUR"
    },
    {
        "empId": 1000030,
        "empName": "Visha",
        "salary": 80000,
        "currency": "USD"
    }
];

console.log("Salary is ======>> " + aEmployees[2].salary);

//Exmaple  4 - JSON

var oEmp = {
    "empId": 1000010,
    "empName": "Anubhav",
    "salary": 50000,
    "currency": "AED"
};

console.log("Read Emp id, just single value " + oEmp.empId);
oEmp.empName = "Ananaya";
console.log("Print changed data " + oEmp.empName);
oEmp.smoker = false;
console.log("add new smoker property " + JSON.stringify(oEmp));

for (const key in oEmp) {
    if (oEmp.hasOwnProperty.call(oEmp, key)) {
        const element = oEmp[key];
        console.log(element);
    }
}

return;
//Example 3 : array

var arrFruits = ["apple","banana","cherry"];
arrFruits.push("++pineapple");
arrFruits.splice(1,0,"++Litchi");

for (let i = 0; i < arrFruits.length; i++) {
    const element = arrFruits[i];
    console.log(element);
}
console.log("My first item is --> " + arrFruits[0]);
console.log("My last item is --> " + arrFruits[arrFruits.length - 1]);


//Exmaple 2: Working with variables
//var - global variables /let -local variables
//const - constants

// const pi = 3.14;
// var r = 10;
// var a = 30;

// var area = pi * r * r;
// area += a;

// console.log("Area of this circle is " + area);



