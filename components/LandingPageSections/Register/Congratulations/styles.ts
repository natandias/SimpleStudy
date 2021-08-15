import styled from "styled-components";
import media from "styled-media-query";

import { Theme } from "../../../../types/theme";

type Props = {
  theme: Theme;
};

export const Container = styled.div`
  height: calc(100vh - 5em);
  background: url("/images/people_partying.svg") no-repeat;
  background-position: right 1em top 16em;

  ${media.lessThan("medium")`
    background-position: right -5em top 10em;
  `}
`;

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  color: ${({ theme }: Props) => theme.colors.black};
  padding: 2em;

  ${media.greaterThan("medium")`
    max-width: 50vw;
  `}

  ${media.lessThan("medium")`
    flex-wrap: wrap;
    justify-content: center;
  `}
`;

export const Title = styled.p`
  font-size: 2rem;
  color: ${({ theme }: Props) => theme.colors.primary};
`;

export const Subtitle = styled.p`
  font-size: 1.3rem;
  margin-top: 1em;
`;

export const ProgressBar = styled.progress` 
  margin-top: 3em;
`;