import React from "react";

import { Button } from "../Button";

import { Container } from "./styles";

interface ProductProps {
  logo: string;
  description: string;
  buttonCall: string;
  link: string;
  backgroundImage: string;
  comingSoon?: boolean;
}

export function Product({
  logo,
  description,
  buttonCall,
  link,
  backgroundImage,
  comingSoon = false,
}: ProductProps) {
  return (
    <Container className={comingSoon ? "disabled" : ""} style={{ background: `no-repeat url(${backgroundImage})` }}>
      <img src={logo} alt="Logo do projeto" />
      <p>{description}</p>
      <Button
        text={comingSoon ? "Em breve..." : buttonCall}
        variant="secondary"
        onClick={() => window.open(link)}
        disabled={comingSoon}
      />
    </Container>
  );
}
