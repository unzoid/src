import React from 'react';
import styled, { css } from 'styled-components';
import { mq } from '~/Theme';

interface HeadlineProps {
  type?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
}

const Wrapper = styled.div<HeadlineProps>`
  font-size: 84px;
  font-weight: 700;
  line-height: 1.1;
  color: ${({ theme }) => theme.foreground};
  margin: 0;

  span {
    display: inline;
    background: linear-gradient(
        to right,
        ${({ theme }) => theme.secondary.blendToBackground(350)} 50%,
        ${({ theme }) => theme.primary.blendToBackground(500, 700)} 100%
      )
      ${({ theme }) => theme.secondary.blendToBackground(900)};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.1;
    margin-bottom: -4px;
  }

  ${mq.lessThan('lg')`
    font-size: 64px;
  `}

  ${mq.lessThan('md')`
    font-size: 56px;

    span {
      margin-bottom: -2px;
    }
  `}

  ${mq.lessThan('sm')`
    font-size: 48px;
    line-height: 1.15;
  `}

  ${mq.lessThan('xs')`
    font-size: 40px;
    line-height: 1.15;
  `}

  ${({ type }) =>
    type === 'h2' &&
    css`
      font-size: 32px;
      line-height: 1.35;
      font-weight: 600;

      ${mq.lessThan('lg')`
        font-size: 28px;
      `}

      ${mq.lessThan('md')`
        font-size: 24px;
      `}
    `}

  ${({ type }) =>
    type === 'h3' &&
    css`
      font-size: 26px;
      line-height: 1.35;
      font-weight: 600;

      ${mq.lessThan('lg')`
        font-size: 24px;
      `}

      ${mq.lessThan('md')`
        font-size: 20px;
      `}

      ${mq.lessThan('sm')`
        font-size: 18px;
      `}
    `}

  ${({ type }) =>
    type === 'h4' &&
    css`
      font-size: 18px;
      line-height: 1.35;
      font-weight: 600;

      ${mq.lessThan('lg')`
        font-size: 18px;
      `}

      ${mq.lessThan('md')`
        font-size: 18px;
      `}

      ${mq.lessThan('sm')`
        font-size: 18px;
      `}
    `}
`;

export const Headline: React.FC<HeadlineProps> = (props) => {
  return (
    <Wrapper className={props.className} type={props.type} as={props.type ?? 'h1'}>
      {props.children}
    </Wrapper>
  );
};
