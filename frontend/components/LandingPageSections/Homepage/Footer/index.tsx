import * as S from "./styles";

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.Title>Simple Study</S.Title>
      <S.LinksContainer>
        <S.Link href="#">Política de Privacidade</S.Link>
        <S.Link href="#">Termos de Uso</S.Link>
        <S.Link href="#">Fale Conosco</S.Link>
      </S.LinksContainer>
    </S.FooterContainer>
  );
}
