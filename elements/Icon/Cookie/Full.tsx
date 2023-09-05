import React from 'react';
import { IconBase, IconProps } from '../Base';

export const IconCookieFull: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} viewportSize={40}>
      <g filter="url(#filter0_iii_1681_142)">
        <circle cx="20" cy="20" r="20" fill="#EFCF8F" />
      </g>
      <circle cx="20" cy="20" r="19.5588" stroke="#957E50" strokeWidth="0.882353" />
      <circle
        opacity="0.6"
        cx="24.8532"
        cy="12.4999"
        r="1.61765"
        fill="#9E7354"
        stroke="#745139"
        strokeWidth="0.588235"
      />
      <circle cx="29.8532" cy="22.7941" r="1.61765" fill="#9E7354" stroke="#745139" strokeWidth="0.588235" />
      <circle
        opacity="0.6"
        cx="24.8532"
        cy="30.1471"
        r="1.61765"
        fill="#9E7354"
        stroke="#745139"
        strokeWidth="0.588235"
      />
      <circle cx="8.67693" cy="15.4412" r="2.5" fill="#9E7354" stroke="#745139" strokeWidth="0.588235" />
      <circle cx="11.6183" cy="25.4412" r="2.5" fill="#9E7354" stroke="#745139" strokeWidth="0.588235" />
      <circle cx="4.11788" cy="22.6472" r="0.882353" fill="#9E7354" stroke="#745139" strokeWidth="0.588235" />
      <circle cx="17.6472" cy="25.0001" r="0.882353" fill="#9E7354" stroke="#745139" strokeWidth="0.588235" />
      <circle
        opacity="0.5"
        cx="17.6472"
        cy="8.23531"
        r="0.882353"
        fill="#9E7354"
        stroke="#745139"
        strokeWidth="0.588235"
      />
      <defs>
        <filter
          id="filter0_iii_1681_142"
          x="0"
          y="-1.17647"
          width="40.2941"
          height="41.1765"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-1" dy="3.18" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.45 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1681_142" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="0.294118" dy="-1.17647" />
          <feGaussianBlur stdDeviation="0.882353" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="effect1_innerShadow_1681_142" result="effect2_innerShadow_1681_142" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="-4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
          <feBlend mode="normal" in2="effect2_innerShadow_1681_142" result="effect3_innerShadow_1681_142" />
        </filter>
      </defs>
    </IconBase>
  );
};
