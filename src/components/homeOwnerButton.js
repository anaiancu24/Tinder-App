import React, {Component} from 'react'
import "../App.css"
import {Link} from 'react-router-dom'


class HomeownerButton extends Component {
    // boxalert2 = () => {
    //     return alert("I don't believe that. Try again")
    //     }


render() {
  return (
    <div className="button">
        <Link to={`/homeowner`}>

    <button>Home Owner</button>
    </Link>
    </div>
  )
  }
}

export default HomeownerButton