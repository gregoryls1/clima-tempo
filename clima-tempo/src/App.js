import React, { Component } from 'react';

import Titles from './Components/Titles.js/Title'
import Form from './Components/Form/Form'
import Weather from './Components/Weather/weather'

import './App.css';

const API_KEY = '380b3bd9d718619e58e2ccbc1b4882cf'

class App extends Component {

  state = {
    temperature: null,
    city: null,
    country: null,
    humidity: null,
    description: null,
    error: null
  }

  getWeather = async (e) => {
    e.preventDefault()

    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)

    const data = await api.json()
    if (city && country) {

      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Por favor, digite Cidade e País'
      })
    }
  }
  render() {
    return (
      <div className="App container">
        <div className="col-12 col-md-6 offset-md-3">
          <Titles />
          <Form getWeather={this.getWeather} />
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;
