import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const data = cityData.list[0].main;
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>{data.temp}</td>
        <td>{data.pressure}</td>
        <td>{data.humidity}</td>
      </tr>
    );
  }

  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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