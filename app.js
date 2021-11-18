// const and let
const a = 5; // const : 변경 불가
const b = 2; // != "2"

let myName = "seonho"; // let : 변경 가능

var old = 'old version'; // 의도치 않게 값이 
                        //  변경되는 것을 막기위해 const let 사용

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello" + myName);

// a = 10 ; error

myName = "sh";

console.log('your new name is '+ myName);