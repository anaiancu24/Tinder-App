import React, { Component } from 'react';
import './App.css';
import Filter from './filter.js';
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
<<<<<<< HEAD
        <Filter/>
        <FilterListContainer />
=======
      <main>
        <Route path="/" component={FilterListContainer} />
        </main>
>>>>>>> f6352c72c67b7484c67b44766bc8cc005097968d
      </div>
      </Provider>
    );
  }
}

export default App;
