import * as React from ‘react’
import logo from ‘../logo.svg’


export default function HomeDetails() {
  // const home=props.home
  const homes=[
 { city: 'Amsterdam',
      persons: 6,
      price: 900,
      description: '4 room appartment with view on the main canal and the Royal palace',
      username: 'James',
      userphoto: 'picture',
      userrating: 1,
      userbio: 'Rexed dude, who doesnt like cleaning',
      id:1
    },
    { city: 'London',
      persons: 4,
      price: 1200,
      description: 'Very small aprtment on the edge of the city. Huge garden.',
      username: 'Greta',
      userphoto: 'picture',
      userrating: 1,
      userbio: 'Rexed dude, who doesnt like cleaning',
      id: 2
    },
    { city: 'Helsinki',
      persons: 3,
      price: 400,
      description: 'Its huge, its great, its fantatsic',
      username: 'Tina',
      userphoto: 'picture',
      userrating: 1,
      userbio: 'Rexed dude, who doesnt like cleaning',
      id: 3
    }
  ]
   return (
       <div>
       <img src = {logo} alt='portrait'/>


       </div>
   )
}
>>>>>>> 7773495137b8fc2ca25f0310a8dfde5a2d9dd285
