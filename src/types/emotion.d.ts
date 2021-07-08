import '@emotion/react';

declare module '@emotion/react' {
  type SpaceSet = {
    small?: number;
    middle?: number;
    large?: number;
  };

  type PaletteColor = {
    light: string;
    main: string;
    sub?: string;
    dark: string;
    text: string;
  };

  type Gradation = {
    g1: string;
    g2: string;
    g3: string;
    g4: string;
    g5: string;
  };

  type TagColors = {
    red: PaletteColor;
    green: PaletteColor;
    blue: PaletteColor;
    yellow: PaletteColor;
  };

  type Palette = {
    primary: PaletteColor;
    secondary: PaletteColor;
    error: PaletteColor;
    warning: PaletteColor;
    info: PaletteColor;
    success: PaletteColor;
    background: PaletteColor & { transparent: string };
    text: PaletteColor;
    action: {
      disabled: string;
      disabledText: string;
    };
    gradations: {
      green: Gradation;
    };
    tag: TagColors;
  };

  type Border = {
    radius: {
      main: number;
    };
  };

  export interface Theme {
    space: SpaceSet;
    palette: Palette;
    border: Border;
    boxShadow: string;
  }
}
