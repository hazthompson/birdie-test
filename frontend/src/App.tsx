import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [events, setEvents] = useState<any[]>([]);
  useEffect(() => {
    fetch("/api/events/df50cac5-293c-490d-a06c-ee26796f850d")
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0]);
        setEvents(data);
      });
  }, []);

  return (
    <div className='App'>
      {!events ? (
        <p>loading..</p>
      ) : (
        <header className='App-header'>
          <ul>
            {events.map((event) => (
              <li key={event.id}>event visit id:{event.visit_id}</li>
            ))}
          </ul>
        </header>
      )}
    </div>
  );
}

export default App;
