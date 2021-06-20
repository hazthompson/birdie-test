/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';

interface IconProps {
  eventType: string;
}

const standardIconStyling = css`
  margin-block-start: 0rem;
  margin-block-end: 0rem;
  margin: 28px 0px 0px 10px;
`;

const wideIconStyling = css`
  margin-block-start: 0rem;
  margin-block-end: 0rem;
  margin: 28px 0px 0px 5px;
`;

const moodIconStyling = css`
  margin-block-start: 0rem;
  margin-block-end: 0rem;
  margin: 28px 0px 0px 8px;
`;

function ObservationIcon({ eventType }: IconProps) {
  return (
    <div>
      {(() => {
        switch (eventType) {
          case 'fluid_intake_observation':
            return (
              <p css={wideIconStyling}>
                <FontAwesomeIcon icon={faCoffee} />
              </p>
            );
          case 'food_intake_observation':
            return (
              <p css={standardIconStyling}>
                <FontAwesomeIcon icon={faUtensils} />{' '}
              </p>
            );
          case 'general_observation':
            return (
              <p css={standardIconStyling}>
                <FontAwesomeIcon icon={faClipboard} />
              </p>
            );
          case 'mood_observation':
            return (
              <p css={moodIconStyling}>
                <FontAwesomeIcon icon={faSmile} />
              </p>
            );
          default:
            return (
              <p css={standardIconStyling}>
                <FontAwesomeIcon icon={faFlag} />
              </p>
            );
        }
      })()}
    </div>
  );
}

export default ObservationIcon;
