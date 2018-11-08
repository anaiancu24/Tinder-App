import * as React from 'react'

export default function MessageList(props) {
    return (
    <div>
      <ul>
        {props.messages.map(
          message => <li key = {message.id} className="rooms">{message.body}</li>
          )
        }
      </ul>
    </div>
    )
  }
