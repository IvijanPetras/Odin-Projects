import search from "./assets/search.svg"
import getWeatherData from './weatherData'
import './styles/main.scss'
import cloud from './assets/cloud.svg'

const weatherImg = document.querySelector('#weather-img')
const cityName = document.querySelector('#city-name')
const conutryName = document.querySelector('#country-name')
const weatherDescription = document.querySelector('#weather-description')
const temperature = document.querySelector('#temperature')
const windSpeed = document.querySelector('#wind-speed')
const searchImg = document.querySelector('#search-img')
const input = document.querySelector('#search-input')
searchImg.src = search;

function animation(){
    weatherImg.classList.add('animate');
  setTimeout(function() {
    weatherImg.classList.remove('animate');
  }, 1000);
}

const displayData = async () => {
    const data = await getWeatherData(input.value)
    const wetaherIcon = data.weather[0].icon
    console.log(data)
    weatherImg.src = `https://openweathermap.org/img/wn/${wetaherIcon}@2x.png`
    cityName.textContent = data.name
    conutryName.textContent = data.sys.country
    weatherDescription.textContent = data.weather[0].main
    temperature.textContent = Math.round(data.main.temp).toString() + '\u00B0C';
    windSpeed.textContent = 'Wind speed: ' + Math.round(data.wind.speed).toString() + ' km/h'
    animation()
}

async function eventHandler() {
    await displayData()
    input.value = ''
}

searchImg.addEventListener('click', async () => {
    await eventHandler()
})

input.addEventListener('keyup', async (e) => {
    if(e.key === 'Enter') {
        eventHandler()
    }
    
})


