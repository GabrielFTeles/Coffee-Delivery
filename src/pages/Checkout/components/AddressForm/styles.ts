import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 20rem 27.6rem 6rem;
  grid-template-areas:
    "A . ."
    "B B B"
    "C D D"
    "E F G";

  gap: 1.6rem 1.2rem;

  & input {
    padding: 1.2rem;

    width: 100%;

    outline: none;

    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme["gray-400"]};
    background: ${({ theme }) => theme["gray-300"]};

    color: ${({ theme }) => theme["brown-300"]};
    font-size: 1.4rem;
    line-height: 130%;

    border: 1px solid ${({ theme }) => theme["gray-400"]};

    transition: 0.1s;

    &:focus {
      border: 1px solid ${({ theme }) => theme["yellow-500"]};
    }

    &::placeholder {
      color: ${({ theme }) => theme["brown-200"]};
      line-height: 130%;
    }
  }

  & div:nth-child(1) {
    grid-area: A;
  }

  & div:nth-child(2) {
    grid-area: B;
  }

  & div:nth-child(3) {
    grid-area: C;
  }

  & div:nth-child(4) {
    grid-area: D;
  }

  & div:nth-child(5) {
    grid-area: E;
  }

  & div:nth-child(6) {
    grid-area: F;
  }

  & div:nth-child(7) {
    grid-area: G;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  position: relative;

  > p {
    color: ${({ theme }) => theme.danger};
    font-size: 1.2rem;
  }

  &:not(:has(input[data-optional="true"]:placeholder-shown))::after {
    opacity: 0;
  }

  &:has(input[data-optional="true"])::after {
    content: "Opcional";
    position: absolute;
    right: 1.2rem;
    top: 50%;
    transform: translateY(-50%);

    pointer-events: none;

    color: ${({ theme }) => theme["brown-200"]};
    font-size: 1.2rem;
    font-style: italic;
    line-height: 130%;
  }
`;
