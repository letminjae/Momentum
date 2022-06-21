const API_KEY = "a6188d620d2240b550184090a3bae87d";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log("you live it", lat, lon, url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child")
      const weather = document.querySelector("#weather span:last-child")
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
    });
}

function onGeoError() {
  alert("I can't");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
