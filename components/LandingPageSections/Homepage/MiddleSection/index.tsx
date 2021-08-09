import Image from "next/image";
import * as S from "./styles";

export default function MiddleSection() {
  return (
    <S.Container>
      <S.ImageContainer>
        <Image
          src={"/images/girl_reading.svg"}
          alt="Garota sentada no desenho de um número 0 com uma carinha no meio, o 0 faz parte de um desenho caricato do número 404"
          layout="intrinsic"
          width={700}
          height={600}
        />
      </S.ImageContainer>

      <S.FirstSection>
        <p>Totalmente gratuito e de código aberto</p>
      </S.FirstSection>
      <S.SecondSection>
        <p>Perfeito para estudantes do ensino fundamental ao superior!</p>
      </S.SecondSection>
      <S.ThirdSection></S.ThirdSection>
    </S.Container>
  );
}
