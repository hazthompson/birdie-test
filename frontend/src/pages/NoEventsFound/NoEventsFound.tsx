/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useHistory } from "react-router-dom";
import GlobalStyles from "assets/GlobalStyles";

function NoEventsFound() {
  const history = useHistory();

  const returnToHome = async (e: any) => {
    history.push(`/`);
  };

  return (
    <div
      css={css`
        background-color: ${GlobalStyles.lightGray};
        height: 100vh;
        margin: 0;
        position: relative;
        @media (max-width: ${GlobalStyles.mobileBreakpoint}px) {
          background-color: ${GlobalStyles.darkGrayBlue};
        }
      `}
    >
      <div
        css={css`
          background-color: ${GlobalStyles.darkGrayBlue};
          height: 500px;
          width: 500px;
          border-radius: 10px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: grid;
          align-content: center;
          @media (max-width: ${GlobalStyles.mobileBreakpoint}px) {
            width: 100vw;
          }
        `}
      >
        <div
          css={css`
            display: grid;
            padding: 0 80px 0 80px;
          `}
        >
          <h3
            css={css`
              color: ${GlobalStyles.copperOrange};
              font-weight: bold;
              font-family: ${GlobalStyles.headerFont};
            `}
          >
            No Events found for this ID
          </h3>
          <p
            css={css`
              color: ${GlobalStyles.copperOrange};
              margin-bottom: 40px;
              font-family: ${GlobalStyles.bodyFont};
            `}
          >
            Please check the ID is correct, or come back again once events have
            been added for this recipient
          </p>
          <button
            onClick={returnToHome}
            css={css`
              font-family: ${GlobalStyles.headerFont};
              font-weight: bold;
              margin: auto;
              border: none;
              border-radius: 5px;
              background-color: ${GlobalStyles.birdieBlue};
              height: 30px;
              color: ${GlobalStyles.lightGray};
              &:hover {
                background-color: ${GlobalStyles.lightGray};
                cursor: pointer;
                color: ${GlobalStyles.darkGrayBlue};
              }
            `}
          >
            Return to homepage
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoEventsFound;
