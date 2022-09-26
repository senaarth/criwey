import React from "react";
import { ThemeProvider } from "styled-components";

import { Section } from "./components/Section";
import { Button } from "./components/Button";
import { Product } from "./components/Product";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";

import { handleScroll } from "./utils/handleScroll";

import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import { Contact, Hero, Partners, Products, What, Who } from "./styles/Home";

// Hero
import imgHero from "./assets/images/hero.svg";
// Who
import imgCode from "./assets/images/icon_code.svg";
import imgDesign from "./assets/images/icon_design.svg";
import imgConsultoria from "./assets/images/icon_consultoria.svg";
import imgOtimizacao from "./assets/images/icon_otimizacao.svg";
// Partners
import imgAttinge from "./assets/images/attinge.svg";
import imgGois from "./assets/images/gois.svg";
import imgBridgestone from "./assets/images/fanbridgestone.svg";
import imgHortifruti from "./assets/images/hortifruti.svg";
// Products
import imgRice from "./assets/images/rice.svg";
import imgRiceBg from "./assets/images/rice_bg.svg";
import imgContragolpe from "./assets/images/contragolpe.svg";
import imgContragolpeBg from "./assets/images/contragolpe_bg.svg";
// What
import imgRocket from "./assets/images/icon_rocket.svg";
import imgDollar from "./assets/images/icon_dollar.svg";
import imgFlash from "./assets/images/icon_flash.svg";
import imgAccessibility from "./assets/images/icon_accessibility.svg";
import imgUx from "./assets/images/icon_ux.svg";
import imgLanguage from "./assets/images/icon_language.svg";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Section id="home">
        <Hero>
          <div>
            <h1>
              <span className="desk">Criamos</span>
              <span className="mobile"> produtos digitais</span>
              <span className="desk"> de um jeito único.</span>
            </h1>
            <p>
              Aplicamos nossa experiência em design, desenvolvimento, SEO e
              novas tecnologias para as necessidades do seu negócio.
              <br />
              Como todo negócio é diferente, nosso trabalho também é.
            </p>
            <Button onClick={() => handleScroll("#form")} text="Comece um projeto" />
          </div>
          <img src={imgHero} alt="" />
        </Hero>
      </Section>
      <Section id="who">
        <div>
          <h2>Quem somos?</h2>
          <p>
            Somos um estúdio de design e tecnologia
            <br />
            Nós criamos produtos digitais que conectam pessoas, clientes e
            usuários
          </p>
          <Who>
            <div>
              <img src={imgCode} alt="Ícone Code" />
              <p>Desenvolvimento</p>
            </div>
            <div>
              <img src={imgDesign} alt="Ícone Design" />
              <p>Design</p>
            </div>
            <div>
              <img src={imgConsultoria} alt="Ícone Consultoria" />
              <p>Consoltoria</p>
            </div>
            <div>
              <img src={imgOtimizacao} alt="Ícone Otimizacao" />
              <p>Otimização</p>
            </div>
          </Who>
        </div>
      </Section>
      <Section variant="gray" id="partners">
        <div>
          <h2 className="center">NOSSOS PRINCIPAIS PARCEIROS</h2>
          <Partners>
            <img src={imgAttinge} alt="Logo Attinge" />
            <img src={imgGois} alt="Logo Gois" />
            <img src={imgBridgestone} alt="Logo Bridgestone" />
            <img src={imgHortifruti} alt="Logo Hortifruti" />
          </Partners>
        </div>
      </Section>
      <Section id="products">
        <div>
          <h2 className="center">DESENVOLVEMOS produtos EXCLUSIVOS</h2>
          <Products>
            <Product
              logo={imgRice}
              description="A Calculadora RICE permite que você e seu time façam o processo de priorização de maneira muito mais ágil"
              buttonCall="Conheça a calculadora Rice"
              link="https://calculadorarice.com.br"
              backgroundImage={imgRiceBg}
            />
            <Product
              logo={imgContragolpe}
              description="Contragolpe é uma iniciativa que tem como intenção informar e prevenir dos mais variados golpes virtuais"
              buttonCall="Conheça o Contragolpe"
              link="https://contragolpe.com.br"
              backgroundImage={imgContragolpeBg}
              comingSoon
            />
          </Products>
        </div>
      </Section>
      <Section id="what">
        <div>
          <h2 style={{ textAlign: "center" }}>
            Criamos, refazemos, resgatamos e escalamos
          </h2>
          <What>
            <div>
              <img src={imgRocket} alt="Ícone Foguete" />
              <p>Sede de inovação</p>
            </div>
            <div>
              <img src={imgDollar} alt="Ícone Dollar" />
              <p>Valores simples</p>
            </div>
            <div>
              <img src={imgFlash} alt="Ícone Flash" />
              <p>Rapidez e efetividade</p>
            </div>
            <div>
              <img src={imgAccessibility} alt="Ícone Acessibilidade" />
              <p>Design acessível</p>
            </div>
            <div>
              <img src={imgUx} alt="Ícone Ux" />
              <p>Experiência do Usuário</p>
            </div>
            <div>
              <img src={imgLanguage} alt="Ícone Web" />
              <p>Modelos flexíveis de trabalho</p>
            </div>
          </What>
        </div>
      </Section>
      <Section id="form">
        <Contact>
          <h2 style={{ textAlign: "center" }}>PRONTO PRA COMEÇAR?</h2>
          <h3 style={{ textAlign: "center" }}>
            Estamos ansiosos para conhecer você e o seu projeto. Fique tranquilo
            que, por questões de ética, não iremos compartilhar suas ideias com
            ninguém.
          </h3>
          <Form />
          <a href="mailto:contato@criaway.com.br">contato@criaway.com.br</a>
        </Contact>
      </Section>
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
