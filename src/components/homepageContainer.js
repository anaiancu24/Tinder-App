import React, {Component} from 'react';
import TravelerButton from './travelerButton';
import HomeownerButton from './homeOwnerButton';



class HomepageContainer extends Component {
  
  render() {
    return (
      <div>
          <h1 className="title"> WELCOME!!</h1>
          <h2>Are you a traveller or a homeowner?</h2>
      <TravelerButton/>
      <HomeownerButton/>
      </div>
    )
  }
}

export default HomepageContainer