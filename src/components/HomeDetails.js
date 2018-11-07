<<<<<<< HEAD
import * as React from 'react'
import logo from '../logo.svg'


export default function HomeDetails(props) {
    const home=props.home
    return (
        <div>
        <img src = {logo} alt="portrait" />

            <h2>{home.city}</h2>
            <h3>{home.price}</h3>
            <p>{home.description}</p>
        </div>
    )
}
=======
import * as React from ‘react’
import logo from ‘../logo.svg’


export default function HomeDetails(props) {
   const home=props.home
   return (
       <div>
       <img src = {logo} alt=“portrait” />

           <h2>{home.city}</h2>
           <h3>{home.price}</h3>
           <p>{home.description}</p>
       </div>
   )
}
>>>>>>> 7773495137b8fc2ca25f0310a8dfde5a2d9dd285
