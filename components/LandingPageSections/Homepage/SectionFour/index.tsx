import { useRouter } from "next/router";

import * as S from "./styles";

export default function LastSection() {
  const router = useRouter();

  const navigateToCreateAccount = () => router.push("/register");

  return (
    <S.LastSectionContainer>
      <S.TextBoxContainer>
        <S.TextBox>
          <S.Title>
            Quer ver como o Simple Study pode resolver os seus problemas?
          </S.Title>
          <S.SubTitle>Comece sua experiência agora mesmo !</S.SubTitle>
        </S.TextBox>
        <S.CreateAccountButton
          handleClick={navigateToCreateAccount}
          size="SM"
          primary
        >
          Criar conta gratuitamente
        </S.CreateAccountButton>
      </S.TextBoxContainer> 
    </S.LastSectionContainer>
  );
}
