 

const apiKey = "c57ba05eb97fd445061f54a80d1a7ca7";
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const temperature = document.querySelector(".temperature");
const myCity = document.querySelector(".location");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weather = document.querySelector(".weather");
const country = document.querySelector(".country");
const searchInput = document.querySelector(".searchInput");
const searchWeather = document.querySelector(".search");


async function fetchWeatherData(city) {
  const response = await fetch(url + city + `&appid=${apiKey}`);
    let data = await response.json();
    
    weather.textContent += data.weather[0].description;
    temperature.textContent += Math.round(data.main.temp) + " °C";
    myCity .textContent += data.name;
   country .textContent += data.sys.country;
    humidity.textContent += data.main.humidity + "%";
    wind.textContent += data.wind.speed + " km/h";
  }
  
  searchWeather.addEventListener("click", () =>{
    fetchWeatherData(searchInput.value)
    searchInput.value = "";
  })

 const myFav = [];
console.log(myFav);
 const favBtn = document.querySelector(".favBtn");

 favBtn.addEventListener("click", () => {
  console.log(myFav.push(fetchWeatherData()));
 })