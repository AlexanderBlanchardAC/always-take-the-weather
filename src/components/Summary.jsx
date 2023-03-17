


const Summary = ({forecastData, degreeType}) => {

   const { temp, dt, desc, iconId } = forecastData;
   const icon = `owf owf-${iconId} owf-5zx`

   const celsius = Math.round(temp)
   const fahrenheit = Math.round(celsius * (9/5)) +32

   const theDate = new Date();
   theDate.setTime(dt * 1000);
   const showDay = { weekday: "long"};
   const showDate = { month: "short", day: "numeric"};
   const day = theDate.toLocaleString("en-GB", showDay);
   const date = theDate.toLocaleString("en-GB", showDate);
   let degCels = String.fromCodePoint(8451)
   let degFah = String.fromCodePoint(8457)

   const toCaps = (str) => {
        return str
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
   }

return(
   <>
        <div className="summaryForecast">
        <p>{day}</p>
        <p>{date}</p>
        <p>{degreeType === "celsius" ? `${celsius}${degCels}`  : `${fahrenheit}${degFah}`}</p>
        <i className={icon} style={{ fontsize: "7rem" }} />
        <p>{toCaps(desc)}</p>
            
       
       
        </div>
    
    </>
)

}

export default Summary;