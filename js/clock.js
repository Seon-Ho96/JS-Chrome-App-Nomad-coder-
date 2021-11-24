const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();

//일정 간격마다 실행시키는 함수
setInterval(getClock, 1000); //5000ms

//일정 시간 후 실행(재 실행 x)
// setTimeout(sayHello, 5000);

// padStart, padEnd : string이 원하는 길이가 되도록 만들기 위해 
//원하는 길이가 충족되지 않을 경우 앞이나 뒤에 string을 붙이는 함수
