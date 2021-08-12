import styled from "styled-components";
import media from "styled-media-query";

import { Theme } from "../../../../types/theme";

type Props = {
  theme: Theme;
};

export const Container = styled.div`
  height: calc(100vh - 5em);
  /* background: url("/images/girl_reading.svg") no-repeat;
  background-position: right -18em top 10%; */
`;

export const FirstSection = styled.div`
  background: ${({ theme }: Props) => theme.colors.gray};
  height: 45%;
  clip-path: polygon(0% 89%, 100% 100%, 100% 0, calc(100vw - 99vw) 0%, 0% 0%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }: Props) => theme.colors.black};
  font-size: 2rem;
  padding: 1em;
`;

export const SecondSection = styled.div`
  height: 45%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }: Props) => theme.colors.black};
  font-size: 2rem;
  padding: 1em;

  ${media.lessThan("medium")`
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
  `}
`;

export const SecondSectionText = styled.p`
  width: 45vw;

  ${media.lessThan("medium")`
    width: 100vw;
    text-align: center;
  `}
`;

export const ImageContainer = styled.div`
  z-index: 999;

  ${media.greaterThan("medium")`
    margin-right: -6em;
  `}
`;

export const ThirdSection = styled.div`
  height: 10%;
  background: ${({ theme }: Props) => theme.colors.primary};
  clip-path: polygon(
    0% 100%,
    100% 100%,
    100% 30px,
    calc(100vw - 99vw) 0%,
    0% 0%
  );
`;
