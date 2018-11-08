import React, {Component} from 'react';
import {connect} from 'react-redux'
import {data} from '../dataObject'
import {setCity} from '../actions/place'


class Filter extends Component {
constructor(props) {
  super(props);
  this.state = {value: ''};

  this.updateSelection = this.updateSelection.bind(this);
}


updateSelection(event) {
  this.setState({value: event.target.value});
  this.props.setCity(event.target.value)
}





render() {
  return (
    <div className="App">
    <select className= "dropdown" value={this.state.value} onChange={this.updateSelection}>
    <option value='' >-- Pick A City --</option>

    {data.map(cities => {
      return (
        <option className="option" value={cities.city}>{cities.city}</option>
      )
    })}
    </select>

    </div>
  );
}
}

const mapStateToProps = (state) => {
  return state
}



export default connect(mapStateToProps, {setCity})(Filter)

