import { useState } from 'react';
import './App.css';
import TripList from './components/TripList';


function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      {show && <button onClick={() => setShow(false)}>Hide</button>}
      {!show && <button onClick={() => setShow(true)}>Show</button>}
      
      {show && <TripList />}
    </div>
  );
}

export default App;
