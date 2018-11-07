import React, { Component } from 'react';
import './App.css';
import FilterListContainer from './components/filterListContainer'
import { Route } from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import HomeDetailsContainer from './components/HomeDetailsContainer';




class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <main>
        <Route exact path="/" component={FilterListContainer} />
        <Route exact path="/rooms" component={HomeDetailsContainer} />
        </main>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
