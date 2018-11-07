import * as React from 'react'
import {connect} from 'react-redux'
import HomeDetails from './HomeDetails'

class HomeDetailsContainer extends React.Component {
    render() {
        //const rooms = this.props.data

        return (
        <div>
            <HomeDetails  />
        <button>REQUEST</button>
        <button>IGNORE</button>

        </div>

        )}
}

const mapStateToProps = (state) => {
    return {
      rooms: state.rooms
    }
  }

    export default connect(mapStateToProps)(HomeDetailsContainer)