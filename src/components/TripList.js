import React, { useEffect, useState } from 'react'
import './TripList.css'

export default function TripList() {
       const [trips , setTrip] = useState([])
       const [url , setUrl] = useState('http://localhost:3000/trips')

       useEffect(() => {
              fetch(url).
              then(response => response.json()).
              then(trip => setTrip(trip))
       }, [url])
  return (
    <div className='trip-list'>
       
       <div className='filters'>
              <button onClick={() => setUrl('http://localhost:3000/trips?loc=usa')}>USA</button>
              <button onClick={() => setUrl('http://localhost:3000/trips?loc=spain')}>Spain</button>
              <button onClick={() => setUrl('http://localhost:3000/trips')}>All</button>
       </div>
       <ul >
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
