import * as React from 'react'
import FilterList from './filterList'
import { connect } from 'react-redux'

class FilterListContainer extends React.Component {
  selectedRoom = (id) => {
    this.props.dispatch({
      type: 'SELECT_ROOM',
      payload: id
    })
  }

  render() {
    return <FilterList rooms={this.props.rooms} selectedRoom={this.selectedRoom} />
  }

}

const mapStateToProps = (state) => {
  return {
    rooms: state.rooms
  }
}

export default connect(mapStateToProps)(FilterListContainer)
