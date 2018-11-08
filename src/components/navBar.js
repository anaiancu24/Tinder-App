import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {

  render() {
    return (
    <div className="messages">
      <ul>
        <Link to={`/`}><li>Home</li></Link>
        <Link to={`/filter`}><li>Traveler</li></Link>
        <Link to={`/messages`}><li>Home owner</li></Link>
      </ul>
    </div>
    )
  }
}
