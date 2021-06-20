/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

function FlagIcon() {
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

export default FlagIcon;
