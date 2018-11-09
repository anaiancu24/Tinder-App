import React, {Component} from 'react'
import { connect } from 'react-redux'
import MessageDetail from './MessageDetail'
import AcceptButton from './acceptButton'
import DeclineButton from './declineButton'
import NavBar from './navBarHo'
import '../style/ho.css';
import '../style/ho-message.css';

class MessageDetailContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="container">
        <div>
          <NavBar />
        </div>
        <div className="messagelist">
          <MessageDetail message={this.props.messageId}/>
          <AcceptButton />
          <DeclineButton />
        </div>
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
