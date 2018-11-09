export default (state = null, action) => {
  switch (action.type) {

    case 'SELECT_MESSAGE':
      return action.payload.id

  default:
    return state
  }
}
