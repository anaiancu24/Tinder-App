import React, {Component} from 'react'
import { connect } from 'react-redux'
import MessageDetail from './MessageDetail'
import AcceptButton from './acceptButton'
import DeclineButton from './declineButton'

class MessageDetailContainer extends Component {

  render() {
    return (
    <div className="message">
      <MessageDetail message={this.props.viewMessage}/>
      <AcceptButton />
      <DeclineButton />
    </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    message: state.message
  }
}

export default connect(mapStateToProps, )(MessageDetailContainer)
