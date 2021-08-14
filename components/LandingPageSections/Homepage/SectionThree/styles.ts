import styled from "styled-components";
import media from "styled-media-query";

import { Theme } from "../../../../types/theme";

type Props = {
  theme: Theme;
};

export const QuestionSectionContainer = styled.div`
  height: 100vh;

  ${media.lessThan("medium")`
    height: calc(100vh + 17em);
  `}
`;

export const FirstSection = styled.section`
  background: ${({ theme }: Props) => theme.colors.primary};
  height: 60%;
  clip-path: polygon(0% 94%, 100% 100%, 100% 0, calc(100vw - 99vw) 0%, 0% 0%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }: Props) => theme.colors.white};
  font-size: 2rem;
  padding: 0 1em;
`;

export const FirstSectionText = styled.p`
  margin-top: -4em;
  text-align: center;
`;

export const SecondSection = styled.section`
  height: 40%;
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

export const SecondSectionInfoContainer = styled.p`
  width: 45vw;

  ${media.lessThan("medium")`
    width: 100vw;
    text-align: center;
  `}
`;

export const SecondSectionTitle = styled.p`
  color: ${({ theme }: Props) => theme.colors.primary};
`;

export const SecondSectionSocialMedia = styled.div`
  display: flex;
  flex-flow: column;
  font-size: 1.4rem;
  margin-top: 2em;
`;

export const ImageContainer = styled.div`
  z-index: 999;

  ${media.lessThan("medium")`
    background:  ${({ theme }: Props) => theme.colors.white};;
    border-radius: 12px;
  `}

  ${media.greaterThan("medium")`
    margin-right: -3em;
    margin-top: -5em;
  `}
`;
