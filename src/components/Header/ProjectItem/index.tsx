import React from "react";

import { Container } from "./styles";

import imgArrowRight from "../../../assets/images/icon_arrow_right.svg";

interface ProjectItemProps {
  mainColor: string;
  logo: string;
  description: string;
  onClick: () => void;
  comingSoon?: boolean;
}

export function ProjectItem({
  mainColor,
  logo,
  description,
  onClick,
  comingSoon = false,
}: ProjectItemProps) {
  return (
    <Container
      className={`project ${comingSoon ? "disabled" : ""}`}
      onClick={() => onClick()}
      disabled={comingSoon}
    >
      <span style={{ backgroundColor: comingSoon ? "#B3B3B3" : mainColor }} />
      <div>
        <img src={logo} alt="" />
        <p>{comingSoon ? "Disponível em breve..." : description}</p>
      </div>
      <img src={imgArrowRight} alt="Ícone seta para direita" />
    </Container>
  );
}
