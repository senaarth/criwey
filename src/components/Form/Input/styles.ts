import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;

  position: relative;

  input,
  textarea {
    width: 100%;
    min-width: 100%;

    padding: 0.5rem;
    border-radius: 0;
    border: 0;
    outline: none;

    font-size: 1rem;
    color: ${({ theme }) => theme.black500};

    background: ${({ theme }) => theme.white500};

    &::placeholder {
      color: ${({ theme }) => theme.white100};
    }

    &:required::placeholder {
      &::after {
        content: "*";
        color: ${({ theme }) => theme.pink500};
      }
    }

    @media (min-width: 1049px) {
      padding: 1rem;
    }
  }

  textarea {
    min-height: 150px;
    max-height: 200px;
  }

  img {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    display: none;
  }

  &.invalid {
    input,
    textarea {
      color: ${({ theme }) => theme.red500};

      &::placeholder {
        color: ${({ theme }) => theme.red500};
      }
    }
  }

  &.success,
  &.invalid {
    img {
      display: block;
    }
  }

  @media (min-width: 1049px) {
    img {
      right: 1rem;
      top: 1rem;
    }
  }
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.red500};
  font-size: 0.75rem !important;

  @media (min-width: 1049px) {
    font-size: 1rem !important;
  }
`;
