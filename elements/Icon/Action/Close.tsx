import React from 'react';
import { IconBase, IconProps } from '../Base';

export const IconClose: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props}>
      <path
        d="M12 4L4 12M12 12L4 4"
        style={{ stroke: 'var(--icon-color)' }}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </IconBase>
  );
};
