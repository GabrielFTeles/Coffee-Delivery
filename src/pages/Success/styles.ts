import styled from "styled-components";

export const SuccessContainer = styled.div`
  padding-top: 8rem;
`;

export const SuccessConfirm = styled.div`
  > h1 {
    color: ${({ theme }) => theme["yellow-500"]};
    font-family: "Baloo 2", sans-serif;
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 130%;
  }

  > p {
    color: ${({ theme }) => theme["brown-500"]};
    font-size: 2rem;
    line-height: 130%;

    margin-bottom: 4rem;
  }

  @media (max-width: 940px) {
    text-align: center;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    width: min(49rem, 100%);
  }

  @media (max-width: 940px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export const OrderCard = styled.div`
  padding: 4rem;

  width: min(52.6rem, 100%);

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  position: relative;

  border-radius: 6px 36px;

  background: ${({ theme }) => theme.white};

  &::before {
    content: "";
    position: absolute;
    z-index: -10;

    top: -1px;
    left: -1px;

    width: calc(100% + 2px);
    height: calc(100% + 2px);

    background: ${({ theme }) =>
      `linear-gradient(135deg, ${theme["yellow-300"]}, ${theme["purple-300"]})`};

    border-radius: 6px 36px;
  }
`;
