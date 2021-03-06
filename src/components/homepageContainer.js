import React, { Component } from 'react';
import TravelerButton from './travelerButton';
import HomeownerButton from './homeOwnerButton';
import hostme from '../images/hostme.png'




class HomepageContainer extends Component {

  render() {
    return (
      <div className="background">
      <body>
      <div className="body">
        <header className="header">
          <img className="logo" src={hostme} alt="logo" />
        </header>

        <div className="texts">

          <div className="text1">
            <h2>Are you a traveller</h2>

          </div>

          <div className="text2">
            <h2>or an owner?</h2>
          </div>
          
        </div>
        

        <TravelerButton />
        <HomeownerButton />
      </div>
      </body>
      </div>
    )
  }
}

export default HomepageContainer