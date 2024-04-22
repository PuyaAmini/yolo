import React, { useLayoutEffect, useState } from 'react'
import './TripList.css'
export default function TripList() {
       const [trips , setTrip] = useState([])
       useLayoutEffect(()=> {
              fetch('http://localhost:3000/trips').
              then(response => response.json()).
              then(trips => setTrip(trips))
       })
  return (
    <div>
      <ul className='trip-list'>
       <h2>Trip List</h2>
       {trips.map(trip => (
              <li key={trip.id}>
                     <h3>{trip.title}</h3>
                     <p>{trip.price}</p>
                     </li>
       ))}
      </ul>
    </div>
  )
}
