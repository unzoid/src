import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { themeLight } from './themeLight';

export const mq = generateMedia({
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xlg: '1400px',
});

export const ThemeProvider: React.FC = (props) => {
  return <StyledThemeProvider theme={themeLight}>{props.children}</StyledThemeProvider>;
};
