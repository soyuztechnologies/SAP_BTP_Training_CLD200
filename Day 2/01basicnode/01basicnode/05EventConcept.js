//In-built node modules inside NodeJS
//which auto install when we install node

var utils = require('util');
var events = require('events');

//define class with name attribute
var Pokymon = function(name){
    this.name = name;
};


//add event handler capabilities to the class
utils.extends(Pokymon, events.EventEmitter);

//Create class  objects
var raichu = new Pokymon('Raichu');
var pikachu = new Pokymon('Pikachu');

//Put these objects inside array
var myPokies = [raichu, pikachu];

//Loop over each object to add an event handler
myPokies.forEach(element => {
    element.on('jump', (length) => {
        console.log(element.name + " is jumped " + length + " km");
    });
});

pikachu.emit('jump', 20);
raichu.emit('jump', 15);



//Event concept in node
// var events = require('events');
// var anubhav = new events.EventEmitter();

// anubhav.on('speak', () => {
//     console.log("hey folks, how are you 😊");
// });

// anubhav.emit('speak');