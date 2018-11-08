import React, {Component} from 'react'
import MessageButton from './MessageButton'
import AddHouseButton from './AddHouseButton'

class DashboardContainer extends Component {

render() {
  return (
    <div>
      <AddHouseButton />
      <MessageButton />
    </div>
    )
  }
}

export default DashboardContainer
