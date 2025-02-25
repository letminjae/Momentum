const API_KEY = process.env.WEATHER_API_KEY

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
      city.innerText = `Current Location : ${data.name}`;
      weather.innerText = `Weather : ${data.weather[0].main} / Temp : ${data.main.temp}°C`;
    });
}

function onGeoError() {
  alert("I can't");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
