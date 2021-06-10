/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect, useState } from "react";
import "react-vertical-timeline-component/style.min.css";
import { useParams } from "react-router-dom";
import {
  EventModelInterface,
  ParamTypes,
  EventsByEventType,
} from "../../../utils/interfaces";
import ConcernsTimeline from "./ConcernsTimeline";

function EventsTimeline() {
  const { careRecipientId } = useParams<ParamTypes>();
  console.log("params", careRecipientId);
  // const [events, setEvents] = useState<any[]>([]);
  const [eventsByEventType, setEventsByEventType] = useState<EventsByEventType>(
    {}
  );

  useEffect(() => {
    fetch(`/api/events/${careRecipientId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0]);
        // setEvents(data);
        const eventsTypeObject: EventsByEventType = {};

        data.forEach((event: EventModelInterface) => {
          if (!event.event_type) return;

          if (!eventsTypeObject[event.event_type]) {
            eventsTypeObject[event.event_type] = [];
          }
          eventsTypeObject[event.event_type].push(event);
        });

        setEventsByEventType(eventsTypeObject);
      });
  }, [careRecipientId]);

  return (
    <div>
      {!Object.keys(eventsByEventType).length ? (
        <p>loading..</p>
      ) : (
        <ConcernsTimeline eventsByEventType={eventsByEventType} />
      )}
    </div>
  );
}

export default EventsTimeline;
