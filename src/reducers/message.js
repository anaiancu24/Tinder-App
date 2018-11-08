import SELECT_MESSAGE from '../actions/selectMessage'

const reducer = (state = null, action = {}) => {
    switch (action.type) {
    case 'SELECT_MESSAGE':
      return action.payload
    default:
      return state
    }
  }

  export default reducer
