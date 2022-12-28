let lat;
let lon;
const apiKey = "3cbb3085af80347a0c45a622642f6789";

const startApp = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;

      console.log("lat: " + lat, "lon: " + lon);

      getWeatherData();
    });
  }
};

const getWeatherData = () => {
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  console.log(url);

  fetch(url).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      updateWeatherData(data);
    });
  });
};

const updateWeatherData = (data) => {
  const temp = data.main.temp;
  document.getElementById("temp").innerHTML = temp + " °C";

  const humidity = data.main.humidity;
  document.getElementById("humidity").innerHTML = humidity + " %";

  const pressure = data.main.pressure;
  document.getElementById("pressure").innerHTML = pressure + " hPa";

  const clouds = data.clouds.all;
  document.getElementById("clouds").innerHTML = clouds + " %";

  const windSpeed = data.wind.speed;
  document.getElementById("windSpeed").innerHTML = windSpeed + " km/h";

  const sunset = new Date(data.sys.sunset * 1000);
  document.getElementById("sunset").innerHTML =
    sunset.getHours() + ":" + sunset.getMinutes();

  const sunrise = new Date(data.sys.sunrise * 1000);
  document.getElementById("sunrise").innerHTML =
    sunrise.getHours() + ":" + sunrise.getMinutes();

  const imgUrl =
    "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
  document.getElementById("currentWeatherImg").setAttribute("src", imgUrl);

  const city = data.name;
  const locationLink = document.getElementById("locationLink");
  locationLink.innerHTML = city;
};
