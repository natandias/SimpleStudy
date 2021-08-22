import Link from "next/link";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FiMail, FiEye, FiEyeOff, FiLock } from "react-icons/fi";

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

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  return (
    <S.Container>
      <S.MainSection>
        <S.FormTitle>Entre com seu email e senha</S.FormTitle>
        <S.Form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label className="label" htmlFor="email">
              Email
            </label>
            <div className="control has-icons-left">
              <input
                id="email"
                aria-invalid={errors.email ? "true" : "false"}
                className="input is-rounded"
                type="email"
                placeholder="Email"
                {...register("email", { required: "Email é obrigatório!" })}
              />

              <span className="icon is-small is-left">
                <FiMail size="1rem"/>
              </span>
              {errors.email && (
                <S.FormErrorText role="alert">
                  {errors?.email?.message}
                </S.FormErrorText>
              )}
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="password">
              Senha
            </label>
            <div className="control has-icons-left has-icons-right">
              <input
                id="password"
                className="input is-rounded"
                aria-invalid={errors.password ? "true" : "false"}
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Senha"
                {...register("password", {
                  required: "Senha é obrigatória"
                })}
              />

              <span className="icon is-small is-left">
                <FiLock size="1rem" style={{ cursor: "pointer" }} />
              </span>

              <S.PasswordEyeIcon
                className="icon is-small is-right"
                isPasswordVisible={isPasswordVisible}
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? (
                  <FiEye size="1rem" style={{ cursor: "pointer" }} />
                ) : (
                  <FiEyeOff size="1rem" style={{ cursor: "pointer" }} />
                )}
              </S.PasswordEyeIcon>

              {errors.password && (
                <S.FormErrorText role="alert">
                  {errors?.password?.message}
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
        </S.Form>
      </S.MainSection>
    </S.Container>
  );
}
