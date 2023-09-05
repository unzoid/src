import { Color } from './Color';

export interface ThemeProps {
  // Identifiers
  name: string;
  // Main
  foreground: string;
  background: string;
  body: string;
  // Shades
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  danger: string;
}

export class Theme {
  id: string;
  name: string;
  foreground: string;
  background: string;
  body: string;
  primary: Color;
  secondary: Color;
  success: Color;
  warning: Color;
  danger: Color;

  constructor(props: ThemeProps) {
    const foreground = props.foreground;
    const background = props.background;
    const body = props.body;
    // Identifiers
    this.id = props.name.toLowerCase();
    this.name = props.name;
    // Main
    this.foreground = foreground;
    this.background = background;
    this.body = body;
    // Colors
    this.primary = new Color({
      color: props.primary,
      themeForeground: foreground,
      themeBackground: background,
      saturation: this.id === 'light' ? 0.075 : 0.04,
    });
    this.secondary = new Color({
      color: props.secondary,
      themeForeground: foreground,
      themeBackground: background,
      saturation: this.id === 'light' ? 0.09 : this.id === 'dark' ? 0.05 : 0.07,
    });
    this.success = new Color({
      color: props.success,
      themeForeground: foreground,
      themeBackground: background,
      saturation: this.id === 'light' ? 0.075 : 0.04,
    });
    this.warning = new Color({
      color: props.warning,
      themeForeground: foreground,
      themeBackground: background,
      saturation: this.id === 'light' ? 0.075 : 0.04,
    });
    this.danger = new Color({
      color: props.danger,
      themeForeground: foreground,
      themeBackground: background,
      saturation: this.id === 'light' ? 0.075 : 0.04,
    });
  }
}
