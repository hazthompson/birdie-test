/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import GlobalStyles from "../../assets/GlobalStyles";
import { useParams } from "react-router-dom";
import { ParamTypes } from "utils/interfaces";
import { NavLink } from "react-router-dom";

interface AppBarProps {
  hasConcerns: Boolean;
}

const navLinkStyling = css`
  color: ${GlobalStyles.birdieBlue};
  cursor: pointer;
  grid-row: 1;
  font-family: ${GlobalStyles.headerFont};
  font-weight: bold;
  text-decoration: none;
  font-size: 25px;
  &:hover {
    text-decoration: underline;
    text-underline-position: under;
  }
  &:visited {
    color: ${GlobalStyles.birdieBlue};
  }
`;

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
        exact
        to={`/${careRecipientId}`}
        activeStyle={{
          textDecoration: "underline",
          textUnderlinePosition: "under",
        }}
        css={navLinkStyling}
      >
        Observations
      </NavLink>
      {hasConcerns && (
        <NavLink
          to={`/${careRecipientId}/concerns`}
          activeStyle={{
            textDecoration: "underline",
            textUnderlinePosition: "under",
          }}
          css={navLinkStyling}
        >
          Concerns
        </NavLink>
      )}
    </div>
  );
}

export default AppBar;
