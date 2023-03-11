import search from "./assets/search.svg"

function renderSerachBar() {
  const API_KEY = 'e539254f1359ed3a0388a18c24f858bb'

  const geoLocationLatLon = async () => {
      let geoPosition = `http://api.openweathermap.org/geo/1.0/direct?q=koprivnica&limit=1&appid=${API_KEY}`
      
    try{
        let response = await fetch(geoPosition, {mode: 'cors'})
        let content = await response.json()
         
         return content
    } catch(error){
        console.log(error)
    }
  }
  const getWeatherData = async () => {
    let geo = await geoLocationLatLon();
    const {lat,lon} = geo[0]
    console.log(lat,lon);
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=46.16278&lon=16.8275&appid=${API_KEY}&units=metric`
    try{
       let response = await fetch(geoPosition, {mode:'cors'})
       let content = await response.json()
        return content
    } catch (error){
        console.log(error)
    }
  }

  const searchImg = document.querySelector("#search-img")
  searchImg.src = search
  
  

   const bla = geoLocationLatLon().then((data) => {
    return data
   }) 

getWeatherData()
}

export default renderSerachBar
