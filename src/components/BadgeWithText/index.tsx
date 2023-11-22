import { Icon } from "@phosphor-icons/react";
import { BadgeContainer, TextContent } from "./styles";
import { ReactNode } from "react";

interface BadgeWithTextProps {
  badge: Icon;
  badgeColor: string;
  children: ReactNode;
}

export function BadgeWithText({
  badge: Badge,
  badgeColor,
  children,
}: BadgeWithTextProps) {
  return (
    <BadgeContainer $badgeColor={badgeColor}>
      <span>
        <Badge size={16} weight="fill" />
      </span>
      <TextContent>{children}</TextContent>
    </BadgeContainer>
  );
}
