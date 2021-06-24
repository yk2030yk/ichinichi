import { Theme } from '@/styles';

export const darkTheme: Theme = {
  space: {
    small: 10,
    middle: 20,
    large: 30,
  },
  palette: {
    primary: {
      light: '#0168df',
      main: '#0057ba',
      dark: '',
      text: '#fff',
    },
    secondary: {
      light: '#',
      main: '#',
      dark: '#',
      text: '#',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      text: '#fff',
    },
    warning: {
      light: '#',
      main: '#',
      dark: '#',
      text: '#',
    },
    info: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2',
      text: '#fff',
    },
    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c',
      text: '#fff',
    },
    background: {
      light: '#55586b',
      main: '#393b48',
      dark: '#292a33',
      text: '#d6d6d6',
      transparent: '#19191bbf',
    },
    text: {
      light: '#f1f1f1',
      main: '#d6d6d6',
      dark: '#8c8c8c',
      text: '',
    },
    action: {
      disabled: '#797979',
      disabledText: '#b5b5b5',
    },
    gradations: {
      green: {
        g1: '#e2f1ea',
        g2: '#aad5bf',
        g3: '#72b895',
        g4: '#478d6a',
        g5: '#2b5540',
      },
    },
    tag: {
      red: {
        light: '#ff6e6e',
        main: '#F00',
        dark: '#7a0d0d',
        text: '#fff',
      },
      green: {
        light: '#91fa91',
        main: '#0f0',
        dark: '#0b630b',
        text: '#fff',
      },
      blue: {
        light: '#9191ff',
        main: '#00f',
        dark: '#0000a1',
        text: '#fff',
      },
      yellow: {
        light: '#ffe573',
        main: '#ffd417',
        dark: '#b39100',
        text: '#fff',
      },
    },
  },

  border: {
    radius: {
      main: 3,
    },
  },

  boxShadow: '0 3px 7px rgba(0, 0, 0, 0.3)',
};
