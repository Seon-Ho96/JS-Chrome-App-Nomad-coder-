const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;

}

getClock();

//setTimeout( f , seconds )

//일정 간격마다 실행시키는 함수
setInterval(getClock, 1000); //5000ms

let _100 = "2";

// console.log(_100);

