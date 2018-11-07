import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterListContainer from './components/filterListContainer'
import { Route } from 'react-router-dom'
//import HomeDetailsContainer from './components/HomeDetailsContainer';
import { Provider } from 'react-redux'
import store from './store'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <main>
        <Route path="/" component={FilterListContainer} />
        </main>
      </div>
      </Provider>
    );
  }
}

export default App;
