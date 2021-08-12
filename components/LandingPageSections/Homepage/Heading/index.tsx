import { useRouter } from "next/router";

import * as S from "./styles";

export default function Heading() {
  const router = useRouter();

  const navigateToCreateAccount = () => router.push("/register");

  return (
    <S.HeadingContainer>
      <div className="TextBoxContainer">
      <S.TextBox>
        <S.Title>
          Perdendo a data de entrega de suas atividades escolares?
        </S.Title>
        <S.SubTitle>
          Comece a usar agora o Simple Study e nunca mais passe por essa
          situação!
        </S.SubTitle>
      </S.TextBox>
      <S.CreateAccountButton handleClick={navigateToCreateAccount} size="SM" secondary>
        Criar conta gratuitamente
      </S.CreateAccountButton>
      </div>
      <S.GreyFooter />
    </S.HeadingContainer>
  );
}
