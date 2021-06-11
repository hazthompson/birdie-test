/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect, useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import "react-vertical-timeline-component/style.min.css";
import { useParams } from "react-router-dom";
import { ParamTypes } from "../../../utils/interfaces";
import { EventModelInterface } from "../../../utils/interfaces";
import ConcernsTimeline from "./ConcernsTimeline";
import ObservationsTimeline from "./ObservationsTimeline";
import AppBar from "../components/AppBar";

function EventsTimeline() {
  const { careRecipientId } = useParams<ParamTypes>();
  let { path } = useRouteMatch();
  const [observations, setObservations] = useState<EventModelInterface[]>([]);
  const [concerns, setConcerns] = useState<EventModelInterface[]>([]);

  useEffect(() => {
    fetch(
      `/api/events/${careRecipientId}?eventType=fluid_intake_observation&eventType=general_observation&eventType=food_intake_observation&eventType=incontinence_pad_observation&eventType=mood_observation`
    )
      .then((response) => response.json())
      .then((data) => {
        setObservations(data);
      });

    fetch(`/api/events/${careRecipientId}?eventType=concern_raised`)
      .then((response) => response.json())
      .then((data) => {
        setConcerns(data);
      });
  }, [careRecipientId]);

  const hasConcerns = () => {
    if (concerns.length) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      {!observations.length ? (
        <p>loading...</p>
      ) : (
        <div>
          <AppBar hasConcerns={hasConcerns()} />
          <Route path={path} exact>
            <ObservationsTimeline events={observations} />
          </Route>
          <Route path={`${path}/concerns`}>
            <ConcernsTimeline events={concerns} />
          </Route>
        </div>
      )}
    </div>
  );
}

export default EventsTimeline;
