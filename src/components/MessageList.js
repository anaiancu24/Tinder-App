import * as React from 'react'
import {Link} from 'react-router-dom'
import '../style/ho.css';
import '../style/ho-messagelist.css';

export default function MessageList(props) {
    return (
    <div>
      <ul>
        {props.messages.map(message =>
          <li key={message.id} className="message" >
            <Link to={`/message`} onClick={() => props.handleMessageClick(message.id)}>

              <div className="author">{message.from}</div>
              <div className="messagebody">{message.subject}</div>

            </Link>
          </li>
          )
        }
      </ul>
    </div>
    )
  }
