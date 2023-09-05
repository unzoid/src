import { setCookie, getCookie } from './cookie';

const gaKey = 'ga-disable-G-7R0YMMWPJX';

export const setGAOptout = () => {
  setCookie({ key: gaKey, value: 'true' });

  (window as any)[gaKey] = true;
};

export const getGAOutput = () => {
  const value = getCookie(gaKey);

  if (value && value === 'true') {
    (window as any)[gaKey] = true;
  }

  return value;
};
