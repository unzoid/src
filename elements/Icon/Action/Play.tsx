import React from 'react';
import { IconBase, IconProps } from '../Base';

export const IconPlay: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props}>
      <path
        d="M3 13.2591V2.7409C3 1.55552 4.31017 0.838508 5.30858 1.47749L13.5259 6.73659C14.4478 7.3266 14.4478 8.6734 13.5259 9.26341L5.30858 14.5225C4.31017 15.1615 3 14.4445 3 13.2591Z"
        style={{ fill: 'var(--icon-color)' }}
      />
    </IconBase>
  );
};
