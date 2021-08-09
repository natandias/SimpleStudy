import styled from "styled-components";
import media from "styled-media-query";

import { Theme } from "../../../types/theme";
import Button from "../../Button";

type Props = {
  theme: Theme;
};

export const Container = styled.div`
  height: calc(100vh - 5em);
  background: url("/images/girl_studying.svg") no-repeat;
  background-position: right -18em top 10%;

  ${media.lessThan("medium")`
    background-position: right -28em top 52%;
  `}
`;

export const TextBox = styled.div`
  padding: 2em;
  padding-top: 20%;

  ${media.greaterThan("medium")`
    max-width: 60vw;
  `}
`;

export const Title = styled.h1`
  color: ${({ theme }: Props) => theme.colors.primary};
`;

export const SubTitle = styled.h2`
  color: ${({ theme }: Props) => theme.colors.darkGray};
`;

export const CreateAccountButton = styled(Button)`
  margin-left: 2em;
`;

export const GreyFooter = styled.div`
  background: grey;
  width: 100%;
  height: 3em;
  position: absolute;
  bottom: 0;
  clip-path: polygon(0% 100%, 100% 100%, 100% 30px, calc(100vw - 99vw) 0%, 0% 0%);
`;
