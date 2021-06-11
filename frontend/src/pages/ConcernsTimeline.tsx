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

interface ConcernTimelineProps {
  events: Array<EventModelInterface>;
}

function WorkIcon() {
  return <p>1</p>;
}

function ConcernsTimeline({ events }: ConcernTimelineProps) {
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
        {events.map((concern) => (
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
