const clock = document.querySelector("h2#clock");

function getClock(){
    const today = new Date();
    const xmas = new Date(today.getFullYear(),11,25)
    const gap = xmas.getTime() - today.getTime();
    const day = Math.floor(gap/(1000*60*60*24));
    const hours = String(Math.floor((gap/(1000*60*60))%24)).padStart(2,"0");
    const minutes = String(Math.floor((gap/(1000*60))%60)).padStart(2,"0");
    const seconds =String(Math.floor((gap/(1000))%60)).padStart(2,"0");
    clock.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;

}

getClock();

//일정 간격마다 실행시키는 함수
setInterval(getClock, 1000); //5000ms

