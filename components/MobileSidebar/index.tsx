import React from "react";
import Link from "next/link";

import * as S from "./styles";

type Props = {
  isOpen: boolean;
  ref: React.MutableRefObject<HTMLDivElement>;
};

const MobileSidebar = React.forwardRef<HTMLDivElement, Props>(
  ({ isOpen }, ref) => (
    <S.Container isOpen={isOpen} ref={ref}>
      <S.SidebarButtonsContainer isOpen={isOpen}>
        <Link href="/register" passHref>
          <S.SidebarItemsLinks isOpen={isOpen}>Criar conta</S.SidebarItemsLinks>
        </Link>
        <Link href="/login" passHref>
          <S.SidebarItemsLinks isOpen={isOpen}>Login</S.SidebarItemsLinks>
        </Link>
      </S.SidebarButtonsContainer>
    </S.Container>
  )
);

MobileSidebar.displayName = "MobileSidebar";

export default MobileSidebar;
