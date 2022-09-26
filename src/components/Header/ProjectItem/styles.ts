import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  max-width: 450px;
  min-height: 98px;
  position: relative;
  padding: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  outline: none;
  border: 0;
  background: ${({ theme }) => theme.white500};

  cursor: pointer;

  &:hover:not(&:disabled) {
    filter: brightness(0.8);
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
    gap: 0.5rem;

    p {
      color: ${({ theme }) => theme.black500};
      text-align: left;
      margin: 0;
      font-size: 0.75rem;

      @media (min-width: 1049px) {
        font-size: 0.875rem;
      }
    }
  }

  > img {
    width: 1.5rem;
    height: 1.5rem;
  }

  span {
    position: absolute;
    left: 0;
    top: 0;
    width: 6px;
    height: 100%;
  }

  &:disabled {
    cursor: not-allowed;

    p {
      color: ${({ theme }) => theme.white100};
      cursor: default;
    }

    img {
      opacity: 0.4;
      filter: grayscale(1);
    }
  }

  @media (min-width: 1049px) {
    max-width: 300px;
  }
`;
