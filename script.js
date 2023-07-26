 

const apiKey = "c57ba05eb97fd445061f54a80d1a7ca7";
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const temperature = document.querySelector(".temperature");
const myCity = document.querySelector(".location");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weather = document.querySelector(".weather");
const fouvoriteUi = document.querySelector(".favourite");
const searchInput = document.querySelector(".searchInput");
const searchWeather = document.querySelector(".search");



async function fetchWeatherData(city) {
  const myFav = JSON.parse(localStorage.getItem("favorites")) || [];
  try {
    const response = await fetch(url + city + `&appid=${apiKey}`);
    const data = await response.json();

  const weatherData = {
      weather: data.weather[0].description,
      temperature: Math.round(data.main.temp),
      myCity: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      wind: data.wind.speed,
    };

    weather.textContent = weatherData.weather;
    temperature.textContent = weatherData.temperature + " °C";
    myCity.textContent += weatherData.myCity + ", " + weatherData.country;
    humidity.textContent = weatherData.humidity + "%";
    wind.textContent = weatherData.wind + " km/h";
    localStorage.setItem("favorites", JSON.stringify(myFav));
    return weatherData;

  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }};

  searchWeather.addEventListener("click", () => {
    if (searchInput.value === "") {
      alert("please enter a city name")
      return
    } 
    fetchWeatherData(searchInput.value);
    fetchWeatherData(weatherData);
    searchInput.value = "";
  });

const favBtn = document.querySelector(".favBtn");

favBtn.addEventListener("click", async () => {
  const myFav = JSON.parse(localStorage.getItem("favorites")) || [];
  const city = searchInput.value;
  try {
    const weatherData = await fetchWeatherData(city);
    myFav.push(weatherData);
    localStorage.setItem("favorites", JSON.stringify(myFav));
    searchInput.value = "";
  } catch (error) {
    console.error('Error fetching and adding weather data to favorites:', error);
  }
});
const myFavCity = () => {
  const myFav = JSON.parse(localStorage.getItem("favorites")) || [];
  fouvoriteUi.innerHTML = ""; 

const favWeather = myFav.forEach(element => {
  fouvoriteUi.innerHTML += ` <div class="fav">
  <h3 class="close">x</h3>
  <div class="countryText">
  <h4>Weather of ${element.myCity}, ${element.country}</h4> </div>
  <div class="elements"><div class="new">
<h2 class="temperature tem2">${element.temperature}°C</h2>
<p >Temperature</p> 
  </div>
<div class="new">
  <h2 class="humidity">${element.humidity}%</h2> 
  <p >Humidity</p> 
</div>

<div class="new">
  <h2 class="wind">${element.wind}km/h</h2> 
  <p >wind Speed</p> 
</div>
</div>
</div>`
});
}
myFavCity();