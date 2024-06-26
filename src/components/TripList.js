import React, { useCallback, useEffect, useState } from "react";
import "./TripList.css";
import useFetch from "../hooks/useFetch";
export default function TripList() {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data: trips, isPending , error} = useFetch(url , {type: 'GET'});

  return (
    <div>
      <ul className="trip-list">
        <h2>Trip List</h2>
        <div className="filters">
          <button onClick={() => setUrl("http://localhost:3000/trips?loc=usa")}>
            usa
          </button>
          <button
            onClick={() => setUrl("http://localhost:3000/trips?loc=spain")}
          >
            Spain
          </button>
          <button onClick={() => setUrl("http://localhost:3000/trips")}>
            All
          </button>
          <button
            onClick={() => setUrl("http://localhost:3000/trips****ERROR")}
          >
            check Error
          </button>
        </div>
        {isPending && <p>Loading ...</p>}
        {error && <h4 className="error">{error}</h4>}
        {/* list */}
        {!error && trips &&
          trips.map((trip) => (
            <li key={trip.id}>
              <h3>{trip.title}</h3>
              <p>{trip.price}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
