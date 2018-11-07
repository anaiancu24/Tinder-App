import React, {Component} from 'react';
import TravelerButton from './travelerButton';
import HomeownerButton from './homeOwnerButton';



class HomepageContainer extends Component {
  
  render() {
    return (
      <div>
      <TravelerButton/>
      <HomeownerButton/>
      </div>
    )
  }
}

export default HomepageContainer