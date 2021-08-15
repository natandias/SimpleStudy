import styled from "styled-components";
import media from "styled-media-query";

import { Theme } from "../../../../types/theme";

type Props = {
  theme: Theme;
};

export const Container = styled.div`
  height: calc(100vh - 5em);
  background: url("/images/attachments.svg") no-repeat;
  background-position: right 0em top 100%;

  ${media.lessThan("medium")`
    background-position: right -28em top 3em;
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