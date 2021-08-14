import styled from "styled-components";
import media from "styled-media-query";

import { Theme } from "../../../../types/theme";

type Props = {
  theme: Theme;
};

export const MiddleSectionContainer = styled.div`
  height: calc(100vh + 24em);
  position: relative;
`;

export const FirstSection = styled.section`
  background: ${({ theme }: Props) => theme.colors.gray};
  height: 40%;
  clip-path: polygon(0% 94%, 100% 100%, 100% 0, calc(100vw - 99vw) 0%, 0% 0%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }: Props) => theme.colors.black};
  font-size: 2rem;
  padding: 0 1em;
`;

export const FirstSectionText = styled.p`
  margin-top: -1.6em;
  text-align: center;
`;

export const SecondSection = styled.section`
  height: 53%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }: Props) => theme.colors.black};
  font-size: 2rem;
  padding: 1em;

  ${media.lessThan("medium")`
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

export const ThirdSection = styled.section`
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
