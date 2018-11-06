import * as React from 'react'
import FilterList from './filterList'
import { connect } from 'react-redux'
import city from '../reducers/city';

class FilterListContainer extends React.Component {
  selectedRoom = (id) => {
    this.props.dispatch({
      type: 'SELECT_ROOM',
      payload: id
    })
  }

  render() {
    return <FilterList rooms={this.props.rooms} selectedRoom={this.selectedRoom} city={this.props.city}/>
  }

}

const mapStateToProps = (state) => {
  return {
    rooms: state.rooms,
    city: state.city
  }
}

export default connect(mapStateToProps)(FilterListContainer)
