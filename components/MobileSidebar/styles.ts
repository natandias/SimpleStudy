import React from "react";
import styled from "styled-components";

import { Theme } from "../../types/theme";

type Props = {
  theme: Theme;
  isOpen: boolean;
  children: React.ReactNode;
};

export const Container = styled.div`
  ${({ isOpen }: Props) => {
    if (!isOpen) return `width: 0px`;
  }};

  z-index: 9999;
  background: ${({ theme }: Props) => theme.colors.primary};
  height: calc(100vh - 5em);
  width: ${({ isOpen }: Props) => (isOpen ? `50vw` : `0`)};
  transition: width 0.5s;
`;

export const SidebarButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 1em;
  gap: 0.5em;
  color: ${({ theme }: Props) => theme.colors.white};
  width: ${({ isOpen }: Props) => (isOpen ? `50vw` : `0`)};
  transition: width 0.5s;
`;

export const SidebarItemsLinks = styled.a`
  font-size: 1.2rem;
  white-space: nowrap;
  padding: 0.5em;
  border-radius: 20px;
  cursor: pointer;

  &:active {
    background: ${({ theme }: Omit<Props, "isOpen">) => theme.colors.white};
    color: ${({ theme }: Omit<Props, "isOpen">) => theme.colors.primary};
  }
`;
