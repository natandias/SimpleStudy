import styled from "styled-components";
import media from "styled-media-query";

import { Theme } from "../../../types/theme";

type Props = {
  theme: Theme;
};

export const LoginContainer = styled.div`
  height: calc(100vh - 5em);
  background: url("/images/boy_at_door.svg") no-repeat;
  background-position: right -11em top 100%;

  ${media.lessThan("medium")`
    background-position: right -28em top 100%;
  `}
`;

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  color: ${({ theme }: Props) => theme.colors.black};
  font-size: 2rem;
  padding: 2em 1em;

  ${media.greaterThan("medium")`
    max-width: 50vw;
  `}

  ${media.lessThan("medium")`
    flex-wrap: wrap;
    justify-content: center;
  `}
`;

export const FormTitle = styled.p`
  font-size: 1.4rem;
`;
export const LoginForm = styled.form`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
`;

export const FormErrorText = styled.span`
  color: ${({ theme }: Props) => theme.colors.red};
`;

export const ForgotPasswordLink = styled.a`
  font-size: 1rem;
  margin: 1em auto;
  color: ${({ theme }: Props) => theme.colors.primary};
`;