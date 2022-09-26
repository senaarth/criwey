import styled from "styled-components";

export const SectionContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2.5rem 0;

  &.gray {
    background-color: ${({ theme }) => theme.gray500};
  }

  @media (min-width: 1049px) {
    padding: 5rem 0;
  }
`;

export const ContentContainer = styled.div`
  width: 90%;
  max-width: 1200px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    p {
      font-size: 0.875rem;
    }

    @media (min-width: 1049px) {
      p {
        font-size: 1.25rem;
      }
    }
  }
`;
