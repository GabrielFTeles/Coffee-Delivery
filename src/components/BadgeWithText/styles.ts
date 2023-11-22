import styled from "styled-components";

interface BadgeContainerProps {
  $badgeColor: string;
}

export const BadgeContainer = styled.div<BadgeContainerProps>`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  width: fit-content;

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ $badgeColor, theme }) => theme[$badgeColor]};

    padding: 0.8rem;
    border-radius: 50%;

    & svg {
      color: ${({ theme }) => theme["gray-100"]};
    }
  }

  & p {
    color: ${({ theme }) => theme["brown-300"]};
    line-height: 130%;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;
