/**
 * Created by anujr on 02-Nov-16.
 */
console.log('New node');
var person ={
    firstName: "Anuj",
    lastName: "Raval",
    age: 20
};
console.log(person);
 function addnumbers(a , b){
     return a+b;
}
console.log("Addition of two numbers is :" + addnumbers(5,5));

console.log(19 =="19"); //true(Integer == String)//compares value
console.log(19 ==="19"); //false(Integer===String)//compares value+type
