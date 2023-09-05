import React from 'react';
import styled from 'styled-components';
import { mq } from '~/Theme';

interface ContainerProps {
  className?: string;
}

const Wrapper = styled.div<ContainerProps>`
  max-width: 1140px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  ${mq.lessThan('lg')`
    max-width: 960px;
  `}

  ${mq.lessThan('md')`
    max-width: 720px;
  `}

  ${mq.lessThan('sm')`
    max-width: 480px;
  `}
`;

export const Container: React.FC<ContainerProps> = (props) => {
  return <Wrapper className={props.className}>{props.children}</Wrapper>;
};
