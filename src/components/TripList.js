import React, { useCallback, useEffect, useState } from 'react'
import { useFetch  } from '../hooks/useFetch'
import './TripList.css'
import { type } from '@testing-library/user-event/dist/type'

export default function TripList() {
       const [url , setUrl] = useState('http://localhost:3000/trips')
       const {data : trips , isPending , error} = useFetch(url , {type:'GET'})
       

  return (
    <div className='trip-list'>

       <div className='filters'>
              <button onClick={() => setUrl('http://localhost:3000/trips?loc=usa')}>USA</button>
              <button onClick={() => setUrl('http://localhost:3000/trips?loc=spain')}>Spain</button>
              <button onClick={() => setUrl('http://localhost:3000/trips')}>All</button>
              <button onClick={() => setUrl('http://localhost:3000/trips****ERROR')}>check Error</button>
       </div>
       <ul >
              {isPending && <p>is loading...</p>}
              {error && <h4 className='error'>{error}</h4>}
              <h2>trip List</h2>
              {!error && trips && trips.map(trip =>(
                     <li key={trip.id}>
                            <h3>{trip.title}</h3>
                            <p>{trip.price}</p>
                     </li>
              ))}
       </ul>

      
    </div>
  )
}
