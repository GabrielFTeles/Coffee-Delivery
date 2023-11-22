import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

export const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-block: 9rem;

  > img {
    width: min(47.5rem, 100%);
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 5rem;

    padding-bottom: 5rem;
  }
`;

export const HeroContent = styled.div`
  width: min(58.8rem, 100%);

  > h1 {
    font-family: "Baloo 2", sans-serif;
    color: ${({ theme }) => theme["brown-700"]};
    font-size: 4.8rem;
    font-weight: 800;
    line-height: 130%;
  }

  > p {
    margin-top: 1.6rem;
    color: ${({ theme }) => theme["brown-500"]};
    font-size: 2rem;
    line-height: 130%;
  }

  @media (max-width: 600px) {
    text-align: center;

    > h1 {
      font-size: 3.6rem;
    }

    > p {
      font-size: 1.8rem;
    }
  }
`;

export const DeliveryFeatures = styled.div`
  margin-top: 6.6rem;

  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 2rem;

    margin-inline: auto;

    width: fit-content;
  }
`;

export const ProductsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5.4rem;

  > h2 {
    color: ${({ theme }) => theme["brown-500"]};
    font-family: "Baloo 2", sans-serif;
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 130%;
  }
`;

export const ProductsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 4rem 3.2rem;
`;
