import React, { useEffect, useState } from 'react'
import './TripList.css'

export default function TripList() {
       const [trips , setTrip] = useState([])
       useEffect(() => {
              fetch('http://localhost:3000/trips').
              then(response => response.json()).
              then(trip => setTrip(trip))
       })
  return (
    <div>
       <ul className='trip-list'>
              <h2>trip List</h2>
              {trips.map(trip =>(
                     <li key={trip.id}>
                            <h3>{trip.title}</h3>
                            <p>{trip.price}</p>
                     </li>
              ))}
       </ul>
      
    </div>
  )
}
