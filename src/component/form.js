import React from 'react';
import PropTypes from 'prop-types';

const Form = props => (
  <div>
    <form onClick={props.service}>
      <div className="styleRad">
        <input type="radio" name="service" value="1" />
        <label htmlFor="radio">ApiXU</label>
        <div className="styleRad1">
          <input type="radio" name="service" value="2" />
          <label htmlFor="radio">Weather Map</label>
        </div>
      </div>
    </form>
    <form onSubmit={props.weathterMethod}>
      <input type="text" name="city" placeholder="Город" />
      <button type="submit">Get  weather</button>
    </form>
  </div>

);

Form.propTypes = {
  service: PropTypes.func.isRequired,
  weathterMethod: PropTypes.func.isRequired,
};

export default Form;
