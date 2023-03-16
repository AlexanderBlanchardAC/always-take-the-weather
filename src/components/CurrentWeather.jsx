import thermometerCold from "../assets/images/thermometerCold.png";
import thermometerHot from "../assets/images/thermometerHot.png";
import sunriseIcon from "../assets/images/sunriseIcon.png";
import sunsetIcon from "../assets/images/sunsetIcon.png";
import windSock from "../assets/images/windSock.png";
import humidityIcon from "../assets/images/humidityIcon.png";
import tempFeelsLike from "../assets/images/tempFeelsLike.png";

const CurrentWeather = ({ weatherData, degreeType,  }) => {
   
    const {temp, city, country, iconId, title, desc, feelsLike, tempMin, tempMax, sunrise, sunset, humidity, wind } = weatherData
    const icon = `owf owf-${iconId} owf-5zx`

   

   const sunriseConvert = (x) => {
    let date = new Date(x * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let formatTime = hours + ":" + minutes.toString().padStart(2, "0")
    return formatTime
   }

   let sunriseTime = sunriseConvert(sunrise)
   let sunsetTime = sunriseConvert(sunset)

    const celsius = Math.round(temp)
    const fahrenheit = Math.round(celsius * (9/5)) + 32

    const minCelsius = Math.round(tempMin)
   const minFahrenheit = Math.round(minCelsius * (9/5)) +32

   const maxCelsius = Math.round(tempMax)
  const maxFahrenheit = Math.round(maxCelsius * (9/5)) +32

   const feelsLikeCelsius = Math.round(feelsLike)
   const feelsLikeFahrenheit = Math.round(feelsLikeCelsius * (9/5)) +32

  let degCels = String.fromCodePoint(8451)
 let degFah = String.fromCodePoint(8457)

    return(
        <>
       
             <div className="mainInfo">
                <h4 className="title">Current Weather</h4>
                <p className="currentTemp">{degreeType === "celsius" ? `${celsius}${degCels}` : `${fahrenheit}${degFah}`}</p>
                <p className="location">{city}, {country}</p>

                 <i id="weatherIcon" className={icon} style={{fontsize: "10rem"}} /> 
                <div className="currentWeatherDesc">
                    <p>{title} - {desc}</p>
                </div>
            </div>
            <div className="additionalInfo">
                <div className="moreTempInfo">
                     <div className="minMaxTemp">
                         <p><img className="thermometerCold" src={thermometerCold} alt="coldThermometer"/>Min Temp: {degreeType === "celsius" ? `${minCelsius}${degCels}` : `${minFahrenheit}${degFah}`}</p>
                        <p><img className="thermometerHot" src={thermometerHot} alt="hotThermometer"/> Max Temp: {degreeType === "celsius" ? `${maxCelsius}${degCels}` : `${maxFahrenheit}${degFah}`}</p>
                    </div>
                    <div className="feelsLike">
                        <p><img className="feelsLikeTemp" src={tempFeelsLike} alt="tempFeelsLike" /> Feels Like: {degreeType === "celsius" ? `${feelsLikeCelsius}${degCels}` : `${feelsLikeFahrenheit}${degFah}`}</p>
                   </div> 
                </div>
                <div className="sunriseSunset">
                     <p><img className="sunriseIcon" src={sunriseIcon} alt="sunriseIcon" /> Sunrise: {sunriseTime} </p>
                    <p><img className="sunsetIcon" src={sunsetIcon} alt="sunsetIcon" /> Sunset: {sunsetTime}</p> 
                </div>
                <div className="additionalWeatherInfo">
                <div className="additionalWeatherInfo1">
                    <p><img className="humidityIcon" src={humidityIcon} alt="humidityIcon" /> <br />  Humidity: {humidity}%</p>
                </div>
                <div className="additionalWeatherInfo2">
                    <p><img className="windSock" src={windSock} alt="windSockIcon" /> <br/> Wind Speed: {Math.round(wind)}mph</p>
                </div>
                </div>

            </div>  
       
        </>
    )



}

export default CurrentWeather;