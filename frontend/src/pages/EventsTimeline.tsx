import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  EventModelInterface,
  ParamTypes,
  EventsByEventType,
} from "../../../utils/interfaces";

function EventsTimeline() {
  const { careRecipientId } = useParams<ParamTypes>();
  console.log("params", careRecipientId);
  const [events, setEvents] = useState<any[]>([]);
  const [eventsByEventType, setEventsByEventType] = useState<EventsByEventType>(
    {}
  );

  useEffect(() => {
    fetch(`/api/events/${careRecipientId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0]);
        setEvents(data);
        const eventsTypeObject: EventsByEventType = {};

        data.forEach((event: EventModelInterface) => {
          if (!event.event_type) return;

          if (!eventsTypeObject[event.event_type]) {
            eventsTypeObject[event.event_type] = [];
          }
          eventsTypeObject[event.event_type].push(event);
        });

        setEventsByEventType(eventsTypeObject);

        console.log("testing object", eventsTypeObject);
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
