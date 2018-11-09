import * as React from 'react'
import '../style/ho.css';
import '../style/ho-message.css';

export default function MessageDetail({ message }) {
    if(message === undefined){
      return <h1>Message not found</h1>
    }

    return (
    <div>
      <ul>
        {<li key = {message.id} className="message">
            <div className="datefrom">{message.date}
            {message.from}</div>
            <div className="subject">{message.subject}</div>
            <div className="messagebody">{message.body}</div>
          </li>
        }
      </ul>
    </div>
    )
  }
