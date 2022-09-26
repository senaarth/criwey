import React from "react";

import { handleScroll } from "../../utils/handleScroll";

import {
  Container,
  Contato,
  Content,
  Info,
  Nav,
  SocialMedia,
  Text,
} from "./styles";

import imgLogo from "../../assets/images/logo.svg";
import imgTiktok from "../../assets/images/icon_tiktok.svg";
import imgInstagram from "../../assets/images/icon_instagram.svg";
import imgLinkedin from "../../assets/images/icon_linkedin.svg";
// import imgMedium from "../../assets/images/icon_medium.svg";

export function Footer() {
  return (
    <Container>
      <Content>
        <Nav>
          <img
            src={imgLogo}
            alt="Logo Criaway"
            onClick={() => handleScroll("#home")}
          />
          <nav>
            <button type="button" onClick={() => handleScroll("#home")}>
              Home
            </button>
            <button type="button" onClick={() => handleScroll("#who")}>
              Quem somos
            </button>
            <button type="button" onClick={() => handleScroll("#partners")}>
              Clientes
            </button>
            <button type="button" onClick={() => handleScroll("#products")}>
              Produtos criaway
            </button>
            {/* <a href="/politica-de-privacidade">Política de Privacidade</a> */}
          </nav>
        </Nav>
        <Info>
          <Contato>
            <p>contato@criaway.com</p>
            <SocialMedia>
              <a
                href="https://www.tiktok.com/@somoscriaway?refer=creator_embed%22%3E@somoscriaway%3C/a%3E"
                target="_blank"
                rel="noreferrer"
              >
                <img src={imgTiktok} alt="ícone tiktok" />
              </a>
              <a
                href="https://instagram.com/somoscriaway"
                target="_blank"
                rel="noreferrer"
              >
                <img src={imgInstagram} alt="ícone insta" />
              </a>
              <a
                href="https://linkedin.com/company/criaway"
                target="_blank"
                rel="noreferrer"
              >
                <img src={imgLinkedin} alt="ícone linkedin" />
              </a>
              {/* <a href="/" target="_blank" rel="noreferrer">
                <img src={imgMedium} alt="ícone medium" />
              </a> */}
            </SocialMedia>
          </Contato>
          <Text>
            <p>Support Black Business</p>
            <p>© Copyright 2022. Criaway. Todos os direitos reservados.</p>
          </Text>
        </Info>
      </Content>
    </Container>
  );
}
