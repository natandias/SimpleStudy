import { useRouter } from "next/router";

import * as S from "./styles";
import Button from "../Button";

type Props = {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
};

export default function Navbar({ isMobileMenuOpen, toggleMobileMenu }: Props) {
  const router = useRouter();

  const navigateToHome = () => router.push("/");

  const createAccount = () => router.push("/register");

  const login = () => router.push("/login");

  return (
    <S.Navbar>
      <S.NavbarMobile>
        {!isMobileMenuOpen ? (
          <S.HamburguerMenu size={48} onClick={toggleMobileMenu} />
        ) : (
          <S.CloseMenu size={48} onClick={toggleMobileMenu} />
        )}
      </S.NavbarMobile>

      <S.NavbarTitle onClick={navigateToHome}>Simple Study</S.NavbarTitle>

      <S.NavbarActionButtons>
        <Button handleClick={createAccount} size="SM" secondary>
          Criar conta
        </Button>
        <Button handleClick={login} size="SM" tertiary>
          Login
        </Button>
      </S.NavbarActionButtons>
    </S.Navbar>
  );
}
