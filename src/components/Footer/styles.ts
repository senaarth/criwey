import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.black500};
  padding: 2rem 0;
  margin-top: auto;

  @media (min-width: 1049px) {
    padding: 6rem 0 5rem;
  }
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  a,
  p,
  button {
    color: ${({ theme }) => theme.white500};
    line-height: 150%;
    text-decoration: none;
  }

  a,
  button {
    font-size: 1rem;
  }

  p {
    font-size: 0.875rem;
  }

  button {
    border: 0;
    background-color: transparent;
    outline: none;
    transition: all 0.4s;
    cursor: pointer;

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (min-width: 1049px) {
    gap: 4.5rem;

    p {
      font-size: 1rem;
    }
  }
`;

export const Nav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 24px;

  img {
    width: 75%;
    max-width: 11.875rem;
    cursor: pointer;

    &:hover {
      filter: brightness(0.8);
    }
  }

  nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 24px;
  }

  @media (min-width: 1049px) {
    justify-content: space-between;

    nav {
      justify-content: flex-end;
    }
  }
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (min-width: 1049px) {
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const Contato = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2.5rem 0;

  p {
    text-align: center;
  }

  @media (min-width: 1049px) {
    max-width: 250px;
    align-items: flex-start;
    padding: 0;

    p {
      font-size: 1.25rem;
      text-align: left;
    }
  }
`;

export const SocialMedia = styled.div`
  width: 100%;
  max-width: 11.0625rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;

  a {
    width: 100%;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 40%;
    }
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  p {
    text-align: center;
  }

  @media (min-width: 1049px) {
    align-items: flex-end;
    gap: 16px;

    p {
      text-align: right;
    }
  }
`;
