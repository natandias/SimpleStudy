import { useRef } from "react";
import { useForm } from "react-hook-form";

import Button from "../../../Button";
import * as S from "./styles";
import { PasswordFormData, UserFormData } from "../types"

type Props = {
  goNext: () => void;
  submit: (data: UserFormData | PasswordFormData) => void;
};

export default function RegisterUserData({ goNext, submit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>();

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (data: UserFormData) => {
    submit(data);
    goNext();
  };

  return (
    <S.Container>
      <S.MainSection>
        <S.FormTitle>
          Só é preciso algumas informações básicas para se cadastrar. É rápido e
          fácil!
        </S.FormTitle>
        <S.Form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label className="label" htmlFor="name">
              Nome
            </label>
            <div className="control">
              <input
                id="name"
                aria-invalid={errors.name ? "true" : "false"}
                className="input is-rounded"
                type="text"
                placeholder="Nome"
                {...register("name", { required: "Nome é obrigatório!" })}
              />
              {errors.name && (
                <S.FormErrorText role="alert">
                  {errors?.name?.message}
                </S.FormErrorText>
              )}
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="email">
              Email
            </label>
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
                <S.FormErrorText role="alert">
                  {errors?.email?.message}
                </S.FormErrorText>
              )}
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="schooling">
              Nível de ensino atual
            </label>
            <div className="select is-rounded">
              <select
                id="schooling"
                aria-invalid={errors.schooling ? "true" : "false"}
                {...register("schooling", {
                  required: "Nível de ensino é obrigatório!",
                  pattern: {
                    value: /^(?!.*notSelected).*/,
                    message: "Selecione o nível de ensino",
                  },
                })}
              >
                <option value="notSelected">Selecione...</option>
                <option value="Fundamental">Fundamental</option>
                <option value="Médio">Médio</option>
                <option value="Superior">Superior</option>
              </select>
            </div>
            {errors.schooling && (
              <S.FormErrorText role="alert">
                {errors?.schooling?.message}
              </S.FormErrorText>
            )}
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
            Próximo
          </Button>
        </S.Form>
      </S.MainSection>
    </S.Container>
  );
}
