import * as React from 'react'
import { connect } from 'react-redux'
import HomeDetails from './HomeDetails'

class HomeDetailsContainer extends React.Component {



    render() {

        return (
            <div>
                <img src="https://cache.marriott.com/marriottassets/marriott/KULDT/kuldt-guestroom-0017-hor-clsc.jpg?interpolation=progressive-bilinear&" alt='home' height="200" width="300"/>

                <HomeDetails rooms={this.props.rooms} />
                <button onClick={this.boxalert}>REQUEST</button>
                <button onClick={this.boxalert3}>IGNORE</button>

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