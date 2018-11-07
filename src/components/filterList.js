import * as React from 'react'
import { Link } from 'react-router-dom'


export default function FilterList(props) {
  return (
    <div>
      <h1>Filter Results</h1>
      <ul>
        {props.rooms !== null ? props.rooms.map(room =>
          <li key={room.id} className="rooms">
            <Link to={`/room`}>
              {Object.values(room).map(apt => <li>{apt}</li>

              )}
            </Link>
          </li>
        ):null}
      </ul>
    </div>)
}
