import styled from "styled-components";

export const Hero = styled.div`
  flex-direction: row !important;
  align-items: center !important;
  justify-content: space-between !important;
  margin-top: 2.75rem;

  p {
    margin: 0.5rem 0 1.5rem;
  }

  button {
    width: 100%;
  }

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  > img {
    display: none;
  }

  @media (min-width: 1049px) {
    margin-top: 7.5rem;

    p {
      margin: 1rem 0;
    }

    button {
      margin: 1.5rem 0;
      max-width: 226px;
    }

    > img {
      display: flex;
      width: 25%;
    }

    > div {
      width: calc(75% - 2.5rem);
    }
  }
`;

export const Who = styled.div`
  margin-top: 1.5rem;

  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    padding: 0.5rem;

    img {
      width: 1.5rem;
      object-fit: contain;
      aspect-ratio: 1;
    }

    p {
      font-size: 0.875rem;
    }
  }

  @media (min-width: 1049px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;

    > div {
      padding: 1rem;

      img {
        width: 2.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;

export const Partners = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;

  padding: 1rem 0;

  margin-top: 1.5rem;

  img {
    justify-self: center;
    max-width: 45%;
  }

  @media (min-width: 1049px) {
    grid-template-columns: repeat(4, 1fr);

    margin-top: 2.5rem;

    img {
      justify-self: left;
      max-width: unset;
    }
  }
`;

export const Products = styled.div`
  width: 100%;
  margin-top: 1.5rem;

  display: grid;
  grid-template-columns: 1fr;
  gap: 1.625rem;

  @media (min-width: 1049px) {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
`;

export const What = styled.div`
  width: 100%;
  margin-top: 2rem;

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  row-gap: 0.5rem;
  column-gap: 1.125rem;

  > div {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    padding: 0.5rem;

    img {
      width: 1.5rem;
      object-fit: contain;
      aspect-ratio: 1;
    }

    p {
      font-size: 0.875rem;
      text-align: center;
    }
  }

  @media (min-width: 1049px) {
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 1.25rem;
    column-gap: 0;

    > div {
      padding: 1rem;

      img {
        width: 2.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;

export const Contact = styled.div`
  align-items: center !important;
  gap: 0.5rem;

  h3 {
    max-width: 1024px;
  }

  > a {
    font-size: 0.875rem;
    text-decoration: none;
  }
`;
