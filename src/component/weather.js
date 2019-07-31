import React from 'react';
import PropTypes from 'prop-types';


const Weather = props => (
  <div>
    {props.city && (
      <div className="weath">
        <p>Service: {props.service}</p>
        <p>City: {props.city}</p>
        <p>Country: {props.country}</p>
        <p>temperature: {props.temperature}</p>
        <p>Pressure: {props.pressure}</p>
      </div>
    )}
    <p>{props.error}</p>
  </div>
);

Weather.propTypes = {
  city: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
  pressure: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
};

export default Weather;
