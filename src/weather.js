import React from "react";
import "./App.css"

import "./weather.css"

function weather(props) {
    return(
        <div>
            <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="" className="icon"></img>
            <h1>{props.name}</h1>
            <p>🌡️ - Temperature: {Math.round(props.temp)} °C</p>
            <p>💧 - Humidity: {Math.round(props.hum)}%</p>
            <p>🍃 - Pressure: {Math.round(props.pressure)}hPa</p>
            <p>📉 - Lowest Temperature: {Math.round(props.temp_min)} °C</p>
            <p>📈 - Highest Temperature: {Math.round(props.temp_max)} °C</p>
            <p>❔ - Feels like: {Math.round(props.feels_like)} °C</p>
        </div>
        
    );
}

export default weather;