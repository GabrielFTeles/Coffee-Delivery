import styled from "styled-components";

export const SelectedProductContainer = styled.li`
  display: flex;
  justify-content: space-between;

  padding: 0.8rem 0.4rem;

  > span {
    color: ${({ theme }) => theme["brown-300"]};
    text-align: right;
    font-weight: 700;
    line-height: 130%;
  }
`;

export const CoffeeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  > img {
    height: 6.4rem;
  }

  & h3 {
    color: ${({ theme }) => theme["brown-500"]};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 130%;

    margin-bottom: 0.8rem;
  }
`;

export const ProductControls = styled.div`
  display: flex;
  gap: 0.8rem;

  height: 3.2rem;

  > button {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    border-radius: 6px;

    padding-inline: 0.8rem;

    height: 100%;

    color: ${({ theme }) => theme["brown-300"]};
    font-size: 1.2rem;
    line-height: 160%;
    text-transform: uppercase;

    background: ${({ theme }) => theme["gray-400"]};

    border: 0;

    transition: 0.1s;

    & svg {
      color: ${({ theme }) => theme["purple-300"]};
    }

    &:hover {
      background: ${({ theme }) => theme["brown-100"]};
    }
  }
`;
