function placeOrder(orderNumber){
    console.log("Customer order:",orderNumber);

    cookAndDeliverFood(function () {
        console.log("Deliverd Food Order:",orderNumber);
    });
};

//5 second delay for making food 
function cookAndDeliverFood(callback){
    console.log("Making Order..");
    setTimeout(callback,5000);
}
//Users web requests
placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(4);
placeOrder(5);
placeOrder(6);
