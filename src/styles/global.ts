import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "DM Sans", sans-serif;
    color: ${({ theme }) => theme?.white500};
    line-height: 150%;
  }

  html, body, #root {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme?.black500};
  }

  h1, h2, h3, h4, h5 {
    font-weight: 600;
    width: 100%;

    span {
      &.desk {
        @media (min-width: 899px) {
          color: ${({ theme }) => theme?.pink500};
        }
      }

      &.mobile {
        @media (max-width: 1049px) {
          color: ${({ theme }) => theme?.pink500};
        }
      }
    }

    &.center {
      text-align: center;

      @media (min-width: 1049px) {
        text-align: left;
      }
    }
  }

  h1 {
    font-size: 2rem;
    line-height: 125%;
    text-transform: uppercase;

    @media (min-width: 1049px) {
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 1.25rem;
    text-transform: uppercase;

    @media (min-width: 1049px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 0.875rem;
    font-weight: 400;

    @media (min-width: 1049px) {
      font-size: 1.25rem;
    }
  }
`;
