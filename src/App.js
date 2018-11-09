import React, { Component } from 'react';
import './App.css';
import FilterListContainer from './components/filterListContainer'
import { Route } from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import HomeDetailsContainer from './components/HomeDetailsContainer';
import HomepageContainer from './components/homepageContainer'
import DashboardContainer from './components/DashboardContainer'
import hostme from './images/hostme.png'
import MessageDetailContainer from './components/MessageDetailContainer';
import MessageListContainer from './components/MessageListContainer';







class App extends Component {
  render() {
    return (
      <div>
      
          
      <div className="App">
      
   

      <BrowserRouter>
      <main>
      <div className="header">
                <img className = "logo" src={hostme} alt="logo" />
                </div>
        
      <Route exact path="/" component={HomepageContainer} />
      

<Route exact path="/rooms" component={FilterListContainer} />
<Route exact path="/room" component={HomeDetailsContainer} />
<Route exact path="/homeowner" component={DashboardContainer} />
<Route exact path="/message-list" component={MessageListContainer} />

<Route exact path="/message" component={MessageDetailContainer} />



        </main>
        </BrowserRouter>

      </div>
      </div>
    );
  }
}

export default App;
