import React, {Component} from 'react'
import { connect } from 'react-redux'
import MessageDetail from './MessageDetail'
import AcceptButton from './acceptButton'
import DeclineButton from './declineButton'

class MessageDetailContainer extends Component {

  render() {
    console.log(this.props)
    return (
    <div className="message">
      <MessageDetail message={this.props.messageId}/>
      <AcceptButton />
      <DeclineButton />
    </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    messageId: state.requests.find(request => request.id === state.messageId)
  }
}

export default connect(mapStateToProps)(MessageDetailContainer)
