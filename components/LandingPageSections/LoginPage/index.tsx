import Link from "next/link";
import { useRef } from "react";
import { useForm } from "react-hook-form";

import Button from "../../Button";
import * as S from "./styles";

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (data: FormData) => {
    console.log("onSubmit", data);
  };

  return (
    <S.LoginContainer>
      <S.MainSection>
        <S.FormTitle>Entre com seu email e senha</S.FormTitle>
        <S.LoginForm ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <S.FormErrorText>Email é obrigatório!</S.FormErrorText>
              )}
            </div>
          </div>

          <div className="field">
            <label className="label">Senha</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="Senha"
                {...register("password", { required: true, minLength: 5 })}
              />
              {errors.password && (
                <S.FormErrorText>
                  {errors.password?.type === "minLength"
                    ? "Senha deve ter ao mínimo 5 caracteres"
                    : "Senha é obrigatória"}
                  !
                </S.FormErrorText>
              )}
            </div>
          </div>

          <Button
            handleClick={() => {
              if (formRef.current) {
                formRef.current.dispatchEvent(
                  new Event("submit", {
                    cancelable: true,
                    bubbles: true,
                  })
                );
              }
            }}
            size="SM"
            secondary
          >
            Entrar
          </Button>

          <Link href="/forgot-password" passHref>
            <S.ForgotPasswordLink>Esqueceu sua senha?</S.ForgotPasswordLink>
          </Link>
        </S.LoginForm>
      </S.MainSection>
    </S.LoginContainer>
  );
}
