import styled from "styled-components";
import { Theme } from "../../types/theme";

type Props = {
  theme: Theme;
  size: "SM" | "MD" | "LG";
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
};

export const Button = styled.button<Props>`
  cursor: pointer;
  border-radius: 25px;
  font-size: 1rem;
  padding: ${({ theme, size }: Props) => {
    if (size === "LG") return `1rem ${theme.spacings.large}`;
    if (size === "MD") return `1rem ${theme.spacings.medium}`;
    return `1rem ${theme.spacings.small}`;
  }};
  background: ${({ theme, primary, secondary, tertiary }: Props) => {
    if (primary) return theme.colors.primary;
    if (secondary) return theme.colors.secondary;
    if (tertiary) return theme.colors.white;
  }};
  color: ${({ theme, primary, secondary, tertiary }: Props) => {
    if (primary) return theme.colors.white;
    if (secondary) return theme.colors.primaryDark;
    if (tertiary) return theme.colors.primary;
  }};
  border: ${({ theme }: Props) => `2px solid ${theme.colors.white}`};

  &:hover {
    background: ${({ theme, primary, secondary, tertiary }: Props) => {
      if (primary) return theme.colors.white;
      if (secondary) return theme.colors.secondaryDark;
      if (tertiary) return theme.colors.primary;
    }};
    color: ${({ theme, primary, secondary, tertiary }: Props) => {
      if (primary || secondary) return theme.colors.primary;
      if (tertiary) return theme.colors.white;
    }};
    border: ${({ theme, primary, secondary, tertiary }: Props) => {
      if (primary ) return `2px solid ${theme.colors.primary}`;
      if (secondary) return `2px solid ${theme.colors.secondaryDark}`;
      if (tertiary) return `2px solid ${theme.colors.white}`;
    }};

    transition: all 0.5s ease;
  }
  
`;
