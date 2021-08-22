import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as S from "./styles";

export default function Congratulations() {
  const router = useRouter();

  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalId);
          router.push("/dashboard");
          return 100;
        } else {
          return prev + 15;
        }
      });
    }, 500);
    return () => clearInterval(intervalId);
  }, [router]);

  return (
    <S.Container>
      <S.MainSection>
        <S.Title>Parabéns !</S.Title>
        <S.Subtitle>
          Você já será redirecionado para o seu dashboard ! Aguarde só um
          momento.
        </S.Subtitle>

        <S.ProgressBar
          className="progress is-primary"
          value={currentProgress}
          max="100"
        >
          15%
        </S.ProgressBar>
      </S.MainSection>
    </S.Container>
  );
}
