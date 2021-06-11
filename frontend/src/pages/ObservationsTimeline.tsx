/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import GlobalStyles from "../assets/GlobalStyles";
import moment from "moment";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { EventModelInterface } from "../../../utils/interfaces";

interface ObservationsTimelineProps {
  events: EventModelInterface[];
}

function WorkIcon() {
  return <p>1</p>;
}

function ObservationsTimeline({ events }: ObservationsTimelineProps) {
  console.log("everything", events);

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
            icon={<WorkIcon />}
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
