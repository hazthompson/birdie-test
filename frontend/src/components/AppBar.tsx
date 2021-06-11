/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import GlobalStyles from "../assets/GlobalStyles";
import { useParams } from "react-router-dom";
import { ParamTypes } from "../../../utils/interfaces";
import { NavLink } from "react-router-dom";

interface AppBarProps {
  hasConcerns: Boolean;
}

function AppBar({ hasConcerns }: AppBarProps) {
  const { careRecipientId } = useParams<ParamTypes>();
  return (
    <div
      css={css`
        background-color: ${GlobalStyles.darkGrayBlue};
        height: 100px;
        display: grid;
        align-items: center;
      `}
    >
      <NavLink
        to={`/${careRecipientId}`}
        css={css`
          grid-row: 1;
        `}
      >
        Observations
      </NavLink>
      {hasConcerns && (
        <NavLink
          to={`/${careRecipientId}/concerns`}
          css={css`
            grid-row: 1;
          `}
        >
          Concerns
        </NavLink>
      )}
    </div>
  );
}

export default AppBar;
