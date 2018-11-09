const initialState=[
  { city: 'Amsterdam',
  persons: "Available for 6 people maximum",
  price: "Price: 900$/night",
  description: 'Description: 4 room appartment with view on the main canal and the Royal palace',
  username: 'Homeowner: James',
  userrating: "Rating: 8",
  userbio: 'Bio: Relaxed dude, who doesnt like cleaning'
 },
 { city: 'Amsterdam',
  persons: "Available for 4 people maximum",
  price: "Price: 760$/night",
  description: '2 room appartment with view on the main canal and the Royal palace',
  username: 'Homeowner: John',
  userrating: "Rating: 2",
  userbio: 'Bio: Relaxed geezer, who loves cleaning'
 },
 { city: 'Amsterdam',
  persons: "Available for 2 people",
  price: "Price: 300$/night",
  description: 'Description: 4 room appartment with view on the main canal and the Royal palace',
  username: 'Homeowner: Natalie',
  userrating: "Rating: 9",
  userbio: 'Bio: Relaxed woman, who doesnt like cleaning'
 },
 { city: 'London',
  persons: "Available for 4 people maximum",
  price: "Price: 1200$/night",
  description: 'Description: Very small appartment on the edge of the city. Huge garden.',
  username: 'Homeowner: Evan',
  userrating: "Rating: 1",
  userbio: 'Bio: Rexed dude, who doesnt hates cleaning'
 },
 { city: 'London',
  persons: "Available for 1 person and a pet",
  price: "Price: 100$/night",
  description: 'Description: Very small appartment on the edge of the city. Tiny garden.',
  username: 'Homeowner: Greta',
  userrating: "Rating: 1",
  userbio: 'Bio: Relaxed chick, who despises cleaning'
 },
 { city: 'Helsinki',
  persons: "Available for 6 people",
  price: "Price: 1400$/night",
  description: 'Description: Its huge, its great, its fantatsic',
  username: 'Homeowner: Tina',
  userrating: "Rating: 10",
  userbio: 'Bio: Relaxed girl, who doesnt like cleaning'
 },
 { city: 'Helsinki',
  persons: "Available for 3 people",
  price: "Price: 460$/night",
  description: 'Description: Its huge, its great, its fantatsic',
  username: 'Homeowner: Timo',
  userrating: "Rating: 3",
  userbio: 'Bio: Relaxed dude, who doesnt like cleaning'
 },
 { city: 'Helsinki',
  persons: "Available for 4 people",
  price: "Price: 550$/night",
  description: 'Description: Its huge, its great, its fantatsic',
  username: 'Homeowner: Uta',
  userrating: "Rating: 8",
  userbio: 'Bio:Relaxed lady, who doesnt like cleaning'
 }
]

const reducer = (state = null, action = {}) => {
  switch (action.type) {
  
    case 'SELECT_CITY':
      return initialState.filter(cities => cities.city === action.payload)

  default:
    return state
  }
}

export default reducer
