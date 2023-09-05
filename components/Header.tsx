import React from 'react';
import { navigate, Link } from 'gatsby';
import styled from 'styled-components';
import { Button, Logo } from '~/elements';

const Wrapper = styled.div`
  padding-top: 32px;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const LogoLink = styled(Link)``;

const StyledLogo = styled(Logo)`
  position: absolute;
  top: 36px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <Button variant="subtle" size="small" onClick={() => navigate('/about')}>
        About
      </Button>
      <LogoLink to="/">
        <StyledLogo withName size="28px" />
      </LogoLink>
      <Button variant="light" size="small" onClick={() => window.open('https://app.dona.ai/', '_blank')}>
        Login
      </Button>
    </Wrapper>
  );
};
