import { DefaultTheme } from 'styled-components';
import { Theme } from './Theme';

export const themeLight: DefaultTheme = new Theme({
  name: 'Light',
  foreground: '#19191B',
  background: '#FFFFFF',
  body: '#F2F4F6',
  primary: '#008FFD',
  secondary: '#616870',
  success: '#4ACF4A',
  warning: '#F5D03D',
  danger: '#EB5757',
});
