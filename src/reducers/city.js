const city = (state = null, action = {}) => {
  switch (action.type) {
  case 'SEND_CITY':
    return action.payload
  default:
    return state
  }
}
export default city