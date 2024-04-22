import React, { useCallback, useEffect, useState } from "react";
import "./TripList.css";
export default function TripList() {
  const [trips, setTrip] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/trips");

  const fetchTrips = useCallback(async () => {
    const response = await fetch(url);
    const json = await response.json();
    setTrip(json);
  }, [url]);


  useEffect(() => {
    fetchTrips()
  }, [fetchTrips]);

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
        {/* list */}
        {trips.map((trip) => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
