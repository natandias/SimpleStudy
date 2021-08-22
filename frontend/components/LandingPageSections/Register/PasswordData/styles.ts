import styled from "styled-components";
import media from "styled-media-query";

import { Theme } from "../../../../types/theme";

type Props = {
  theme: Theme;
};

export const Container = styled.div`
  height: calc(100vh - 5em);
  background: url("/images/authentication.svg") no-repeat;
  background-position: right 1em top 24em;

  ${media.lessThan("medium")`
    background-position: right -5em top 27em;
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

export const Form = styled.form`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.p`
  font-size: 1.4rem;
`;

export const FormErrorText = styled.p`
  color: ${({ theme }: Props) => theme.colors.red};
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: space-evenly;

  ${media.lessThan("medium")`
    flex-direction: column-reverse;
  `}
`;

export const PasswordEyeIcon = styled.span<Props & { isPasswordVisible: boolean }>`
  cursor: pointer;
  pointer-events: all !important;
  color: ${({ theme, isPasswordVisible }) =>
    isPasswordVisible ? theme.colors.black : theme.colors.gray};
`;