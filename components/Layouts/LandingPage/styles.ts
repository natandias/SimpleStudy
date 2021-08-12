import styled from "styled-components";
import media from "styled-media-query";

export const MainSection = styled.main`
  ${media.lessThan("medium")`
      padding-top: 2em;
  `}
`;
