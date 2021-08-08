import styled from "styled-components";
import media from "styled-media-query";

import { Theme } from "../../types/theme";

import { FiMenu, FiX } from "react-icons/fi";

type Props = {
  theme: Theme;
};

export const Navbar = styled.div`
  background: ${props => props.theme.colors.primary};
  width: 100%;
  height: 5em;
  display: flex;
  align-items: center;
  padding: 1em;
  justify-content: space-between;
`;

export const NavbarTitle = styled.p`
  color: ${props => props.theme.colors.white};
  font-size: 1.4rem;
`;

export const NavbarActionButtons = styled.div`
  ${media.lessThan("medium")`
    display: none;
  `}
  display: flex;
  gap: 0.5em;
`;

export const NavbarMobile = styled.div`
  ${media.greaterThan("medium")`
    display: none;
  `}
`;

export const HamburguerMenu = styled(FiMenu)`
  color: ${({ theme }: Props) => theme.colors.white};
  cursor: pointer;
`;

export const CloseMenu = styled(FiX)`
  color: ${({ theme }: Props) => theme.colors.white};
  cursor: pointer;
`;
