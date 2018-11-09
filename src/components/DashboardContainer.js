import React, {Component} from 'react'
import '../style/ho.css'
import '../style/navbar.css'
import '../style/ho-profile.css';
import NavBar from './navBarPro'
import IconFavPlace from '../images/icon-favorite.png'
import IconMyAppts from '../images/icon-my-home.png'
import ProfilePicture from '../images/photo-jasper-185x185.png'
import Stars3 from '../images/stars-3.png'

class DashboardContainer extends Component {

render() {
  return (
    <div className="container">
      <div classname="navbar">
        <NavBar />
      </div>
      <div className="profile-photo">
        <img src={ProfilePicture} alt="visual representation of user"/>
      </div>
      <div className="name">
        <h3>Jasper</h3>
      </div>
      <div className="ratingstars">
        <img src={Stars3} alt="rating"/>
      </div>
      <div className="dc-icons-large">
        <div className="icon-favorite">
          <div><img src={IconFavPlace} alt="icon favorite places"/></div>
          <h7>FAVORITE <br/> PLACE</h7>
        </div>
        <div className="icon-my-appt">
          <img src={IconMyAppts} alt="icon my appartments"/>
          <h7>MY <br/> APPARTMENTS</h7>
        </div>
      </div>
    </div>
    )
  }
}

export default DashboardContainer
