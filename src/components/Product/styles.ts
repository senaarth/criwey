import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 0.625rem;

    padding: 1.25rem;

    background-size: cover !important;

    > img {
        height: 1.5rem;
    }

    p {
        font-size: 0.875rem;
        text-align: center;
        width: 80%;
        max-width: 400px;
    }

    button {
        width: 100%;
    }

    @media (min-width: 1049px) {
        gap: 2.625rem;

        padding: 2.5rem;

        img {
            height: 2.25rem;
        }
    }

    &.disabled {
        filter: grayscale(1);

        p {
            cursor: default;
        }

        *:not(button) {
            opacity: 0.4;
        }
    }
`;
