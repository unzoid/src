import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Container } from './Container';
import { mq } from '~/Theme';
import { Icon } from '~/elements';

const Wrapper = styled.div`
  padding: 64px 0;
  border-top: 1px solid ${({ theme }) => theme.secondary.blendToBackground(150)};

  ${mq.lessThan('lg')`
    padding: 48px 0;
  `}

  ${mq.lessThan('md')`
    padding: 40px 0;
  `}

  ${mq.lessThan('sm')`
    padding: 32px 0;
  `}
`;

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.secondary.background};

  ${mq.lessThan('xs')`
    font-size: 14px;
  `}

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.foreground};
  }
`;

const List = styled.div`
  color: ${({ theme }) => theme.secondary.blendToBackground(800)};
  font-size: 14px;
  font-weight: 400;
  margin-top: 4px;

  ${mq.lessThan('xs')`
    font-size: 12px;
  `}
`;

const Twitter = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 14px;
  transition: background-color 0.15s;

  background-color: ${({ theme }) => theme.secondary.blendToBackground(150)};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.02), inset 0px -1px 2px rgba(0, 0, 0, 0.03);

  &:hover {
    background-color: ${({ theme }) => theme.secondary.blendToBackground(175)};
  }

  &:active {
    background-color: ${({ theme }) => theme.secondary.blendToBackground(200)};
  }

  svg {
    --icon-color: ${({ theme }) => theme.foreground};
  }
`;

export const Footer: React.FC = (props) => {
  return (
    <Wrapper>
      <StyledContainer>
        <Info>
          &copy; {new Date().getFullYear()} Dona.
          {/* <br />
          Made by{' '}
          <a href="https://twitter.com/jakubantalik" target="_blank" rel="noreferrer">
            Jakub Antalik
          </a>,{' '}
          <a href="https://twitter.com/aaroniker_me" target="_blank" rel="noreferrer">
            Aaron Iker
          </a>{' '}
          &amp;{' '}
          <a href="https://twitter.com/nisargptel" target="_blank" rel="noreferrer">
            Nisarg Patel
          </a> */}
          <List>
            <Link to="/terms-of-service">Terms of Service</Link> · <Link to="/privacy-policy">Privacy policy</Link>
          </List>
        </Info>
        <Twitter href="https://twitter.com/getdona" target="_blank" rel="noreferrer">
          <Icon.Twitter />
        </Twitter>
      </StyledContainer>
    </Wrapper>
  );
};
