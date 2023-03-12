const API_KEY = "e539254f1359ed3a0388a18c24f858bb";

const getWeatherData = async (city) => {
  if(city == '') return
  let geoPosition = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
  try {
    let responseGeo = await fetch(geoPosition, { mode: "cors" });
    let contentGeo = await responseGeo.json();
    const { lat, lon } = contentGeo[0];
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}8&lon=${lon}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url, { mode: "cors" });
    let content = await response.json();
    console.log(content);
    return content;
  } catch (error) {
    console.log(error);
  }
};

getWeatherData('koprivnica')

export default getWeatherData 
