import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'

const data=[
  { city: 'Amsterdam',
    persons: 6,
    price: 900,
    description: '4 room appartment with view on the main canal and the Royal palace',
    username: 'James',
    userphoto: 'picture',
    userrating: 1,
    userbio: 'Rexed dude, who doesnt like cleaning'
  },
  { city: 'London',
    persons: 4,
    price: 1200,
    description: 'Very small aprtment on the edge of the city. Huge garden.',
    username: 'Greta',
    userphoto: 'picture',
    userrating: 1,
    userbio: 'Rexed dude, who doesnt like cleaning'
  },
  { city: 'Helsinki',
    persons: 3,
    price: 400,
    description: 'Its huge, its great, its fantatsic',
    username: 'Tina',
    userphoto: 'picture',
    userrating: 1,
    userbio: 'Rexed dude, who doesnt like cleaning'
  }
]

class Filter extends Component {
constructor(props) {
  super(props);
  this.state = {value: ''};

  this.updateSelection = this.updateSelection.bind(this);
}


updateSelection(event) {
  this.setState({value: event.target.value});
}

sendCity = () => {
  this.props.dispatch({
    type: 'SEND_CITY',
    payload: {
      city: this.state.city
    }
  })
}



render() {
  return (
    <div className="App">
    <select value={this.state.value} onChange={this.updateSelection}>
    <option value="">-- Pick A City --</option>
    {data.map(cities => {
      return (
        <option value={cities.city}>{cities.city}</option>
      )
    })}
    </select>

   <button onClick={this.sendCity}>Submit</button>
    </div>
  );
}
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(Filter)