 

const apiKey = "c57ba05eb97fd445061f54a80d1a7ca7";
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

let temperature = document.querySelector(".temperature");
let myCity = document.querySelector(".location");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let weather = document.querySelector(".weather");
const searchInput = document.querySelector(".searchInput");
const searchWeather = document.querySelector(".search");


async function fetchWeatherData(city) {
  const response = await fetch(url + city + `&appid=${apiKey}`);
    let data = await response.json();

    weather.textContent += data.weather[0].description;
    temperature.textContent += Math.round(data.main.temp) + " °C";
    let country = data.sys.country;
    myCity.textContent += data.name + `, ${country}`;
    humidity.textContent += data.main.humidity + "%";
    wind.textContent += data.wind.speed + " km/h";
    
  return {
    weather: data.weather[0].description,
    temperature: Math.round(data.main.temp),
    city: data.name,
    country: country,
    humidity: data.main.humidity,
    wind: data.wind.speed,
  };
  }
  
  searchWeather.addEventListener("click", () =>{
    fetchWeatherData(searchInput.value)
    searchInput.value = "";
  })

  const myFav = JSON.parse(localStorage.getItem("favorites")) || [];

//  const myFav = [];
const favBtn = document.querySelector(".favBtn");

favBtn.addEventListener("click", async () => {
  const city = searchInput.value;
  const weatherData = await fetchWeatherData(city);
  myFav.push(weatherData);
  localStorage.setItem("favorites", JSON.stringify(myFav));
  searchInput.value = "";
});


const myFavCity = () => {
  
  // get data from local storage 

  // display data on my favourites
}