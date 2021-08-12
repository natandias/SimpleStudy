import styled from "styled-components";
import media from "styled-media-query";

import { Theme } from "../../types/theme";

import { FiMenu, FiX } from "react-icons/fi";

type Props = {
  theme: Theme;
};

export const Navbar = styled.div`
  position: fixed;
  top: 0;
  z-index: 9999;
  background: ${({ theme }: Props) => theme.colors.primary};
  width: 100%;
  height: 5em;
  display: flex;
  align-items: center;
  padding: 1em;
  justify-content: space-between;
  box-shadow: 0px 5px 5px ${({ theme }: Props) => theme.colors.gray};

  ${media.lessThan("medium")`
    justify-content: flex-start;
    gap: 0.5em;
  `}
`;

export const NavbarTitle = styled.p`
  color: ${props => props.theme.colors.white};
  font-size: 1.4rem;
  cursor: pointer;
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
