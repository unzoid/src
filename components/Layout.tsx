import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled, { css, createGlobalStyle } from 'styled-components';
import { Container } from './Container';
import { Header } from './Header';
import { Footer } from './Footer';
import { Cookie } from './Cookie';
import { ThemeProvider } from '~/Theme';
import '@fontsource/inter';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    line-height: 1.45;

    color: ${({ theme }) => theme.foreground};
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  input,
  button {
    font: inherit;
  }
`;

const StyledHeader = styled(Header)<{ load?: boolean }>`
  transition: opacity 1s;
  transition-timing-function: cubic-bezier(0.17, 0.17, 0, 1);

  ${({ load }) =>
    load &&
    css`
      opacity: 0;
    `}
`;

const Blur = styled.div<{ load?: boolean }>`
  position: absolute;
  width: 60%;
  height: 260px;
  top: 0;
  right: 30%;
  pointer-events: none;
  border-radius: 120px 20px;
  opacity: 0.14;
  box-shadow: 20px 250px 300px ${({ theme }) => theme.primary.background};
  transform: rotate(15deg) translateY(-175%) translateZ(0);
  transition: opacity 1.5s;
  transition-timing-function: cubic-bezier(0.17, 0.17, 0, 1);

  ${({ load }) =>
    load &&
    css`
      opacity: 0;
    `}
`;

export const Layout: React.FC = (props) => {
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
    <ThemeProvider>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Helmet>

      <GlobalStyle />
      <Blur load={load} />
      <Container>
        <StyledHeader load={load} />
        {props.children}
      </Container>
      <Footer />

      <Cookie />
    </ThemeProvider>
  );
};
