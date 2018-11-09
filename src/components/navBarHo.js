import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import IconMessage from '../images/icon-messages.png'
import IconProfile from '../images/icon-profile.png'
import IconHome from '../images/icon-home.png'
import Logo from '../images/logo-small.png'

export default class NavBarHo extends Component {

  render() {
    return (
    <div className="navbar">
        <img className="logo-navbar" src={Logo} alt="logo"/>
        <Link to={`/`}><img className="icon-navbar" src={IconHome} alt="home icon"/></Link>
        <Link to={`/profile`}><img className="icon-navbar" src={IconProfile} alt="profile icon"/></Link>
        <Link to={`/message-list`}><img className="icon-navbar" src={IconMessage} alt="messages icon"/></Link>
    </div>
    )
  }
}
