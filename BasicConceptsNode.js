/**
 * Created by anujr on 02-Nov-16.
 */
1.
console.log('New node');
var person ={
    firstName: "Anuj",
    lastName: "Raval",
    age: 20
};

2.
console.log(person);
 function addnumbers(a , b){
     return a+b;
}
console.log("Addition of two numbers is :" + addnumbers(5,5));

3.
console.log(19 =="19"); //true(Integer == String)//compares value
console.log(19 ==="19"); //false(Integer===String)//compares value+type

4.
var anuj={
    printFirstName: function(){
        console.log("My name is Anuj");
        console.log(this === anuj);//true
    }
};
anuj.printFirstName();
//default function is global
function  doSomethingWorthless(){
    console.log("This Function is worthless");
    console.log(this === global);//true
}
doSomethingWorthless();
