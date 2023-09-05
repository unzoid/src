import React, { useState, ReactNode } from 'react';
import styled, { css } from 'styled-components';

export interface ButtonStyleProps {
  isHovered: boolean;
  isFocussed: boolean;
  isPressed: boolean;
  isDisabled: boolean;
  variant: 'primary' | 'light' | 'subtle' | 'dark';
  size: 'default' | 'small';
  iconRight?: boolean;
}

export interface ButtonProps extends Partial<ButtonStyleProps> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onHoverChange?: (value: boolean) => void;
  onFocusChange?: (value: boolean) => void;
  onPressChange?: (value: boolean) => void;
  className?: string;
  icon?: ReactNode;
}

const ButtonWrapper = styled.button<ButtonStyleProps>`
  color: var(--button-color, ${({ theme }) => theme.primary.foreground});
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 100%),
    ${({ theme }) => theme.primary.background};
  display: block;
  border: none;
  position: relative;
  font-weight: 500;
  font-family: inherit;
  outline: none;
  user-select: none;
  text-align: center;
  appearance: none;
  white-space: nowrap;
  line-height: 24px;
  padding: 14px 26px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 32px;
  cursor: pointer;
  transition: color 0.15s, background-color 0.15s, box-shadow 0.15s;

  background-color: ${({ isHovered, theme }) => isHovered && theme.primary.blendToBackground(1050)};
  background-color: ${({ isPressed, theme }) => isPressed && theme.primary.blendToBackground(1125)};

  box-shadow: 0px 2px 4px rgba(12, 20, 66, 0.1), 0px 10px 40px rgba(12, 20, 66, 0.06),
    inset 0px -1px 2px rgba(12, 20, 66, 0.1);

  cursor: ${({ isDisabled }) => isDisabled && 'not-allowed'};
  opacity: ${({ isDisabled }) => isDisabled && 0.5};

  ${({ variant }) =>
    variant === 'light' &&
    css<ButtonStyleProps>`
      --button-color: ${({ theme }) => theme.foreground};
      background-color: ${({ theme }) => theme.secondary.blendToBackground(150)};
      box-shadow: 0px 2px 4px rgba(12, 20, 66, 0.02), inset 0px -1px 2px rgba(12, 20, 66, 0.03);

      background-color: ${({ isHovered, theme }) => isHovered && theme.secondary.blendToBackground(175)};
      background-color: ${({ isPressed, theme }) => isPressed && theme.secondary.blendToBackground(200)};
    `}

  ${({ variant }) =>
    variant === 'dark' &&
    css<ButtonStyleProps>`
      --button-color: ${({ theme }) => theme.background};
      background-color: ${({ theme }) => theme.foreground};
      box-shadow: 0px 2px 4px rgba(12, 20, 66, 0.1), 0px 10px 40px rgba(12, 20, 66, 0.06),
        inset 0px -1px 2px rgba(12, 20, 66, 0.08), inset 0 0 0 999px var(--button-overlay, transparent);

      --button-overlay: ${({ isHovered }) => isHovered && css`rgba(0, 0, 0, .5)`};
      --button-overlay: ${({ isPressed }) => isPressed && css`rgba(0, 0, 0, .75)`};
    `}

  ${({ variant }) =>
    variant === 'subtle' &&
    css<ButtonStyleProps>`
      --button-color: ${({ theme }) => theme.foreground};
      background-color: transparent;
      box-shadow: none;

      background-color: ${({ isHovered, theme }) => isHovered && theme.secondary.blendToBackground(100)};
      background-color: ${({ isPressed, theme }) => isPressed && theme.secondary.blendToBackground(150)};
    `}

  ${({ size }) =>
    size === 'small' &&
    css<ButtonStyleProps>`
      font-size: 14px;
      padding: 6px 20px;
    `}
`;

const ButtonInner = styled.div<ButtonStyleProps>`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  z-index: 1;

  svg {
    margin-left: -4px;

    ${({ iconRight }) =>
      iconRight &&
      css`
        margin-left: auto;
        margin-right: -4px;
      `}
  }

  ${({ size }) =>
    size === 'small' &&
    css<ButtonStyleProps>`
      gap: 8px;

      svg {
        --icon-size: 14px;
        margin-left: -2px;

        ${({ iconRight }) =>
          iconRight &&
          css`
            margin-left: auto;
            margin-right: -2px;
          `}
      }
    `}
`;

export const Button: React.FC<ButtonProps> = (props) => {
  const [isHoveredState, setIsHoveredState] = useState<boolean>(false);
  const [isFocussedState, setIsFocussedState] = useState<boolean>(false);
  const [isPressedState, setIsPressedState] = useState<boolean>(false);

  const styleProps: ButtonStyleProps = {
    isHovered: props.isHovered ?? isHoveredState,
    isFocussed: props.isFocussed ?? isFocussedState,
    isPressed: props.isPressed ?? isPressedState,
    isDisabled: props.isDisabled ?? false,
    variant: props.variant ?? 'primary',
    size: props.size ?? 'default',
    iconRight: props.iconRight ?? false,
  };

  const handleHoverChange = (value: boolean) => {
    if (props.onHoverChange && value !== isHoveredState) {
      props.onHoverChange(value);
    }
    if (!value) {
      handlePressChange(false);
    }
    setIsHoveredState(value);
  };

  const handleFocusChange = (value: boolean) => {
    if (props.isDisabled) {
      return;
    }
    if (props.onFocusChange && value !== isFocussedState) {
      props.onFocusChange(value);
    }
    setIsFocussedState(value);
  };

  const handlePressChange = (value: boolean) => {
    if (props.onPressChange && value !== isPressedState) {
      props.onPressChange(value);
    }
    if (value) {
      handleFocusChange(true);
    }
    setIsPressedState(value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (props.onClick) {
      props.onClick(event);
    }
    handleFocusChange(false);
    handlePressChange(false);
  };

  return (
    <ButtonWrapper
      onClick={handleClick}
      onPointerEnter={() => handleHoverChange(true)}
      onPointerMove={() => handleHoverChange(true)}
      onPointerLeave={() => handleHoverChange(false)}
      onFocus={() => handleFocusChange(true)}
      onBlur={() => handleFocusChange(false)}
      onPointerDown={() => handlePressChange(true)}
      onPointerUp={() => handlePressChange(false)}
      disabled={styleProps.isDisabled}
      className={props.className}
      {...styleProps}
    >
      <ButtonInner {...styleProps}>
        {!props.iconRight && props.icon}
        {props.children}
        {props.iconRight && props.icon}
      </ButtonInner>
    </ButtonWrapper>
  );
};
