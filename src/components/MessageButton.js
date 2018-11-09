import * as React from 'react'
import { Link } from 'react-router-dom'

export default function MessageButton(props) {
  return (
    <div>
      <Link to={`/message-list`}>
        <button>Messages</button>
      </Link>
    </div>
  )
}
