import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: fixed;

  background: ${({ theme }) => theme.black500};
  z-index: 99;
`;

export const Content = styled.div`
  z-index: 99;

  background: ${({ theme }) => theme.black500};
  width: 90%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.25rem 0;

  > img {
    width: 35%;
    max-width: 7rem;
    cursor: pointer;

    &:hover {
      filter: brightness(0.8);
    }
  }

  > #hamburger {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    width: 1.75rem;
    height: 1.75rem;
    border: 0;
    outline: none;
    cursor: pointer;
    background-color: transparent;

    span {
      width: 50%;
      height: 2px;
      border-radius: 0.5px;

      background-color: ${({ theme }) => theme.white500};

      &.bar1 {
        transition: transform 0.3s;
      }

      &.bar2 {
        transition: opacity 0.3s;
      }

      &.bar3 {
        transition: transform 0.3s;
      }
    }

    &.active {
      span.bar1 {
        transform: rotate(-45deg) translate(0, 2px);
      }

      span.bar2 {
        opacity: 0;
      }

      span.bar3 {
        transform: rotate(45deg) translate(-5px, -7px);
      }
    }

    @media (min-width: 1049px) {
      display: none;
    }
  }

  > :not(img, #hamburger) {
    display: none;
  }

  @media (min-width: 1049px) {
    padding: 2rem 0;

    > img {
      max-width: 190px;
    }

    > :not(img, #hamburger) {
      display: flex;
    }
  }
`;

export const Nav = styled.nav`
  z-index: 98;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 4.25rem;

  background: ${({ theme }) => theme.black500};

  > div {
    width: 90%;
    display: flex;
    flex-direction: column;

    > button:not(.project) {
      margin-top: 0.5rem;
      background-color: transparent;
      border: 0;
      outline: none;

      padding: 0.5rem;

      font-size: 1rem;
    }
  }

  position: absolute;
  top: -100vh;
  left: 0;
  transition: top 0.5s;

  &.visible {
    top: 0;
  }

  @media (min-width: 1049px) {
    display: none;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin: 0 auto;

  > button:not(.project) {
    padding: 1rem;
    font-size: 1rem;
    background-color: transparent;
    outline: none;
    border: 0;
    cursor: pointer;
    transition: all 0.4s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const ProjectsContainer = styled.div`
  width: 90%;
  padding-bottom: 1rem;
  margin-top: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  p {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
`;
