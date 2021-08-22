import Image from "next/image";
import * as S from "./styles";

export default function MiddleSection() {
  return (
    <S.MiddleSectionContainer>
      <S.FirstSection>
        <S.FirstSectionText>
          Totalmente gratuito e de código aberto
        </S.FirstSectionText>
      </S.FirstSection>
      <S.SecondSection>
        <S.SecondSectionText>
          Perfeito para estudantes do ensino fundamental ao superior!
        </S.SecondSectionText>
        <S.ImageContainer>
          <Image
            src={"/images/girl_reading.svg"}
            alt="Garota lendo um livro enquanto se encontrada sentada em cima de outros três livros"
            layout="intrinsic"
            width={700}
            height={600}
          />
        </S.ImageContainer>
      </S.SecondSection>

      <S.ThirdSection />
    </S.MiddleSectionContainer>
  );
}
