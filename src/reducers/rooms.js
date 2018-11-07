const initialState=[
  { city: 'Amsterdam',
    persons: 6,
    price: 900,
    description: '4 room appartment with view on the main canal and the Royal palace',
    username: 'James',
    userphoto: 'picture',
    userrating: 1,
    userbio: 'Rexed dude, who doesnt like cleaning'
  },
  { city: 'London',
    persons: 4,
    price: 1200,
    description: 'Very small aprtment on the edge of the city. Huge garden.',
    username: 'Greta',
    userphoto: 'picture',
    userrating: 1,
    userbio: 'Rexed dude, who doesnt like cleaning'
  },
  { city: 'Helsinki',
    persons: 3,
    price: 400,
    description: 'Its huge, its great, its fantatsic',
    username: 'Tina',
    userphoto: 'picture',
    userrating: 1,
    userbio: 'Rexed dude, who doesnt like cleaning'
  }
]

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case 'SELECT_ROOM':
    return [
      ...state,
      action.payload
    ]
  default:
    return state
  }
}

export default reducer
