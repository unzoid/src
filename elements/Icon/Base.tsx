import React, { CSSProperties } from 'react';

import styled from 'styled-components';

export interface IconStyleProps {}

export interface IconProps extends Partial<IconStyleProps> {
  viewportSize?: number;
  viewportSizeX?: number;
  viewportSizeY?: number;
  onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  onMouseEnter?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  onMouseMove?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  onMouseLeave?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  onMouseDown?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  onMouseUp?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  onFocus?: (event: React.FocusEvent<SVGSVGElement>) => void;
  onBlur?: (event: React.FocusEvent<SVGSVGElement>) => void;
  className?: string;
  style?: CSSProperties;
}

const IconWrapper = styled.svg<IconStyleProps>`
  --icon-color: currentColor;
  --icon-size: 16px;
  width: var(--icon-size);
  height: var(--icon-size);
  display: block;
`;

export const IconBase: React.FC<IconProps> = (props) => {
  const viewportSizeX = props.viewportSizeX || props.viewportSize || 16;
  const viewportSizeY = props.viewportSizeY || props.viewportSize || 16;

  const styleProps: IconStyleProps = {};

  return (
    <IconWrapper
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseMove={props.onMouseMove}
      onMouseLeave={props.onMouseLeave}
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
      viewBox={`0 0 ${viewportSizeX} ${viewportSizeY}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={props.style}
      className={props.className}
      {...styleProps}
    >
      {props.children}
    </IconWrapper>
  );
};
