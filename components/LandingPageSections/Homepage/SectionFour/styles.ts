import styled from "styled-components";
import media from "styled-media-query";
import theme from "../../../../styles/theme";

import { Theme } from "../../../../types/theme";
import Button from "../../../Button";

type Props = {
  theme: Theme;
};

export const LastSectionContainer = styled.div`
  height: 80vh;
  background: url("/images/boy_computer_hi.svg") no-repeat;
  background-position: right -5em top 91%;
  background-color: ${({ theme }: Props) => theme.colors.secondary};
  position: relative;
  display: flex;
  align-items: center;

  ${media.lessThan("medium")`
    background: none;
    background-color: ${({ theme }: Props) => theme.colors.secondary};
    height: 100vh;
    margin-top: 8em;
  `}
`;

export const TextBox = styled.div`
  padding: 2em;

  ${media.greaterThan("medium")`
    max-width: 60vw;
  `}
`;

export const Title = styled.h1`
  color: ${({ theme }: Props) => theme.colors.black};
`;

export const SubTitle = styled.h2`
  color: ${({ theme }: Props) => theme.colors.darkGray};
  margin-top: 1em;
`;

export const CreateAccountButton = styled(Button)`
  margin-left: 2em;
`;

export const Footer = styled.div`
  background: ${({ theme }: Props) => theme.colors.primary};
  width: 100%;
  height: 5em;
  position: absolute;
  bottom: 0;
`;
