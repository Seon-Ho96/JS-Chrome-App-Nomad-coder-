const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("hello");
}

//일정 간격마다 실행시키는 함수
setInterval(sayHello, 5000); //5000ms