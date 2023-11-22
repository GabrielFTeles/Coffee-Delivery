import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  text-align: center;

  background: ${({ theme }) => theme["gray-200"]};

  border-radius: 6px 36px;

  padding: 0 2.4rem 2rem;

  max-width: 25.6rem;
  min-height: 31rem;

  > img {
    margin-block: -2rem 1.6rem;
  }

  > h3 {
    font-family: "Baloo 2", sans-serif;
    color: ${({ theme }) => theme["brown-500"]};
    font-size: 2rem;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 0.8rem;
  }

  > p {
    color: ${({ theme }) => theme["brown-200"]};
    font-size: 1.4rem;
    line-height: 130%;
    margin-bottom: 3.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export const TagsList = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;

  margin-bottom: 1.6rem;

  > span {
    font-size: 1rem;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;

    background: ${({ theme }) => theme["yellow-100"]};
    color: ${({ theme }) => theme["yellow-500"]};

    padding: 0.4rem 0.8rem;
    border-radius: 100px;
  }
`;

export const Price = styled.span`
  color: ${({ theme }) => theme["brown-300"]};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 130%;

  > span {
    font-family: "Baloo 2", sans-serif;
    font-size: 2.4rem;
    font-weight: 800;
  }
`;

export const CardControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  > div {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    > button {
      display: grid;
      place-content: center;

      color: ${({ theme }) => theme["gray-100"]};
      background: ${({ theme }) => theme["purple-500"]};

      border: 0;
      border-radius: 6px;
      padding: 0.8rem;

      transition: 0.15s background-color;

      &:hover {
        background: ${({ theme }) => theme["purple-300"]};
      }
    }
  }
`;
