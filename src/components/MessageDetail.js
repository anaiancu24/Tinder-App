import * as React from 'react'

export default function MessageDetail({ message }) {
    if(message === undefined){
      return <h1>Message not found</h1>
    }

    return (
    <div>
      <ul>
        {<li key = {message.id} className="message">
            {message.date}
            {message.from}
            {message.subject}
            {message.body}
          </li>
        }
      </ul>
    </div>
    )
  }
