const API_KEY = "e539254f1359ed3a0388a18c24f858bb";

const getWeatherData = async (city) => {
  if (!city || city.trim() === '') {
    throw new Error('Please enter a valid city name');
  }

  const geoPositionUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

  try {
    const responseGeo = await fetch(geoPositionUrl, { mode: 'cors' });
    const contentGeo = await responseGeo.json();

    const { lat, lon } = contentGeo[0];

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const response = await fetch(weatherUrl, { mode: 'cors' });
    const content = await response.json();

    return content;
  } catch (error) {
    console.log(error);
    throw new Error('An error occurred while fetching weather data. Please try again later.');
  }
};


getWeatherData('koprivnica')

export default getWeatherData 
