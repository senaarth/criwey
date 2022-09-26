import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "../Button";
import { Input } from "./Input";

import { sendMail } from "../../services/mail";

import { Container, Message } from "./styles";

type FormValues = {
  name: string;
  company: string;
  email: string;
  message: string;
};

const schema = yup
  .object({
    name: yup.string().required(),
    company: yup.string(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  })
  .required();

export function Form() {
  const [message, setMessage] = React.useState<string | null>(null);
  const {
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const onSubmit = () => {
    try {
      sendMail(watch());
      setMessage("Enviado com sucesso, ja já a gente se fala!");
      window.scrollBy(0, 50)
    } catch {
      setMessage("Parece que tivemos um erro, tenta novamente!");
      window.scrollBy(0, 50)
    }
  };

  React.useEffect(() => {
    if (!message) return;
    setTimeout(() => setMessage(null), 3000);
  }, [message]);

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <div className="wrapper">
        <Controller
          name="name"
          control={control}
          render={({ field }) => {
            return (
              <Input
                placeholder="Nome e Sobrenome *"
                value={field.value}
                onChange={field.onChange}
                error={!!errors.name?.message ? "Campo obrigatório" : null}
              />
            );
          }}
        />
        <Controller
          name="company"
          control={control}
          render={({ field }) => {
            return (
              <Input
                placeholder="Nome da sua empresa"
                value={field.value}
                onChange={field.onChange}
              />
            );
          }}
        />
      </div>
      <Controller
        name="email"
        control={control}
        render={({ field }) => {
          return (
            <Input
              placeholder="E-mail *"
              value={field.value}
              onChange={field.onChange}
              error={
                !!errors.email?.message ? "Favor inserir e-mail válido" : null
              }
            />
          );
        }}
      />
      <Controller
        name="message"
        control={control}
        render={({ field }) => {
          return (
            <Input
              placeholder="Fala pra gente um pouco sobre seu projeto ou idéia *"
              isTextArea
              value={field.value}
              onChange={field.onChange}
              error={!!errors.message?.message ? "Campo obrigatório" : null}
            />
          );
        }}
      />
      <Button type="submit" text="Enviar" onClick={() => {}} />
      <Message id="message" className={!!message ? "active" : ""}>{message}</Message>
    </Container>
  );
}
