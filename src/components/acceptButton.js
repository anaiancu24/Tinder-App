import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class AcceptButton extends Component {

boxalert2 = () => {
  return alert("The user has been informed of your acceptance. When he/she replies, you can discuss dates and things.")
  }

render(){
  return (
    <div className="button">
    <Link to="/message-list">
        <button onClick={this.boxalert2}>Accept</button>
        </Link>
    </div>
    )
  }
}
