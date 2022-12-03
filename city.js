var city_name = document.getElementById("city_name");
var find_city = document.getElementById("find_city");

var city = document.getElementById("city");
var country = document.getElementById("country");
var temperature = document.getElementById("temperature");
var min_temperature = document.getElementById("min_temperature");
var max_temperature = document.getElementById("max_temperature");
var real_feel = document.getElementById("real_feel");
var humidity = document.getElementById("humidity");
var pressure = document.getElementById("pressure");
var wind = document.getElementById("wind");

find_city.addEventListener("click", () => {
  var cityname = city_name.value;

  if (!cityname || cityname.trim().length === 0) {
    alert("Enter a valid city name");
    return;
  }

  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityname +
    "&units=metric&appid=2e77ff436ee024ef641852efddfc5426";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.lastElementChild.innerText = data.name;
      temperature.lastElementChild.innerText = data.main.temp;
      min_temperature.lastElementChild.innerText = data.main.temp_min + "°C";
      max_temperature.lastElementChild.innerText = data.main.temp_max + "°C";
      real_feel.lastElementChild.innerText = data.main.feels_like + "°C";
      humidity.lastElementChild.innerText = data.main.humidity + "%";
      pressure.lastElementChild.innerText = data.main.pressure + " hPa";
      wind.lastElementChild.innerText =
        data.wind.speed + " m/s, " + data.wind.deg + " deg";

      fetch("https://restcountries.com/v3.1/alpha/" + data.sys.country).then(
        (response) =>
          response.json().then((data) => {
            country.lastElementChild.innerText = data[0].name.common;
          })
      );
      console.log(data);
    });
});
