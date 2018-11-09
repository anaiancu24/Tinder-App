import * as React from 'react'
import {Link} from 'react-router-dom'

export default function MessageList(props) {
    return (
    <div>
      <ul>
        {props.messages.map(message =>
          <li key={message.id} className="message"
          // onClick={props.viewDetail}
          >        <Link to={`/message`}>

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
