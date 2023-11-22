import styled from "styled-components";

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  background: ${({ theme }) => theme["gray-400"]};

  border-radius: 6px;
  padding: 0.8rem;

  height: 100%;
  width: fit-content;

  > span {
    color: ${({ theme }) => theme["brown-700"]};
    text-align: center;
    line-height: 130%;
  }

  > button {
    background: transparent;
    color: ${({ theme }) => theme["purple-300"]};
    line-height: 0;
    border: 0;
  }
`;
