import React, { Component } from 'react';
import './App.css';
import Filter from './filter.js';
import FilterListContainer from './components/filterListContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Filter/>
        <FilterListContainer />
      </div>
    );
  }
}

export default App;
