import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import IconMessage from '../images/icon-messages.png'
import IconEdit from '../images/icon-edit.png'
import IconHome from '../images/icon-home.png'
import Logo from '../images/logo-small.png'

export default class NavBarProfile extends Component {

  render() {
    return (
    <div className="navbar">
        <img className="logo-navbar" src={Logo} alt="logo"/>
        <Link to={`/`}><img className="icon-navbar" src={IconHome} alt="home icon"/></Link>
        <Link to={`/profile`}><img className="icon-navbar" src={IconEdit} alt="editing icon"/></Link>
        <Link to={`/message-list`}><img className="icon-navbar" src={IconMessage} alt="messages icon"/></Link>
    </div>
    )
  }
}
