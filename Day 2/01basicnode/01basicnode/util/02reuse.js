module.exports = {

    addNumbers : function(a,b){
        console.log(a + b);
    },
    productNumbers: function(){
        console.log(a * b);
    },
    countArray: function(arr){
        console.log(arr.length);
    },
    printArray: (arrInp) => {
        for (let i = 0; i < arrInp.length; i++) {
            const element = arrInp[i];
            console.log(element);
        }
    },
    printJSON: (jsonInput) => {
        for (const key in jsonInput) {
            if (jsonInput.hasOwnProperty.call(jsonInput, key)) {
                const element = jsonInput[key];
                console.log(element);
            }
        }
    }



}