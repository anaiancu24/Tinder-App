import * as React from 'react'
import { connect } from 'react-redux'
import HomeDetails from './HomeDetails'

class HomeDetailsContainer extends React.Component {



    render() {

        return (
            <div>

                <HomeDetails rooms={this.props.rooms} />
                <button className = "button2" onClick={this.boxalert}>REQUEST</button>
                <button className = "button2" onClick={this.boxalert3}>IGNORE</button>

            </div>

        )
    }
boxalert3 = () => {
    return alert("Are you sure????")
}

    boxalert = () => {
        return alert("Yeah, you wish! We're ofc completely booked")
        }
}

const mapStateToProps = (state) => {
    return {
        rooms: state.rooms
    }
}

export default connect(mapStateToProps)(HomeDetailsContainer)