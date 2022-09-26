import React from "react";

import { Container } from "./styles";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
  text: string;
  variant?: "primary" | "secondary" | "outlined";
  disabled?: boolean;
}

export function Button({
  text,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
}: ButtonProps) {
  return (
    <Container
      className={`${variant}`}
      type={type}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {text}
    </Container>
  );
}
