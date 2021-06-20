/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import moment from 'moment';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import GlobalStyles from 'assets/GlobalStyles';
import { EventModelInterface } from 'utils/interfaces';
import ObservationIcon from './ObservationIcon';

interface ObservationsTimelineProps {
  events: EventModelInterface[];
}

function ObservationsTimeline({ events }: ObservationsTimelineProps) {
  const furtherInfoAvailable = (currentEvent: EventModelInterface) => {
    let infoToReturn: string = '';
    if (currentEvent.payload.fluid) {
      infoToReturn = currentEvent.payload.fluid;
    } else if (currentEvent.payload.meal) {
      infoToReturn = currentEvent.payload.meal;
    } else if (currentEvent.payload.mood) {
      infoToReturn = currentEvent.payload.mood;
    } else if (currentEvent.payload.pad_condition) {
      infoToReturn = currentEvent.payload.pad_condition;
    }
    return infoToReturn;
  };
  return (
    <div
      css={css`
        background-color: ${GlobalStyles.lightGray};
      `}
    >
      <VerticalTimeline
        contentStyle={{
          background: `${GlobalStyles.lightGray}`,
        }}
      >
        {events.map((event) => (
          <VerticalTimelineElement
            key={event.id}
            className='vertical-timeline-element--work'
            contentStyle={{ border: `3px solid  ${GlobalStyles.birdieBlue}` }}
            contentArrowStyle={{
              borderRight: `7px solid  ${GlobalStyles.birdieBlue}`,
              marginRight: '3px',
              marginLeft: '3px',
            }}
            date={moment(event.timestamp).format('LL')}
            iconStyle={{ background: `${GlobalStyles.birdieBlue}` }}
            icon={<ObservationIcon eventType={event.event_type || ''} />}
          >
            <h3
              className='vertical-timeline-element-title'
              css={css`
                text-transform: capitalize;
                font-family: ${GlobalStyles.headerFont};
              `}
            >
              {event.event_type
                ?.split('_')
                .join(' ')
                .replace(/\w+[.!?]?$/, '')}
            </h3>
            {furtherInfoAvailable(event) && (
              <p
                css={css`
                  text-transform: capitalize;
                  font-family: ${GlobalStyles.bodyFont};
                  font-weight: 200;
                `}
              >
                {' '}
                {furtherInfoAvailable(event)}
              </p>
            )}
            {event.payload.note &&
              event.payload.note !== 'None' &&
              event.payload.note !== '[redacted] ' && (
                <p>Notes: {event.payload.note}</p>
              )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default ObservationsTimeline;
