import React, {Component} from 'react'
import { Link } from 'react-router-dom'


class TravelerButton extends Component {



render() {
  return (
    <div className="button">
    <Link to={`/rooms`}>
    <button>Traveler</button>
    </Link>
    </div>
  )
  }
}

export default TravelerButton