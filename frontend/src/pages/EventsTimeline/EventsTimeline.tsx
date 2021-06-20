/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useEffect, useState } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import 'react-vertical-timeline-component/style.min.css';
import { useParams } from 'react-router-dom';
import { ParamTypes } from 'utils/interfaces';
import { EventModelInterface } from 'utils/interfaces';
import ConcernsTimeline from 'pages/ConcernsTimeline/ConcernsTimeline';
import ObservationsTimeline from 'pages/ObservationsTimeline/ObservationsTimeline';
import AppBar from 'components/AppBar/AppBar';
import NoEventsFound from 'pages/NoEventsFound/NoEventsFound';

function EventsTimeline() {
  const { careRecipientId } = useParams<ParamTypes>();
  let { path } = useRouteMatch();
  const [observations, setObservations] = useState<EventModelInterface[]>([]);
  const [concerns, setConcerns] = useState<EventModelInterface[]>([]);
  const [loadingObservations, setLoadingObservations] = useState<Boolean>(true);
  const [loadingConcerns, setLoadingConcerns] = useState<Boolean>(true);

  useEffect(() => {
    fetch(
      `/api/events/${careRecipientId}?eventType=fluid_intake_observation&eventType=general_observation&eventType=food_intake_observation&eventType=incontinence_pad_observation&eventType=mood_observation`
    )
      .then((response) => response.json())
      .then((data) => {
        setObservations(data);
        setLoadingObservations(false);
      });

    fetch(`/api/events/${careRecipientId}?eventType=concern_raised`)
      .then((response) => response.json())
      .then((data) => {
        setConcerns(data);
        setLoadingConcerns(false);
      });
  }, [careRecipientId]);

  if (loadingObservations || loadingConcerns) {
    return <p>loading...</p>;
  }
  return (
    <div>
      {!observations.length ? (
        <NoEventsFound />
      ) : (
        <div>
          <AppBar hasConcerns={concerns.length ? true : false} />
          <Route path={path} exact>
            <ObservationsTimeline events={observations} />
          </Route>
          <Route path={`${path}/concerns`}>
            <ConcernsTimeline concerns={concerns} />
          </Route>
        </div>
      )}
    </div>
  );
}

export default EventsTimeline;
