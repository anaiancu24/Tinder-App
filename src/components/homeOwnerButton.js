import React, {Component} from 'react'

class HomeownerButton extends Component {
    boxalert2 = () => {
        return alert("I don't believe that. Try again")
        }


render() {
  return (
    <div className="homeownerbutton">
    <button onClick={this.boxalert2}>Home Owner</button>
    </div>
  )
  }
}

export default HomeownerButton