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
    if (primary || secondary) return theme.colors.primaryDark;
    if (tertiary) return theme.colors.primary;
  }};
  border: ${({ theme, primary, secondary, tertiary }: Props) => {
    if (primary || secondary) return `1px solid ${theme.colors.white}`;
    if (tertiary) return `1px solid ${theme.colors.primary}`;
  }};
  font-size: 1rem;
`;
