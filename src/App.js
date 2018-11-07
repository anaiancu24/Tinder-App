import React, { Component } from 'react';
import './App.css';
import FilterListContainer from './components/filterListContainer'
import { Route } from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import HomeDetailsContainer from './components/HomeDetailsContainer';
import HomepageContainer from './components/homepageContainer'





class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <main>
      <Route exact path="/" component={HomepageContainer} />

<Route exact path="/rooms" component={FilterListContainer} />
<Route exact path="/room" component={HomeDetailsContainer} />
        </main>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
