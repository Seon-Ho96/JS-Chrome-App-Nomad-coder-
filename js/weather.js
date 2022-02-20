const gps = document.querySelector("#gps");
const API_KEY = '5750bef90c8c9f02577d01214d395aff';
function onGeoOK(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in,", lat, lng);
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then(reponse => reponse.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    })
}
function onGEoError(){
    alert("Can't find you. No weather for you.")

}

navigator.geolocation.getCurrentPosition(onGeoOK, onGEoError)