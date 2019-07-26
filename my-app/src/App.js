import React from "react"
import Info from "./component/info"
import Form from "./component/form"
import Weather from "./component/weather"

const service = document.getElementsByName('service');
let KEY = '767651bdaa3d4d7df7c7ecfe0a22b497';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      temperature: undefined,
      service: undefined,
      city: undefined,
      pressure: undefined,
      country: undefined,
      error: "Выберите сервис погоды",
      flag : undefined,
      time : new Date()
    }
    this.rendering = this.rendering.bind(this);
    document.addEventListener('DOMContentLoaded', this.rendering);    
  }


  chooseService = (event) => {
    event.preventDefault();
    for (var i=0; i<service.length; i++) {
      if(service[i].checked && i === 1) {
        KEY = '767651bdaa3d4d7df7c7ecfe0a22b497';
        this.setState({
          temperature: undefined,
          service: undefined,
          city: undefined,
          pressure: undefined,
          country: undefined,
          error: "Выбран сервис WeatherMap",
          flag : 0,
        })
      } else if (service[i].checked && i === 0) {
        KEY = 'f59463798cb24ec18c4125132192307';
        this.setState({
          temperature: undefined,
          service: undefined,
          city: undefined,
          pressure: undefined,
          country: undefined,
          error: "Выбран сервис ApiXu",
          flag : 1,
        })
      } 
    }
  }
  
  rendering(){
    let time = Date.parse(new Date())/1000;
    let returnObj = JSON.parse(localStorage.getItem("myKey"));
    var newTime = Date.parse(localStorage.getItem("time"))/1000;
    let sec = (time - newTime)/3600;
    console.log(Math.floor(sec%24));
    if (Math.floor(sec%24 < 2)) {
      this.setState({
        temperature: returnObj.temperature,
        service: returnObj.service,
        city: returnObj.city,
        pressure: returnObj.pressure,
        country: returnObj.country,
        error: undefined,
      });
    } else {
      localStorage.removeItem("myKey");
      localStorage.removeItem("time");
    }   
  }


  saveLocalStorage = (states) => {   
    this.setState({
      time: new Date()
    })
    var serialObj = JSON.stringify(states);
    localStorage.setItem("myKey", serialObj);
    localStorage.setItem("time", this.state.time)
  }

  getWeather = async (event) => {
      event.preventDefault();
      var city = event.target.elements.city.value;

      if((city && this.state.flag === 0) && (isNaN(city)) ){
        try{
          let apiUrl = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`)
          var data = await apiUrl.json();
        }catch(e){
          this.setState ({
            error: e.name
          })
        }   
        try{
          this.setState({
            service: "WeatherMap",
            temperature: data.main.temp,
            city: data.name,
            pressure: data.main.pressure,
            country: data.sys.country,
            error: undefined,
          });
          this.saveLocalStorage(this.state);
        }catch(e){
          this.checkError(e)
        }    
      } else if((city && this.state.flag === 1) && (isNaN(city)) ){
        try{
          let apiUrl = await fetch (`http://api.apixu.com/v1/current.json?key=${KEY}&q=${city}`)
          data = await apiUrl.json();
        }catch(e){
          this.setState ({
            error: e.name
          })
        }
        try{
          this.setState({
            service: "ApiXu",
            temperature: data.current.temp_c,
            city: data.location.name,
            pressure: data.current.pressure_mb,
            country: data.location.country,
            error: undefined  
          });
          this.saveLocalStorage(this.state);
        }catch(e){
          this.checkError(e)
        }     
      } else {
        this.setState({
          service: undefined,
          temperature: undefined,
          city: undefined,
          pressure: undefined,
          country: undefined,
          error: "Введите название города"
      })
      }
    }
    
  checkError(e) {
    if(e.name === 'TypeError'){
      this.setState({
        error: "Некорректное название города!"
      })
    } else {
      this.setState({
        error: "Повторите попытку!"
      })
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className='container'>
            <div className="row">
              <div className="col-xs-5 col-md-5 col-sm-7 col-lg-5 info" >
                <Info/>
              </div>
              <div className="col-xs-7 col-md-7 col-sm-5 col-lg-7 form">
                <Form weathterMethod={this.getWeather} service={this.chooseService}/>
                <Weather
                  service ={this.state.service}
                  temperature={this.state.temperature}
                  city={this.state.city}
                  pressure={this.state.pressure}
                  country={this.state.country}
                  error={this.state.error}
                  flag ={this.state.flag}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App