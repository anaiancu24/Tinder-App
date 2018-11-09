export const SELECT_MESSAGE = 'SELECT_MESSAGE'

export function selectMessage(message) {
  return {
    type: 'SELECT_MESSAGE',
    payload: {
      id: message.id
    }
  }
}
