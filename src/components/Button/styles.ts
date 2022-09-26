import styled from "styled-components";

export const Container = styled.button`
  border-radius: 0;
  outline: none;
  border: 0;

  text-align: center;
  font-size: 1rem;

  padding: 0.5rem;

  cursor: pointer;

  @media (min-width: 1049px) {
    padding: 1rem;
  }

  transition: all 0.3s;

  &.primary {
    background-color: ${({ theme }) => theme.pink500};

    &:hover:not(&:disabled) {
      background-color: ${({ theme }) => theme.pink600};
    }

    &:active:not(&:disabled) {
      background-color: ${({ theme }) => theme.pink700};
    }
  }

  &.secondary {
    background-color: ${({ theme }) => theme.white500};
    color: ${({ theme }) => theme.black500};

    &:hover:not(&:disabled) {
      background-color: ${({ theme }) => theme.white300};
    }

    &:active:not(&:disabled) {
      background-color: ${({ theme }) => theme.white300};
    }
  }

  &.outlined {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.black300};
    padding: 1rem 1.5rem;

    &:hover:not(&:disabled) {
      font-weight: 500;
      border-color: ${({ theme }) => theme.white300};
    }
  }

  &:focus:not(&:disabled) {
    border: 1px solid ${({ theme }) => theme.blue800};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.white100};
    color: ${({ theme }) => theme.black100};
    cursor: not-allowed;
  }
`;
