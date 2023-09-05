const MAX_AGE = 2147483647 * 1000;

export const setCookie = (props: {
  key: string;
  value: string;
  expiryDays?: number;
  path?: string;
  domain?: string;
}) => {
  const expiryDate = new Date(
    props.expiryDays !== undefined ? Date.now() + props.expiryDays * 24 * 60 * 60 * 1000 : MAX_AGE
  );
  const cookieParts: string[] = [];
  cookieParts.push(`${props.key}=${props.value}`);
  cookieParts.push(`expires=${expiryDate.toUTCString()}`);
  cookieParts.push(`path=${props.path ?? '/'}`);
  if (props.domain) {
    cookieParts.push(`domain=${props.domain}`);
  }
  document.cookie = cookieParts.join(';');
};

export const getCookie = (key: string) => {
  const cookies = document.cookie.split(';').map((cookie) => cookie.trimLeft());
  for (const cookie of cookies) {
    if (cookie.startsWith(key)) {
      return cookie.split('=')[1];
    }
  }
  return undefined;
};

export const deleteCookie = (key: string, domain?: string) => {
  setCookie({ key, value: '', expiryDays: 0, domain });
};
