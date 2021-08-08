import { useState } from "react";

import * as S from "./styles";
import Button from "../Button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const createAccount = () => {
    console.log("createAccount");
  };

  const login = () => {
    console.log("login");
  };

  const toggleIsMobileMenuOpen = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <S.Navbar>
      <S.NavbarTitle>Simple Study</S.NavbarTitle>

      <S.NavbarActionButtons>
        <Button onClickAction={createAccount} size="SM" secondary>
          Criar conta
        </Button>
        <Button onClickAction={login} size="SM" tertiary>
          Login
        </Button>
      </S.NavbarActionButtons>

      <S.NavbarMobile>
        {!isMobileMenuOpen ? (
          <S.HamburguerMenu size={48} onClick={toggleIsMobileMenuOpen} />
        ) : (
          <S.CloseMenu size={48} onClick={toggleIsMobileMenuOpen} />
        )}
      </S.NavbarMobile>
    </S.Navbar>
  );
}
