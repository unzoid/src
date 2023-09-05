import React, { useRef, useState } from 'react';
import { Link } from 'gatsby';
import gsap from 'gsap';
import styled, { css } from 'styled-components';
import { Button, Icon } from '~/elements';
import { mq } from '~/Theme';

export interface CookieProps {
  className?: string;
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  left: 24px;
  bottom: 24px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0px 1px 3px rgba(12, 20, 66, 0.03), 0px 8px 16px rgba(12, 20, 66, 0.04),
    0px 16px 40px rgba(12, 20, 66, 0.04);
  padding: 18px;
  border-radius: 40px;

  ${mq.lessThan('sm')`
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 0;
    padding: 16px;
    box-shadow: 0px 1px 3px rgba(12, 20, 66, 0.03), 0px -8px 16px rgba(12, 20, 66, 0.04),
    0px -16px 40px rgba(12, 20, 66, 0.04);
    justify-content: space-between;
  `}

  ${mq.lessThan('xs')`
    padding: 12px;
  `}
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const CookieIcon = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  margin-right: 16px;

  svg {
    --icon-size: 40px;
  }
`;

const CookieText = styled.div`
  margin-right: 24px;
  color: ${({ theme }) => theme.foreground};

  a {
    color: inherit;
    display: inline-block;
    text-decoration: none;
    position: relative;

    &:before {
      content: '';
      left: 0;
      right: 0;
      bottom: 2px;
      height: 1px;
      background-color: currentColor;
      position: absolute;
    }
  }
`;

const Full = styled(Icon.CookieFull)<{ show: boolean }>`
  ${({ show }) =>
    !show &&
    css`
      animation: scale 0.4s ease forwards;
      opacity: 0;
    `};

  @keyframes scale {
    50% {
      transform: scale(0.95);
    }
  }
`;

const Crack = styled(Icon.CookieCrack)<{ show: boolean }>`
  position: absolute;
  left: 0;
  top: 0;

  ${({ show }) =>
    !show &&
    css`
      opacity: 0;
    `};

  ${({ show }) =>
    show &&
    css`
      animation: scale 0.4s ease forwards;
      .crack-particle {
        animation: crack 0.6s ease forwards;
      }
    `}

  @keyframes crack {
    from {
      opacity: 0;
      transform: translate(-4px, 4px);
    }
  }

  @keyframes scale {
    50% {
      transform: scale(0.95);
    }
  }
`;

export const Cookie: React.FC<CookieProps> = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [showCrack, setShowCrack] = useState<boolean>(false);

  const handleClick = () => {
    setShowCrack(true);

    if (wrapperRef.current) {
      gsap.to(wrapperRef.current, {
        y: 8,
        opacity: 0,
        duration: 0.3,
        delay: 0.3,
        onComplete: () => {
          localStorage.setItem('cookieAllowed', 'true');
        },
      });
    }
  };

  if (typeof document === 'undefined') {
    return <></>;
  }

  return localStorage.getItem('cookieAllowed') ? (
    <></>
  ) : (
    <Wrapper ref={wrapperRef}>
      <Content>
        <CookieIcon>
          <Full show={!showCrack} />
          <Crack show={showCrack} />
        </CookieIcon>
        <CookieText>
          This website uses cookies. <Link to="/privacy-policy">Learn more</Link>
        </CookieText>
      </Content>
      <Button onClick={handleClick} size="small" variant="light">
        Accept
      </Button>
    </Wrapper>
  );
};
