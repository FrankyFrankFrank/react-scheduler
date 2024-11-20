import styled from "styled-components";
import { Theme } from "@/styles";
import { IconButtonVariant } from "./types";

type ButtonWrapperProps = {
  isFullRounded?: boolean;
  hasChildren?: boolean;
  disabled?: boolean;
  variant: IconButtonVariant;
};

const variantStyles = (theme: Theme, variant: IconButtonVariant, disabled?: boolean) =>
  ({
    outlined: {
      color: disabled ? theme.colors.disabled : "black",
      border: `4px solid ${disabled ? theme.colors.disabled : "black"}`,
      background: "transparent"
    },
    filled: {
      color: disabled ? theme.colors.primary : "white",
      background: disabled ? theme.colors.disabled : "black",
      border: "4px solid transparent"
    }
  }[variant]);

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  min-height: 24px;
  border-radius: ${({ isFullRounded }) => (isFullRounded ? "50%" : "0px")};
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  gap: 4px;
  padding: 3px 6px;
  transition: 0.5s ease;
  ${({ theme, variant, disabled }) => variantStyles(theme, variant, disabled)}
`;
