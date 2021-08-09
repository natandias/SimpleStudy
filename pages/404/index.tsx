import Image from "next/image";
import { useRouter } from "next/router";

import Button from "../../components/Button";
import * as S from "./styles";

export default function Custom404() {
  const router = useRouter();

  const navigateToHome = () => router.push("/");

  return (
    <S.Container>
      <Image
        src={"/images/404.svg"}
        alt="Picture of the author"
        layout="intrinsic"
        width={700}
        height={500}
      />
      <Button handleClick={navigateToHome} tertiary>Retornar para página inicial</Button>
    </S.Container>
  );
}
