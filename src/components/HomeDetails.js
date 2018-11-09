import * as React from 'react'
import room1 from '../images/room1.jpg'
import room2 from '../images/room2.jpg'
import room3 from '../images/room3.jpg'
import room4 from '../images/room4.jpg'
import room5 from '../images/room5.jpg'
import room6 from '../images/room6.jpg'
import room7 from '../images/room7.jpg'
import room8 from '../images/room8.jpg'
import room9 from '../images/room9.jpg'
import room10 from '../images/room10.jpg'



const random_images_array = [room1, room2, room3,room4,room5,room6,room7,room8,room9,room10 ];
export default function HomeDetails() {

   return (
       <div className="room-details">
       <img className="picture" src={random_images_array[Math.floor(Math.random() * 10)]} alt="randompicture"/>
       </div>
   )
}
