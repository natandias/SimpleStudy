import Image from "next/image";
import { FiTwitter, FiGithub } from "react-icons/fi";

import * as S from "./styles";

export default function QuestionSection() {
  return (
    <S.QuestionSectionContainer>
      <S.FirstSection>
        <S.FirstSectionText>
          Cansado de repetir a pergunta: “Tem prova hoje?” <br /> O Simple Study
          vai resolver o seu problema!
        </S.FirstSectionText>
      </S.FirstSection>
      <S.SecondSection>
        <S.SecondSectionInfoContainer>
          <S.SecondSectionTitle>Dúvidas?</S.SecondSectionTitle>
          Entre em contato conosco!
          <S.SecondSectionSocialMedia>
            <a
              className="TwitterInfo"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiTwitter size="1.4rem" /> @simpleStudy
            </a>
            <a
              className="GithubInfo"
              href="https://github.com/natandias"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub size="1.4rem" /> natandias
            </a>
          </S.SecondSectionSocialMedia>
        </S.SecondSectionInfoContainer>

        <S.ImageContainer>
          <Image
            src={"/images/questions_people.svg"}
            alt="Um homem segurando uma prancheta e uma mulher tocando num grande símbolo de interrogação"
            layout="intrinsic"
            width={800}
            height={700}
          />
        </S.ImageContainer>
      </S.SecondSection>
    </S.QuestionSectionContainer>
  );
}
