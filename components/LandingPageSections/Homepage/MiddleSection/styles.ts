import styled from "styled-components";
import media from "styled-media-query";

import { Theme } from "../../../../types/theme";

type Props = {
  theme: Theme;
};

export const Container = styled.div`
  height: calc(100vh - 5em);
`;

export const ImageContainer = styled.div`
  position: absolute;
  right: 0;
  z-index: 10;
  margin-top: 29vh;
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
  justify-content: center;
  align-items: center;
  color: ${({ theme }: Props) => theme.colors.black};
  font-size: 2rem;
  padding: 1em;
  width: 45vw;
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
