import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff, FiLock } from "react-icons/fi";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../../../Button";
import * as S from "./styles";
import { PasswordFormData, UserFormData } from "../types";

type Props = {
  goBack: () => void;
  goNext: () => void;
  submit: (data: UserFormData | PasswordFormData) => void;
  initialData: PasswordFormData;
};

export default function RegisterPasswordData({
  goBack,
  goNext,
  submit,
  initialData,
}: Props) {
  const schema = yup.object().shape({
    password: yup
      .string()
      .required("Senha é obrigatória")
      .min(5, "Senha deve ter ao mínimo 5 caracteres"),
    confirmPassword: yup
      .string()
      .required("Confirmação de senha é obrigatória")
      .equals(
        [yup.ref("password")],
        "Confirmação de senha deve ser igual a senha"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordFormData>({ resolver: yupResolver(schema) });

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (data: PasswordFormData) => {
    submit(data);
    goNext();
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const toggleConfirmPasswordVisibility = () =>
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

  return (
    <S.Container>
      <S.MainSection>
        <S.FormTitle>
          Estamos quase lá! Agora é só cadastrar uma senha para acesso ao
          sistema.
        </S.FormTitle>
        <S.Form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label className="label" htmlFor="password">
              Senha
            </label>
            <div className="control has-icons-left has-icons-right">
              <input
                id="password"
                aria-invalid={errors.password ? "true" : "false"}
                className="input is-rounded"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Senha"
                defaultValue={initialData.password}
                {...register("password")}
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
                  {errors.password?.message}
                </S.FormErrorText>
              )}
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="confirmPassword">
              Confirmar senha
            </label>
            <div className="control has-icons-left has-icons-right">
              <input
                id="confirmPassword"
                aria-invalid={errors.confirmPassword ? "true" : "false"}
                className="input is-rounded"
                type={isConfirmPasswordVisible ? "text" : "password"}
                placeholder="Confirmar senha"
                defaultValue={initialData.confirmPassword}
                {...register("confirmPassword")}
              />
              <span className="icon is-small is-left">
                <FiLock size="1rem" style={{ cursor: "pointer" }} />
              </span>

              <S.PasswordEyeIcon
                className="icon is-small is-right"
                isPasswordVisible={isConfirmPasswordVisible}
                onClick={toggleConfirmPasswordVisibility}
              >
                {isConfirmPasswordVisible ? (
                  <FiEye size="1rem" style={{ cursor: "pointer" }} />
                ) : (
                  <FiEyeOff size="1rem" style={{ cursor: "pointer" }} />
                )}
              </S.PasswordEyeIcon>

              {errors.confirmPassword && (
                <S.FormErrorText role="alert">
                  {errors.confirmPassword?.message}
                </S.FormErrorText>
              )}
            </div>
          </div>

          <S.ActionButtons>
            <Button handleClick={goBack} size="SM" primary>
              Voltar
            </Button>

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
              size="MD"
              secondary
            >
              Finalizar cadastro
            </Button>
          </S.ActionButtons>
        </S.Form>
      </S.MainSection>
    </S.Container>
  );
}
