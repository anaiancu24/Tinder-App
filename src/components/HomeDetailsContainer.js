import * as React from 'react'
import {connect} from 'react-redux'
import HomeDetails from './HomeDetails'

class HomeDetailsContainer extends React.Component {
    render() {
        const home = this.props.data

        return <HomeDetails home={home} />
    }
}

const mapStateToProps = (state) => {
    if (state.selectedUser !== null) {
        return {
          home: state.data.find(home => home.id === state.selectedRoom)
        }
      }
      return {}
    }

    export default connect(mapStateToProps)(HomeDetailsContainer)