//Exmaple 2: Understand how can we make JS work synchronously
//Converted our asynchronous function setTimeout to a promise
const timerFunction = ms => new Promise(resolve => setTimeout(resolve, ms));

//Create a wrapper to call promise and pass parameter value
const callMyFunction = () => {
    //once the promise execution is finished a function gets called in then
    return timerFunction(5000).then( () => {
        console.log("I am a wait function");
    });
}

const myFunction = async () => {
    console.log("Before calling async function");
    //to make JS work sync we can use await keyword for a promisify function
    //callMyFunction by some framework outside our code generally
    await callMyFunction();
    console.log("End of my Function");
}

myFunction();


//Example 1: Understand the concept of callback and Asynchronous programming

// const myFunction = () => {
//     console.log("before calling timer");
//     setTimeout(
//         //this is the callback, once async processing is over
//         //system will call this callback function
//         function(){
//             console.log("After calling the timer");
//         },5000);
//     //console.log("After calling the timer");
// }

// myFunction();