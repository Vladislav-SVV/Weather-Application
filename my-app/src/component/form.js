import React from "react";
import {func} from 'prop-types';
const Form = props => (
  <div>
    <form onClick={props.service} >
      <div className='styleRad'>
        <input type="radio" name="service" value="1" />
        <label htmlFor="radio">ApiXU</label>
        <div className='styleRad1'>
          <input type="radio" name="service" value="2" />
          <label htmlFor="radio">Weather Map</label>
        </div>
      </div>
    </form>
    <form onSubmit={props.weathterMethod}>
      <input type="text" name="city" placeholder="Город" />
      <button >Get  weather</button>
    </form>
  </div>

);

Form.propTypes = {
  service: func,
  weathterMethod: func
};
export default Form;