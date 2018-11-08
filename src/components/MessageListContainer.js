import React, {Component} from 'react'
import { connect } from 'react-redux'
import MessageList from './MessageList'
import {selectMessage} from '../actions/selectMessage'

class MessageListContainer extends Component {


  render() {
    return (
    <div className="messages">
      <MessageList messages={this.props.requests}
      // viewDetail={selectMessage()}
      />
    </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    requests: state.requests
  }
}

export default connect(mapStateToProps, {selectMessage})(MessageListContainer)
