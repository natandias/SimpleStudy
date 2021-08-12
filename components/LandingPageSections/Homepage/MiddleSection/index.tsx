import Image from "next/image";
import * as S from "./styles";

export default function MiddleSection() {
  return (
    <S.Container>
      <S.FirstSection>
        <p>Totalmente gratuito e de código aberto</p>
      </S.FirstSection>
      <S.SecondSection>
        <S.SecondSectionText>
          Perfeito para estudantes do ensino fundamental ao superior!
        </S.SecondSectionText>
        <S.ImageContainer>
          <Image
            src={"/images/girl_reading.svg"}
            alt="Garota sentada no desenho de um número 0 com uma carinha no meio, o 0 faz parte de um desenho caricato do número 404"
            layout="fixed"
            width={800}
            height={700}
          />
        </S.ImageContainer>
      </S.SecondSection>

      <S.ThirdSection></S.ThirdSection>
    </S.Container>
  );
}
