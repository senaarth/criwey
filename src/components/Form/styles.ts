import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  margin: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > * {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
  }

  > .wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @media (min-width: 1049px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  input,
  textarea {
    color: black;
  }
`;

export const Message = styled.p`
  font-size: 1rem;
  text-align: center;
  opacity: 0;

  transition: opacity 0.3s;

  &.active {
    opacity: 1;
  }
`;
