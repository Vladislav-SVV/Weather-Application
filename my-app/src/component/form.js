import React from "react";

const Form = props => (
    <div>
        <form onClick={props.service} >
            <div className='styleRad'>
                <input type ="radio" name="service" value="1"/>
                <label for="radio">ApiXU</label>
                <div className='styleRad1'>
                    <input type ="radio" name="service" value="2"/>
                    <label for="radio">Weather Map</label>
                </div>
            </div>
        </form>
        <form onSubmit={props.weathterMethod}>
        <input type="text" name="city" placeholder="Город"/>
        <button >Get  weather</button>
    </form>
    </div> 
    
)

export default Form