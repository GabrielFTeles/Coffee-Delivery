import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  padding-block: 3.2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
`;

const ButtonDefaultBase = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;

  font-size: 1.4rem;
  line-height: 130%;

  border: 0;
  border-radius: 6px;

  padding: 0.8rem;

  transition: 0.2s;
`;

export const LocationButton = styled(ButtonDefaultBase)`
  background: ${({ theme }) => theme["purple-100"]};
  color: ${({ theme }) => theme["purple-500"]};

  > svg {
    color: ${({ theme }) => theme["purple-300"]};
  }
`;

export const CartButton = styled(ButtonDefaultBase)`
  background: ${({ theme }) => theme["yellow-100"]};
  position: relative;

  > svg {
    color: ${({ theme }) => theme["yellow-500"]};
  }

  > span {
    position: absolute;
    top: -0.8rem;
    right: -0.8rem;

    display: grid;
    place-content: center;

    width: 2.2rem;
    height: 2.2rem;

    color: ${({ theme }) => theme.white};
    font-size: 1.2rem;
    font-weight: 700;

    background: ${({ theme }) => theme["yellow-500"]};
    border-radius: 50%;
  }
`;
