import * as React from 'react'

export default function FilterList(props) {
  return (<div>
    <h1>Filter Results</h1>
    <ul>
      { props.rooms.map(room =>
        <li key={room.id} onClick={() => props.selectedRoom(room.id)}>
          { room.name }
        </li>
      ) }
    </ul>
  </div>)
}
