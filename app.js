
























//function
function plus(firstnumber, secondnumber){
    console.log(firstnumber + secondnumber);
}
function divide(a, b){
    console.log(a / b);
}

plus(8, 60);
divide(50, 4);

const player = {
    name : 'seonho',
    sayHello : function(otherPersonsName){
        console.log("hello " + otherPersonsName + " nice to meet you");
    }
}

console.log(player.name);
player.sayHello("seo");