import React, {Component} from 'react'

export default class AddHouseButton extends Component {

boxalert2 = () => {
  return alert("Don't you have enough houses to let, yet?")
  }

render(){
  return (
    <div className="addhousebutton">
    <button onClick={this.boxalert2}>Add a house</button>
    </div>
    )
  }
}
