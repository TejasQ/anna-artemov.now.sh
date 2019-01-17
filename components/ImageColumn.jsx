import styled from "@emotion/styled";
import { RWD } from "../util/constants";

export const ImageColumn = styled("div")`
  grid-row: 1;

  @media (min-width: ${RWD.TABLET}px) {
    grid-row: auto;
  }
`;
