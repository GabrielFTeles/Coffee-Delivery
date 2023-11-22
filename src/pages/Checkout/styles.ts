import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & h2 {
    color: ${({ theme }) => theme["brown-500"]};
    font-family: "Baloo 2", sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 130%;
  }

  @media (max-width: 1150px) {
    align-items: center;
    flex-direction: column;
    gap: 1.2rem;
  }
`;

const BaseColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const FirstColumn = styled(BaseColumnContainer)`
  width: min(64rem, 100%);
`;

export const SecondColumn = styled(BaseColumnContainer)`
  width: min(44.8rem, 100%);

  @media (max-width: 1150px) {
    width: min(64rem, 100%);
  }
`;

export const PaymentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  background: ${({ theme }) => theme["gray-200"]};

  border-radius: 6px;

  padding: 4rem;
`;

interface CardDescriptionProps {
  $iconColor: string;
}

export const CardDescription = styled.div<CardDescriptionProps>`
  display: flex;
  gap: 0.8rem;

  > svg {
    color: ${({ theme, $iconColor }) => theme[$iconColor]};
  }

  & h3 {
    color: ${({ theme }) => theme["brown-500"]};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 130%;
  }

  & p {
    color: ${({ theme }) => theme["brown-300"]};
    font-size: 1.4rem;
    line-height: 130%;
  }
`;

export const FinishOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  background: ${({ theme }) => theme["gray-200"]};

  padding: 4rem;

  border-radius: 6px 44px;

  > button {
    border: 0;
    border-radius: 6px;

    padding: 1.2rem 0.8rem;

    background: ${({ theme }) => theme["yellow-300"]};

    font-size: 1.4rem;
    color: ${({ theme }) => theme.white};
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;

    transition: 0.1s;

    &:not(:disabled):hover {
      background: ${({ theme }) => theme["yellow-500"]};
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

export const ProductsSelectedList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  padding-right: 0.6rem;

  max-height: 33.8rem;
  overflow-y: auto;

  > li {
    border-bottom: 1px solid ${({ theme }) => theme["gray-400"]};
    padding-bottom: 2.4rem;
  }

  & li:last-child {
    border-bottom: 0;
  }
`;

export const TotalPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > span {
      color: ${({ theme }) => theme["brown-300"]};
      text-align: right;
      line-height: 130%;
    }

    & span:first-child {
      font-size: 1.4rem;
    }
  }

  > div:last-child {
    > span {
      color: ${({ theme }) => theme["brown-500"]};
      text-align: right;
      font-size: 2rem;
      font-weight: 700;
    }
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  padding-bottom: 1rem;

  > img {
    height: 20rem;
    filter: grayscale(1);
    opacity: 0.5;
  }

  > p {
    text-align: center;
    color: ${({ theme }) => theme["brown-200"]};
  }
`;

export const Separator = styled.hr`
  border: 0;
  border: 1px solid ${({ theme }) => theme["gray-400"]};
`;
