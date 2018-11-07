import * as React from 'react'

export default function FilterList(props) {
  return (
    <div>
      <h1>Filter Results</h1>
      <ul>
            {props.rooms.map(room => 
            <li key = {room.id} className="rooms">
            {Object.values(room).map(apt => <li>{apt}</li>
              )}
            </li>
                ) }
        </ul>
    </div>)
}
