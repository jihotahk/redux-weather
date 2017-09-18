import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart color="green" data={temps} units="&#8457;" /></td>
        <td><Chart color="red" data={pressure} units=" hPa"/></td>
        <td><Chart color="blue" data={humidity} units="%"/></td>
      </tr>
    );
  }

  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// state.weather set from reducers/index.js - set to term 'weather'
// function mapStateToProps(state) {
//   return { weather: state.weather };
// }  ES6 SHORTHAND:
function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps, null)(WeatherList);