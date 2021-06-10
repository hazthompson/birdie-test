/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect, useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import "react-vertical-timeline-component/style.min.css";
import { useParams } from "react-router-dom";
import {
  EventModelInterface,
  ParamTypes,
  EventsByEventType,
} from "../../../utils/interfaces";
import ConcernsTimeline from "./ConcernsTimeline";
import ObservationsTimeline from "./ObservationsTimeline";

function EventsTimeline() {
  const { careRecipientId } = useParams<ParamTypes>();
  let { path } = useRouteMatch();
  const [Observations, setObservations] = useState<any[]>([]);
  const [eventsByEventType, setEventsByEventType] = useState<EventsByEventType>(
    {}
  );

  useEffect(() => {
    fetch(`/api/events/${careRecipientId}`)
      .then((response) => response.json())
      .then((data) => {
        const eventsTypeObject: EventsByEventType = {};

        setObservations(data);
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
        <p>loading...</p>
      ) : (
        <div>
          <header>Observations</header>
          <Route path={path} exact>
            <ObservationsTimeline events={Observations} />
          </Route>
          <Route path={`${path}/concerns`}>
            <ConcernsTimeline eventsByEventType={eventsByEventType} />
          </Route>
        </div>
      )}
    </div>
  );
}

export default EventsTimeline;
