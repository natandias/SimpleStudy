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
    <S.Container>
      <S.MainSection>
        <S.FormTitle>Entre com seu email e senha</S.FormTitle>
        <S.Form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label className="label" htmlFor="email">Email</label>
            <div className="control">
              <input
                id="email"
                aria-invalid={errors.email ? "true" : "false"}
                className="input is-rounded"
                type="email"
                placeholder="Email"
                {...register("email", { required: "Email é obrigatório!" })}         
              />
              {errors.email && (
                <S.FormErrorText role="alert">{errors?.email?.message}</S.FormErrorText>
              )}
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="password">Senha</label>
            <div className="control">
              <input
                id="password"
                aria-invalid={errors.password ? "true" : "false"}
                className="input is-rounded"
                type="password"
                placeholder="Senha"
                {...register("password", {
                  required: "Senha é obrigatória",
                  minLength: {
                    value: 5,
                    message: "Senha deve ter ao mínimo 5 caracteres",
                  },
                })}
              />
              {errors.password && (
                <S.FormErrorText role="alert">{errors?.password?.message}</S.FormErrorText>
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
        </S.Form>
      </S.MainSection>
    </S.Container>
  );
}
