import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ParamTypes } from "../../../utils/interfaces";

function EventsTimeline() {
  const { careRecipientId } = useParams<ParamTypes>();
  console.log("params", careRecipientId);
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    fetch(`/api/events/${careRecipientId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0]);
        setEvents(data);
      });
  }, [careRecipientId]);
  return (
    <div>
      <p>This will be the Timeline</p>
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

export default EventsTimeline;
