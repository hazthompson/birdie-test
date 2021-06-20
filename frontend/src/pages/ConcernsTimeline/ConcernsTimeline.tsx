/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import GlobalStyles from 'assets/GlobalStyles';
import moment from 'moment';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { EventModelInterface } from 'utils/interfaces';
import FlagIcon from './FlagIcon';

interface ConcernTimelineProps {
  concerns: EventModelInterface[];
}

function ConcernsTimeline({ concerns }: ConcernTimelineProps) {
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
        {concerns.map((concern) => (
          <VerticalTimelineElement
            key={concern.id}
            className='vertical-timeline-element--work'
            contentStyle={{ border: `3px solid  ${GlobalStyles.accentOrange}` }}
            contentArrowStyle={{
              borderRight: `7px solid  ${GlobalStyles.accentOrange}`,
              marginRight: '3px',
              marginLeft: '3px',
            }}
            date={moment(concern.timestamp).format('LL')}
            iconStyle={{ background: `${GlobalStyles.accentOrange}` }}
            icon={<FlagIcon />}
          >
            <h3
              className='vertical-timeline-element-title'
              css={css`
                font-family: ${GlobalStyles.headerFont};
              `}
            >
              Severity: {concern.payload.severity}
            </h3>
            <p
              css={css`
                font-family: ${GlobalStyles.bodyFont};
                font-weight: 200;
              `}
            >
              Further details: {concern.payload.note}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default ConcernsTimeline;
