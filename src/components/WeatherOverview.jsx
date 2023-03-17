
import React, { useState, useEffect } from "react";
import Summary from "./Summary";
import CurrentWeather from "./CurrentWeather";
import ToggleTemp from "./ToggleTemp";


const WeatherOverview = () => {

    const [city, setCity] = useState("London")
    
   
    const [forecastData, setForecastData] = useState([])
    const [weatherData, setWeatherData] = useState({})
    const [degreeType, setDegreeType] = useState("celsius")
    //const icon = `owf owf-${iconId} owf-5zx`
    const [error, setError] = useState(false)

    useEffect(() => {
        
      
        getWeather(city)
        getForecast(city)
    },[])


    const handleChange = (e) => {
        setCity(e.target.value)
    }
 
 
    const getForecast = async(city) => {
        try{
            const res =  await fetch(`https://api.openweathermap.org/data/2.5/forecast/?q=${city}&units=metric&appid=31c4ebae03d262c643e0abfd1af737b1`)
            if(res.status === 200) {
                setError(false)
                const response = await res.json() 
                const data = response.list
               .filter(day=> day.dt_txt.includes("00:00:00"))
                .map(item => ({
                        temp: item.main.temp,
                        dt: item.dt,
                        date: item.dt_txt,
                        title: item.weather[0].main,
                        desc: item.weather[0].description,
                        iconId: item.weather[0].id
                }));setForecastData(data)
                console.log(forecastData)
            }   
        }catch(error){
            console.log(error)
        }    
                

                
           
    }
//     const toCaps = (str) => {
//         return str
//         //.toLowerCase()
//         .split(" ")
//         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ")
//    }



 

    const getWeather = async(city) => {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=31c4ebae03d262c643e0abfd1af737b1`)
           if(res.status === 200){
            setError(false)
            const response = await res.json()
                setWeatherData({
                    temp: response.main.temp,
                    title: response.weather[0].main,
                    desc: response.weather[0].description,
                    iconId: response.weather[0].id,
                    feelsLike: response.main.feels_like,
                    tempMin: response.main.temp_min,
                    tempMax: response.main.temp_max,
                    city: response.name,
                    country: response.sys.country,
                    sunrise: response.sys.sunrise,
                    sunset: response.sys.sunset,
                    humidity: response.main.humidity,
                    wind: response.wind.speed
                });
                   return weatherData;   
            }else if(!weatherData){
                <p>Unable to find weather for this location</p>
                    
            }else{
                setError(true)
                alert("Sorry, there has been an error. Please try again")
                console.log(error)
                
            }
    }
           
            // let weatherData = {
            //     temp: response.main.temp,
            //     title: response.weather[0].main,
            //     desc: response.weather[0].description,
            //     iconId: response.weather[0].id,
            //     feelsLike: response.main.feels_like,
            //     tempMin: response.main.temp_min,
            //     tempMax: response.main.temp_max,
            //     city: response.name,
            //     country: response.sys.country,
            //     sunrise: response.sys.sunrise,
            //     sunset: response.sys.sunset,
            //     humidity: response.main.humidity,
            //     wind: response.wind.speed
            // }
           
       
            
           
    

    
    

   

    const handleSubmit = () => {
       
        getForecast(city) && getWeather(city)
        
    }

    const toggleDegrees = (e) => {
        setDegreeType(e.target.value)
    }





    return(
        <div className="overviewContainerMain">
                <div className="searchToggleAdditionalInfo">
                    <ToggleTemp degreeType={degreeType} setDegreeType={setDegreeType} updateDegreeType={toggleDegrees}/>
                    <div className="search">
                
                        <input type="text" onInput={handleChange} id="searchInput"/>
                        <button className="searchForecast" type="submit" onClick={handleSubmit}>Search</button>
                
                    </div>
                </div>


           
            {/* <div className="currentWeatherMain"> */}
                 
              <div className="mainCurrentWeather">
                <CurrentWeather weatherData={weatherData} degreeType={degreeType} />
              </div>
              
            {/* </div> */}
                
            <div className="forecastContainerMain">
                {forecastData.map((item, index) => (
                    <Summary forecastData={item} key={item.dt} degreeType={degreeType}/>
                ))}
            </div> 
        </div>
    )



}
export default WeatherOverview;