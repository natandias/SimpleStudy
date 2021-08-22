import styled from "styled-components";
import media from "styled-media-query";

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

  ${media.lessThan("medium")`
    background: none;
    background-color: ${({ theme }: Props) => theme.colors.secondary};
    height: 100vh;
    margin-top: 13em;
    padding-bottom: 16em;
    padding-top: 1em;
    align-items: center;
  `}
`;

export const TextBoxContainer = styled.div`
  ${media.lessThan("medium")`
    text-align: center;
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
  ${media.greaterThan("medium")`
    margin-left: 2em;
  `}
`;
