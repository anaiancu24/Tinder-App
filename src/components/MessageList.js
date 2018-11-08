import * as React from 'react'
import {Link} from 'react-router-dom'

export default function MessageList(props) {
  console.log(props)
    return (
    <div>
      <ul>
        {props.messages.map(message =>
          <li key={message.id} className="message" >
            <Link to={`/message`} onClick={() => props.handleMessageClick(message.id)}>
              {message.date + ' '}
              {message.subject}
            </Link>
          </li>
          )
        }
      </ul>
    </div>
    )
  }
