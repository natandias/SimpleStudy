import styled from "styled-components";
import media from "styled-media-query";
import { Theme } from "../../../../types/theme";

type Props = {
  theme: Theme;
};

export const FooterContainer = styled.div`
  background: ${({ theme }: Props) => theme.colors.primary};
  min-height: 5em;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1em 2em;

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`;

export const Title = styled.p`
  color: ${({ theme }: Props) => theme.colors.white};
  font-size: 1.4rem;

  ${media.lessThan("medium")`
    margin: auto;
    margin-bottom: 1em;
  `}
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;

  ${media.lessThan("medium")`
    flex-direction: column;
    gap: 0.2em;
    text-align: center;
    margin: auto;
    margin-top: 1em;
  `}
`;

export const Link = styled.a`
  color: ${({ theme }: Props) => theme.colors.white};
  font-size: 1.2rem;
`;
