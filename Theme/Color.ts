import chroma from 'chroma-js';

interface ColorProps {
  color: string;
  themeForeground: string;
  themeBackground: string;
  saturation: number;
}

export class Color {
  foreground: string;
  background: string;
  saturation: number;

  private _props: ColorProps;

  constructor(props: ColorProps) {
    this._props = props;
    this.background = props.color;

    const luminanceBackground = chroma(props.themeBackground).luminance();
    const luminanceForeground = chroma(props.themeForeground).luminance();

    this.foreground = luminanceBackground > luminanceForeground ? props.themeBackground : props.themeForeground;

    this.saturation = props.saturation;
  }

  blendToBackground(ppm: number, alphaPpm?: number, saturate?: number) {
    let color = chroma.mix(this._props.themeBackground, this._props.color, ppm * 0.001);
    if (ppm <= 1000) {
      color = color.saturate(this.saturation);
    }
    if (typeof alphaPpm !== 'undefined') {
      if (typeof saturate !== 'undefined') {
        return color
          .alpha(alphaPpm * 0.001)
          .saturate(saturate)
          .toString();
      }
      return color.alpha(alphaPpm * 0.001).toString();
    }
    if (typeof saturate !== 'undefined') {
      return color.saturate(saturate).toString();
    }
    return color.toString();
  }

  blendToForeground(ppm: number, alphaPpm?: number, saturate?: number) {
    const foreground = chroma(this._props.themeForeground).desaturate(5);
    let color = chroma.mix(foreground, this._props.color, ppm * 0.001);
    if (ppm <= 1000) {
      color = color.saturate(this.saturation);
    }
    if (typeof alphaPpm !== 'undefined') {
      if (typeof saturate !== 'undefined') {
        return color
          .alpha(alphaPpm * 0.001)
          .saturate(saturate)
          .toString();
      }
      return color.alpha(alphaPpm * 0.001).toString();
    }
    if (typeof saturate !== 'undefined') {
      return color.saturate(saturate).toString();
    }
    return color.toString();
  }

  darken(darken: number, saturate?: number) {
    if (saturate) {
      return chroma(this._props.color).darken(darken).saturate(saturate).toString();
    }
    return chroma(this._props.color).darken(darken).toString();
  }
}
