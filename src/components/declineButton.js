import * as React from 'react'
import { Link } from 'react-router-dom'

export default function DeclineButton(props) {
  return (
    <div>
      <Link to={`/message-list`}>
        <button>Decline</button>
      </Link>
    </div>
  )
}
