import styled from "styled-components";

export const MethodsOfPaymentButtons = styled.div`
  display: flex;
  gap: 1.2rem;

  & button {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    width: 100%;

    padding: 1.6rem;

    background: ${({ theme }) => theme["gray-400"]};

    border-radius: 6px;
    border: 1px solid transparent;

    font-size: 1.2rem;
    color: ${({ theme }) => theme["brown-300"]};
    text-transform: uppercase;

    transition: 0.1s;

    > svg {
      color: ${({ theme }) => theme["purple-300"]};
    }

    &:not(.active):hover {
      background: ${({ theme }) => theme["brown-100"]};
    }

    &.active {
      border: 1px solid ${({ theme }) => theme["purple-300"]};
      background: ${({ theme }) => theme["purple-100"]};
    }
  }
`;
