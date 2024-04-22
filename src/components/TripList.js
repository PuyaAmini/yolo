import React, { useCallback, useEffect, useState } from "react";
import "./TripList.css";
import useFetch from '../hooks/useFetch';export default function TripList() {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data: trips, isPending } = useFetch(url);

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
        </div>
        {isPending && <p>Loading ...</p>}
        {/* list */}
        {trips &&
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
