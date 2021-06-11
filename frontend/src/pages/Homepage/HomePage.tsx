/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import GlobalStyles from "assets/GlobalStyles";

function Homepage() {
  const history = useHistory();
  const [recipientId, setRecipientId] = useState<string>("");

  const handleSubmit = async (e: any) => {
    history.push(`/${recipientId}`);
  };
  return (
    <div
      css={css`
        background-color: ${GlobalStyles.lightGray};
        height: 100vh;
        margin: 0;
        position: relative;
      `}
    >
      <div
        css={css`
          background-color: ${GlobalStyles.birdieBlue};
          height: 500px;
          width: 500px;
          border-radius: 10px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: grid;
          align-content: center;
        `}
      >
        <form
          onSubmit={handleSubmit}
          css={css`
            display: grid;
            padding: 0 80px 0 80px;
          `}
        >
          <label
            css={css`
              font-weight: bold;
            `}
          >
            Care Recipient's ID:
          </label>
          <input
            type='text'
            id='recipientId'
            name='recipientId'
            css={css`
              margin: 40px 0 40px 0;
              border-radius: 5px;
              border: none;
              height: 30px;
            `}
            onChange={(event) => setRecipientId(event.target.value)}
          ></input>
          <input
            type='submit'
            value='Submit'
            css={css`
              width: 25%;
              font-weight: bold;
              margin: auto;
              border: none;
              border-radius: 5px;
              background-color: ${GlobalStyles.darkGrayBlue};
              color: ${GlobalStyles.lightGray};
              height: 30px;
              &:hover {
                background-color: ${GlobalStyles.lightGray};
                cursor: pointer;
                color: ${GlobalStyles.darkGrayBlue};
              }
            `}
          ></input>
        </form>
      </div>
    </div>
  );
}

export default Homepage;
