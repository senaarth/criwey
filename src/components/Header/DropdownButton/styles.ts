import styled from "styled-components";

export const Button = styled.button`
  padding: 1rem;
  font-size: 1rem;
  background-color: transparent;
  outline: none;
  border: 0;
  cursor: pointer;
  transition: all 0.4s;

  display: flex;
  gap: 0.5rem;

  &:hover {
    filter: brightness(0.8);
  }
`;
