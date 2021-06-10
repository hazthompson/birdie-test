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
import { EventsByEventType } from "../../../utils/interfaces";

interface ConcernTimelineProps {
  eventsByEventType: EventsByEventType;
}

function WorkIcon() {
  return <p>1</p>;
}

function ConcernsTimeline({ eventsByEventType }: ConcernTimelineProps) {
  console.log("concerns", eventsByEventType.concern_raised[0].payload.note);
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
        {eventsByEventType.concern_raised.map((concern) => (
          <VerticalTimelineElement
            key={concern.id}
            className='vertical-timeline-element--work'
            contentArrowStyle={{
              borderRight: `7px solid  ${GlobalStyles.birdieBlue}`,
            }}
            date={moment(concern.timestamp).format("LL")}
            iconStyle={{ background: `${GlobalStyles.birdieBlue}` }}
            icon={<WorkIcon />}
          >
            <h3 className='vertical-timeline-element-title'>
              Severity: {concern.payload.severity}
            </h3>
            <p>Further details: {concern.payload.note}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default ConcernsTimeline;
