import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../style/ho.css'
import '../style/navbar.css'
import MessageList from './MessageList'
import {selectMessage} from '../actions/selectMessage'
import NavBar from './navBarHo'

class MessageListContainer extends Component {

handleMessageClick = (id) => {
  this.props.selectMessage(id)
}

  render() {
    return (
    <div className="container">
      <div classname="navbar">
        <NavBar />
      </div>
      <div className="messagelist">
        <h5>
          <MessageList messages={this.props.requests} handleMessageClick={this.handleMessageClick} />
        </h5>
      </div>
    </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    requests: state.requests,
    message: state.message
  }
}

export default connect(mapStateToProps, {selectMessage})(MessageListContainer)
