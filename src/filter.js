import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux'

export default class Filter extends Component {



updateSelection(event) {
  this.State({value: event.target.value})
}




render() {
  return (
    <div className="App">
    <select value={this.state.value} onChange={this.updateSelection}>
    <option value="">-- Pick A City --</option>
    {this.state.map(cities => {
      return (
        <option value={cities.city}>{cities.city}</option>
      )
    })}
    </select>
    </div>
  );
}
}
