import React, { ReactNode, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Headline } from '~/elements';
import { mq } from '~/Theme';

interface HeroProps {
  headline: ReactNode;
  text?: ReactNode;
  textLight?: boolean;
  cta?: ReactNode;
  smallBottom?: boolean;
}

const Wrapper = styled.div<{ smallBottom?: boolean }>`
  margin: 120px 0;

  ${mq.lessThan('lg')`
    margin: 100px 0;
  `}

  ${mq.lessThan('md')`
    margin: 80px 0;
  `}

  ${mq.lessThan('sm')`
    margin: 64px 0;
  `}

  ${mq.lessThan('xs')`
    margin: 48px 0;
  `}

  ${({ smallBottom }) =>
    smallBottom &&
    css`
      margin-bottom: 80px;

      ${mq.lessThan('lg')`
        margin-bottom: 60px;
      `}

      ${mq.lessThan('md')`
        margin-bottom: 40px;
      `}

      ${mq.lessThan('sm')`
        margin-bottom: 32px;
      `}
    `}
`;

const StyledHeadline = styled(Headline)<{ load?: boolean }>`
  max-width: 65%;
  transition: opacity 1s, transform 1s;
  transition-timing-function: cubic-bezier(0.17, 0.17, 0, 1);

  ${mq.lessThan('md')`
    max-width: 100%;
  `}

  ${({ load }) =>
    load &&
    css`
      opacity: 0;
      transform: translateY(20px);
    `}
`;

const Text = styled.p<{ textLight?: boolean; load?: boolean }>`
  margin: 52px 0 0 0;
  max-width: 60%;
  font-weight: 600;
  font-size: 24px;
  transition: opacity 1s, transform 1s;
  transition-timing-function: cubic-bezier(0.17, 0.17, 0, 1);
  transition-delay: 50ms;

  ${({ load }) =>
    load &&
    css`
      opacity: 0;
      transform: translateY(20px);
    `}

  ${mq.lessThan('lg')`
    margin-top: 40px;
  `}

  ${mq.lessThan('md')`
    margin-top: 32px;
    max-width: 90%;
    font-size: 20px;
  `}

  ${mq.lessThan('sm')`
    margin-top: 24px;
    font-size: 18px;
  `}

  ${({ textLight }) =>
    textLight &&
    css`
      font-weight: 500;
    `}

  span {
    font-weight: 500;
    color: ${({ theme }) => theme.secondary.blendToBackground(600)};
  }
`;

const CallToAction = styled.div<{ load?: boolean }>`
  margin: 52px 0 -8px 0;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  transition: opacity 1s, transform 1s;
  transition-timing-function: cubic-bezier(0.17, 0.17, 0, 1);
  transition-delay: 50ms;

  ${({ load }) =>
    load &&
    css`
      opacity: 0;
      transform: translateY(20px);
    `}

  & > * {
    &:not(:last-child) {
      margin-right: 16px;
      margin-bottom: 8px;

      ${mq.lessThan('sm')`
        margin-right: 12px;
      `}

      ${mq.lessThan('sm')`
        margin-right: 8px;
      `}
    }
  }

  ${mq.lessThan('lg')`
    margin-top: 40px;
  `}

  ${mq.lessThan('md')`
    margin-top: 36px;
  `}

  ${mq.lessThan('sm')`
    margin-top: 32px;
  `}
`;

export const Hero: React.FC<HeroProps> = (props) => {
  const [load, setLoad] = useState<boolean>(true);

  const handleLoad = () => {
    setLoad(false);
  };

  useEffect(() => {
    if ((document as any).customLoad) {
      handleLoad();
    }

    document.addEventListener('customLoad', handleLoad);

    return () => {
      document.removeEventListener('customLoad', handleLoad);
    };
  }, []);

  return (
    <Wrapper smallBottom={props.smallBottom}>
      <StyledHeadline load={load}>{props.headline}</StyledHeadline>
      {props.text && (
        <Text load={load} textLight={props.textLight}>
          {props.text}
        </Text>
      )}
      {props.cta && <CallToAction load={load}>{props.cta}</CallToAction>}
    </Wrapper>
  );
};
