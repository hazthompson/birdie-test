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

function ObservationIcon({ eventType }: IconProps) {
  if (eventType.includes('fluid')) {
    return (
      <p
        css={css`
          margin-block-start: 0rem;
          margin-block-end: 0rem;
          margin: 28px 0px 0px 5px;
        `}
      >
        <FontAwesomeIcon icon={faCoffee} />
      </p>
    );
  } else if (eventType.includes('food')) {
    return (
      <p
        css={css`
          margin-block-start: 0rem;
          margin-block-end: 0rem;
          margin: 28px 0px 0px 10px;
        `}
      >
        <FontAwesomeIcon icon={faUtensils} />{' '}
      </p>
    );
  } else if (eventType.includes('general')) {
    return (
      <p
        css={css`
          margin-block-start: 0rem;
          margin-block-end: 0rem;
          margin: 28px 0px 0px 10px;
        `}
      >
        <FontAwesomeIcon icon={faClipboard} />
      </p>
    );
  } else if (eventType.includes('mood')) {
    return (
      <p
        css={css`
          margin-block-start: 0rem;
          margin-block-end: 0rem;
          margin: 28px 0px 0px 8px;
        `}
      >
        <FontAwesomeIcon icon={faSmile} />
      </p>
    );
  }
  return (
    <p
      css={css`
        margin-block-start: 0rem;
        margin-block-end: 0rem;
        margin: 28px 0px 0px 10px;
      `}
    >
      <FontAwesomeIcon icon={faFlag} />
    </p>
  );
}

export default ObservationIcon;
