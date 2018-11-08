import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../App.css'


class TravelerButton extends Component {



render() {
  return (
    <div className="button">
    <Link to={`/rooms`}>
    <button className="button">Traveler</button>
    </Link>
    </div>
  )
  }
}

export default TravelerButton