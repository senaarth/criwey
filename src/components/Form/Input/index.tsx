import React from "react";

import { Container, Error } from "./styles";

import imgError from "../../../assets/images/icon_error.svg";
import imgSuccess from "../../../assets/images/icon_success.svg";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  isTextArea?: boolean;
  error?: string | null;
}

const TextField = ({ isTextArea, ...props }: InputProps) => {
  return isTextArea ? (
    <textarea
      value={props.value}
      onChange={({ target }) => props.onChange(target.value)}
      placeholder={props.placeholder}
    />
  ) : (
    <input
      value={props.value}
      onChange={({ target }) => props.onChange(target.value)}
      placeholder={props.placeholder}
    />
  );
};

export function Input({ error, ...props }: InputProps) {
  return (
    <Container
      className={`${!!error ? "invalid" : ""} ${
        !error && !!props.value && props.value !== "" ? "success" : ""
      }`}
    >
      <TextField {...props} />
      {!error && !!props.value && props.value !== "" && (
        <img src={imgSuccess} alt="" />
      )}
      {!!error && (
        <>
          <img src={imgError} alt="" />
          <Error>{error}</Error>
        </>
      )}
    </Container>
  );
}
