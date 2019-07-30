import React from "react";
import {string, number} from 'prop-types';

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
);

Weather.propTypes = {
  city: string,
  error: string,
  country: string,
  service: string,
  pressure: number,
  temperature: number
};

export default Weather;