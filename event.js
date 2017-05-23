//node event emitter
var events = require('events');
var util = require('util');

var person = function(name){
  this.name=name;
};

util.inherits(person,events.EventEmitter);

var messi = new person('Leo Messi');
var dele = new person('Dele Ali');
var neymar = new person('Neymar Jr');
var people = [messi,dele,neymar];

people.forEach(function(person){
  person.on('speak',function(msg){
    console.log(person.name + ' said ' + msg);
  });
});

messi.emit('speak','Champions of Copa Del Rey & golden boot pichichi');
dele.emit('speak','We are second in premire league');
neymar.emit('speak','We are also second in la liga but Champions of Copa Del Rey')
