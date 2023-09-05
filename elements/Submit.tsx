import { gsap } from 'gsap';
import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Icon } from './';

export interface SubmitStyleProps {
  isHovered: boolean;
  isFocussed: boolean;
  isPressed: boolean;
  isDisabled: boolean;
  isLoading: boolean;
  isValid: boolean;
}

export interface SubmitProps extends Partial<SubmitStyleProps> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onHoverChange?: (value: boolean) => void;
  onFocusChange?: (value: boolean) => void;
  onPressChange?: (value: boolean) => void;
  className?: string;
}

const SubmitWrapper = styled.div`
  --blur-opacity: 0;

  position: relative;
  display: table;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 32px;
    box-shadow: 0 8px 140px ${({ theme }) => theme.primary.blendToBackground(800)};
    opacity: var(--blur-opacity);
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    filter: blur(20px);
    background-color: ${({ theme }) => theme.primary.background};
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -6px 0 0 -6px;
  }
`;

const ButtonWrapper = styled.button<SubmitStyleProps>`
  color: ${({ theme }) => theme.background};
  background-color: ${({ theme }) => theme.foreground};
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
  z-index: 1;
  line-height: 24px;
  padding: 14px 26px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 32px;
  cursor: pointer;
  transition: background-color 0.25s, box-shadow 0.15s, padding 0.3s;

  box-shadow: 0px 2px 4px rgba(12, 20, 66, 0.1), 0px 10px 40px rgba(12, 20, 66, 0.06),
    inset 0px -1px 2px rgba(12, 20, 66, 0.08), inset 0 0 0 999px var(--button-overlay, transparent);

  --button-overlay: ${({ isHovered }) => isHovered && css`rgba(0, 0, 0, .5)`};
  --button-overlay: ${({ isPressed }) => isPressed && css`rgba(0, 0, 0, .75)`};

  cursor: ${({ isDisabled }) => isDisabled && 'not-allowed'};
  opacity: ${({ isDisabled }) => isDisabled && 0.5};

  ${({ isValid }) =>
    isValid &&
    css<SubmitStyleProps>`
      padding-right: 52px;
      background-color: ${({ theme }) => theme.primary.background};

      box-shadow: 0px 2px 4px rgba(12, 20, 66, 0.1), 0px 10px 40px rgba(12, 20, 66, 0.06),
        inset 0px -1px 2px rgba(12, 20, 66, 0.1);

      background-color: ${({ isHovered, theme }) => isHovered && theme.primary.blendToBackground(1050)};
      background-color: ${({ isPressed, theme }) => isPressed && theme.primary.blendToBackground(1125)};
    `}
`;

const ButtonInner = styled.div<SubmitStyleProps>`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  z-index: 1;
`;

const Arrow = styled(Icon.ArrowCircle)<SubmitStyleProps>`
  position: absolute;
  left: 166px;
  top: 50%;
  transform: translate(0, -20px);
  transition: opacity 0.25s, transform 0.3s;
  --icon-size: 30px;

  ${({ isLoading }) =>
    isLoading &&
    css`
      transform: translate(-4px, -15px);
    `}

  ${({ isValid }) =>
    !isValid &&
    css`
      opacity: 0;
      transform: translate(-8px, -20px);
      pointer-events: none;
    `}
`;

export const Submit: React.FC<SubmitProps> = (props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isHoveredState, setIsHoveredState] = useState<boolean>(false);
  const [isFocussedState, setIsFocussedState] = useState<boolean>(false);
  const [isPressedState, setIsPressedState] = useState<boolean>(false);

  const styleProps: SubmitStyleProps = {
    isHovered: props.isHovered ?? isHoveredState,
    isFocussed: props.isFocussed ?? isFocussedState,
    isPressed: props.isPressed ?? isPressedState,
    isDisabled: props.isDisabled ?? false,
    isLoading: props.isLoading ?? false,
    isValid: props.isValid ?? false,
  };

  useEffect(() => {
    if (!props.isValid) {
      return;
    }
    for (let i = 0; i < 30; i++) {
      createDot();
    }
  }, [props.isValid]);

  const createDot = () => {
    if (!wrapperRef.current) {
      return;
    }

    const elem = document.createElement('div');
    elem.classList.add('dot');

    wrapperRef.current.appendChild(elem);

    const duration = gsap.utils.random(1, 1.2);

    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: 16,
        x: gsap.utils.random(-100, 100),
      },
      {
        y: gsap.utils.random(-120, -200),
        x: Math.random() < 0.5 ? `+=${gsap.utils.random(20, 40)}` : `-=${gsap.utils.random(20, 40)}`,
        duration,
        onStart: () => {
          gsap.to(wrapperRef.current, {
            duration: duration,
            keyframes: [
              {
                '--blur-opacity': 1,
              },
              {
                '--blur-opacity': 0,
              },
            ],
          });
          gsap.to(elem, {
            duration,
            keyframes: [
              {
                opacity: 1,
              },
              {
                opacity: 0,
              },
            ],
          });
        },
        onComplete: () => {
          elem.remove();
        },
      }
    );
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
    <SubmitWrapper ref={wrapperRef}>
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
        type="submit"
        {...styleProps}
      >
        <ButtonInner {...styleProps}>{props.children}</ButtonInner>
        <Arrow {...styleProps} />
      </ButtonWrapper>
    </SubmitWrapper>
  );
};
