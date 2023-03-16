import React from "react";

const ToggleTemp = ({degreeType, setDegreeType, updateDegreeType}) => {


return (
    <div className="toggleTempContainer">
        <div className="degreesForm"> 
            <input 
            onChange={updateDegreeType}
             checked={degreeType === "celsius"}
              value= "celsius" type="radio"
               className="celsiusToggle" name="degreeType"
                id="celsius"
                />
            <label htmlFor="celsius">Celsius</label>
            <input 
                type="radio"
                onChange={updateDegreeType}
                checked={degreeType === "fahrenheit"}
                value="fahrenheit"
                className="fahrenheitToggle"
                name="degreeType"
                id="fahrenheit"
                />
            <label htmlFor="fahrenheit">Fahrenheit</label>

        </div>

    </div>
)
}

export default ToggleTemp;