import Image from "next/image";
import { useRouter } from "next/router";

import Button from "../Button";
import * as S from "./styles";

export default function Custom404() {
  const router = useRouter();

  const navigateToHome = () =>
    router.asPath.split("/")[1] === "dashboard"
      ? router.push("/dashboard")
      : router.push("/");

  return (
    <S.Container>
      <Image
        src={"/images/404.svg"}
        alt="Garota sentada no desenho de um número 0 com uma carinha no meio, o 0 faz parte de um desenho caricato do número 404"
        layout="intrinsic"
        width={700}
        height={500}
      />
      <Button handleClick={navigateToHome} secondary>
        Retornar para página inicial
      </Button>
    </S.Container>
  );
}
