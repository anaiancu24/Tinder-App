import React, {Component} from 'react'
import { connect } from 'react-redux'
import MessageList from './MessageList'

class MessageListContainer extends Component {

  render() {
    return (
    <div>
      <MessageList messages={this.props.messages}/>
    </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(MessageListContainer)
