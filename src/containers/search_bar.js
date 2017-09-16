import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather} from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term : '' };

    // replace unbound instance to an instance bound to SearchBar
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    // callback function. 'this' needs to be bound first
    this.setState({ term: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    // fetch weather data via action creator
    this.props.fetchWeather(this.state.term);

    //clear out search term after submit
    this.setState({ term: '' });
  }

  render() {
    return(
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Get a five day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="submit">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);