import * as React from 'react'
import FilterList from './filterList'
import { connect } from 'react-redux'
import city from '../reducers/city';

class FilterListContainer extends React.Component {


  render() {
    return (
    <div>
      <Filter />
      <FilterList rooms={this.props.rooms}/>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    rooms: state.rooms,
    city: state.city
  }
}

export default connect(mapStateToProps)(FilterListContainer)
