import React from 'react';
import styled, { css } from 'styled-components';
import { IconBase, IconProps } from '../Base';

const Arrow = styled.path<{ isLoading?: boolean }>`
  transition: stroke-dasharray 0.2s ease 0.15s, stroke-dashoffset 0.2s ease 0.15s;
  stroke-dasharray: 13px 13px;
  stroke-dashoffset: 26px;

  ${({ isLoading }) =>
    isLoading &&
    css`
      stroke-dasharray: 0px 13px;
      stroke-dashoffset: 6.5px;
      transition-delay: 0s;
      transition-duration: 0.1s;
    `}
`;

const Path = styled.path<{ isLoading?: boolean }>`
  stroke-dasharray: 11px 50px;
  stroke-dashoffset: 61px;

  transition: stroke-dasharray 0.3s, stroke-dashoffset 0.3s, opacity 0.3s;

  ${({ isLoading }) =>
    isLoading &&
    css`
      stroke-dasharray: 38px 50px;
      stroke-dashoffset: 74px;
      opacity: 0.4;
    `}
`;

const Circle = styled.circle<{ isLoading?: boolean }>`
  stroke-dasharray: 4px 36px;
  transform-origin: 15px 15px;

  animation: circleLoad 1s linear infinite;

  transition: opacity 0.15s ease 0.2s;

  ${({ isLoading }) =>
    !isLoading &&
    css`
      opacity: 0;
      transition-delay: 0s;
    `}

  @keyframes circleLoad {
    0% {
      transform: rotate(360deg);
    }
    50% {
      stroke-dasharray: 16px 36px;
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export const IconArrowCircle: React.FC<IconProps & { isLoading?: boolean }> = (props) => {
  return (
    <IconBase {...props} viewportSize={30}>
      <g fill="none" strokeWidth={2} strokeLinecap="round" style={{ stroke: 'var(--icon-color)' }}>
        <Arrow d="M9 16L13 21L9 26" isLoading={props.isLoading} strokeLinecap="butt" />
        <Path
          d="M1 21H15C18.5 21 21 18.3137 21 15C21 11.6863 18.3137 9 15 9C11.6863 9 9 11.6863 9 15C9 18.3109 11.6791 20.9945 14.99 21"
          isLoading={props.isLoading}
        />
        <Circle cx="15" cy="15" r="6" isLoading={props.isLoading} />
      </g>
    </IconBase>
  );
};
