import React from "react";

const Weather = props => (
    <div>
        {props.city &&
            <div div className="weath">
                <p>Service: {props.service}</p>
                <p>City: {props.city}</p>
                <p>Country: {props.country}</p>
                <p>temperature: {props.temperature}</p>
                <p>Pressure: {props.pressure}</p>
            </div>
        }
        <p>{props.error}</p>
    </div>
)

export default Weather