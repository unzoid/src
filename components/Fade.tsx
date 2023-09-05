import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div<{ load?: boolean }>`
  transition: opacity 1s, transform 1s;
  transition-timing-function: cubic-bezier(0.17, 0.17, 0, 1);
  transition-delay: 150ms;

  ${({ load }) =>
    load &&
    css`
      opacity: 0;
      transform: translateY(20px);
    `}
`;

export const Fade: React.FC = (props) => {
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

  return <Wrapper load={load}>{props.children}</Wrapper>;
};
