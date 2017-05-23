//node event emitter
var events = require('events');//will call out events
var util = require('util');//will call out util

//Will take the name as person
var person = function(name){
  this.name=name;
};

util.inherits(person,events.EventEmitter);//using EventEmitter we used/called events

//created some objects for person to emit
var messi = new person('Leo Messi');
var dele = new person('Dele Ali');
var neymar = new person('Neymar Jr');
var people = [messi,dele,neymar];

people.forEach(function(person){
  person.on('speak',function(msg){
    console.log(person.name + ' said ' + msg);//prints out what person emit using EventEmitter
  });
});

//person emitted
messi.emit('speak','Champions of Copa Del Rey & golden boot pichichi');
dele.emit('speak','We are second in premire league');
neymar.emit('speak','We are also second in la liga but Champions of Copa Del Rey')
