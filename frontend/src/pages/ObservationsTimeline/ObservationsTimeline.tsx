/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import moment from "moment";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import GlobalStyles from "assets/GlobalStyles";
import { EventModelInterface } from "utils/interfaces";

interface ObservationsTimelineProps {
  events: EventModelInterface[];
}

interface IconProps {
  eventType: string;
}

function ObservationIcon({ eventType }: IconProps) {
  if (eventType.includes("fluid")) {
    return <FontAwesomeIcon icon={faCoffee} />;
  } else if (eventType.includes("food")) {
    return <FontAwesomeIcon icon={faUtensils} />;
  } else if (eventType.includes("general")) {
    return <FontAwesomeIcon icon={faClipboard} />;
  } else if (eventType.includes("mood")) {
    return <FontAwesomeIcon icon={faSmile} />;
  }
  return <FontAwesomeIcon icon={faFlag} />;
}

function ObservationsTimeline({ events }: ObservationsTimelineProps) {
  const furtherInfoAvailable = (currentEvent: EventModelInterface) => {
    let infoToReturn: string = "";
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
            contentArrowStyle={{
              borderRight: `7px solid  ${GlobalStyles.birdieBlue}`,
            }}
            date={moment(event.timestamp).format("LL")}
            iconStyle={{ background: `${GlobalStyles.birdieBlue}` }}
            icon={<ObservationIcon eventType={event.event_type || ""} />}
          >
            <h3
              className='vertical-timeline-element-title'
              css={css`
                text-transform: capitalize;
              `}
            >
              {event.event_type
                ?.split("_")
                .join(" ")
                .replace(/\w+[.!?]?$/, "")}
            </h3>
            {furtherInfoAvailable(event) && (
              <p> {furtherInfoAvailable(event)}</p>
            )}
            {event.payload.note &&
              event.payload.note !== "None" &&
              event.payload.note !== "[redacted] " && (
                <p>Notes: {event.payload.note}</p>
              )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default ObservationsTimeline;
