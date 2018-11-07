const initialState=[
  { city: 'Amsterdam',
  persons: 6,
  price: 900,
  description: '4 room appartment with view on the main canal and the Royal palace',
  username: 'James',
  userphoto: 'picture',
  userrating: 1,
  userbio: 'Relaxed dude, who doesnt like cleaning'
 },
 { city: 'Amsterdam',
  persons: 4,
  price: 750,
  description: '2 room appartment with view on the main canal and the Royal palace',
  username: 'John',
  userphoto: 'picture',
  userrating: 2,
  userbio: 'Relaxed geezer, who loves cleaning'
 },
 { city: 'Amsterdam',
  persons: 3,
  price: 600,
  description: '4 room appartment with view on the main canal and the Royal palace',
  username: 'Natalie',
  userphoto: 'picture',
  userrating: 1,
  userbio: 'Relaxed woman, who doesnt like cleaning'
 },
 { city: 'London',
  persons: 4,
  price: 1200,
  description: 'Very small appartment on the edge of the city. Huge garden.',
  username: 'Evan',
  userphoto: 'picture',
  userrating: 1,
  userbio: 'Rexed dude, who doesnt hates cleaning'
 },
 { city: 'London',
  persons: 2,
  price: 1000,
  description: 'Very small appartment on the edge of the city. Tiny garden.',
  username: 'Greta',
  userphoto: 'picture',
  userrating: 1,
  userbio: 'Relaxed chick, who despises cleaning'
 },
 { city: 'Helsinki',
  persons: 6,
  price: 600,
  description: 'Its huge, its great, its fantatsic',
  username: 'Tina',
  userphoto: 'picture',
  userrating: 1,
  userbio: 'Relaxed girl, who doesnt like cleaning'
 },
 { city: 'Helsinki',
  persons: 3,
  price: 300,
  description: 'Its huge, its great, its fantatsic',
  username: 'Timo',
  userphoto: 'picture',
  userrating: 1,
  userbio: 'Relaxed dude, who doesnt like cleaning'
 },
 { city: 'Helsinki',
  persons: 4,
  price: 400,
  description: 'Its huge, its great, its fantatsic',
  username: 'Uta',
  userphoto: 'picture',
  userrating: 1,
  userbio: 'Relaxed lady, who doesnt like cleaning'
 }
]

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  
    case 'SELECT_CITY':
      return initialState.filter(cities => cities.city === action.payload)

  default:
    return state
  }
}

export default reducer
