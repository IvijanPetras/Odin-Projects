import search from "./assets/search.svg"
import getWeatherData from './weatherData'
import './styles/main.scss'
import cloud from './assets/cloud.svg'

const waetherImg = document.querySelector('#weather-img')
const cityName = document.querySelector('#city-name')
const conutryName = document.querySelector('#country-name')
const weatherDescription = document.querySelector('#weather-description')
const temperature = document.querySelector('#temperature')
const windSpeed = document.querySelector('#wind-speed')
const searchImg = document.querySelector('#search-img')
const input = document.querySelector('#search-input')
searchImg.src = search;

searchImg.addEventListener('click', async () => {
    let data = await getWeatherData(input.value)
    cityName.textContent = data.name
    conutryName.textContent = data.sys.country
    weatherDescription.textContent = data.weather[0].main
    temperature.textContent = Math.round(data.main.temp).toString() + '&#x2103;'
    windSpeed.textContent = Math.round(data.wind.speed).toString() + ' km/h'
})


