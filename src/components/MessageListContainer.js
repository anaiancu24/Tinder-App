import React, {Component} from 'react'
import {connect} from 'react-redux'
import MessageList from './MessageList'
import {selectMessage} from '../actions/selectMessage'

class MessageListContainer extends Component {

handleMessageClick = (id) => {
  this.props.selectMessage(id)
}

  render() {
    return (
    <div className="messages">
      <MessageList messages={this.props.requests} handleMessageClick={this.handleMessageClick} />
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
