function User(){
    this.name ="";
    this.life =100;
    this.giveLife = function givelife(targetPlayer){
        targetPlayer.life += 1;
        console.log(this.name +  " gave 1 Life to " + targetPlayer.name);
    }

}
var User1 = new User();
var User2 = new User();
User1.name = "Anuj";
User2.name = "Homie";

User1.giveLife(User2);
console.log("User 1 "+ User1.life);
console.log("User 2 "+ User2.life);

User.prototype.uppercut = function uppercut(targetPlayer){
    targetPlayer.life -= 3;
    console.log(this.name +  " uppercutted " + targetPlayer.name);
};

User1.uppercut(User2);
console.log("User 1 "+ User1.life);
console.log("User 2 "+ User2.life);

//add property to objects
User.prototype.magic = 60;
console.log(User1.magic);
console.log(User2.magic);
