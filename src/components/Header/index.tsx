import React from "react";

import { Button } from "../Button";
import { DropdownButton } from "./DropdownButton";

import { handleScroll } from "../../utils/handleScroll";
import { projectsList } from "../../utils/projectsList";

import {
  ButtonsContainer,
  Container,
  Content,
  Nav,
  ProjectsContainer,
} from "./styles";

import imgLogo from "../../assets/images/logo.svg";
import { ProjectItem } from "./ProjectItem";

export function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <Container>
      <Content>
        <img
          src={imgLogo}
          alt="Logo Rice"
          onClick={() => handleScroll("#home")}
        />
        <ButtonsContainer>
          <button
            type="button"
            onClick={() => {
              handleScroll("#home");
            }}
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => {
              handleScroll("#who");
            }}
          >
            Quem somos
          </button>
          <button
            type="button"
            onClick={() => {
              handleScroll("#partners");
            }}
          >
            Clientes
          </button>
          <DropdownButton label="Produtos Criway" menuItems={projectsList} />
        </ButtonsContainer>
        <Button
          text="Comece um projeto"
          variant="outlined"
          onClick={() => {
            handleScroll("#form");
          }}
        />
        <button
          id="hamburger"
          type="button"
          onClick={() => setOpen(!open)}
          className={open ? "active" : ""}
        >
          <span className="bar1" />
          <span className="bar2" />
          <span className="bar3" />
        </button>
      </Content>
      <Nav className={open ? "visible" : ""}>
        <div>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              handleScroll("#home");
            }}
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              handleScroll("#who");
            }}
          >
            Quem somos
          </button>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              handleScroll("#partners");
            }}
          >
            Clientes
          </button>
        </div>
        <ProjectsContainer>
          <p>Produtos Criaway</p>
          {projectsList?.map((item) => (
            <ProjectItem
              key={item.link}
              {...item}
              onClick={() => {
                window.open(item.link);
                setOpen(false);
              }}
            />
          ))}
        </ProjectsContainer>
      </Nav>
    </Container>
  );
}
