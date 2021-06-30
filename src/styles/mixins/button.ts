import { css, Theme } from '@/styles';
import { PaletteColor } from '@emotion/react';

const createButton = (theme: Theme, paletteColor?: PaletteColor) => css`
  background-color: ${paletteColor?.main};
  color: ${paletteColor?.text};
  padding: ${theme.space.small}px;
  border-radius: ${theme.border.radius.main}px;
  text-align: center;
  transition: background-color 0.3s;

  &:hover {
    &:not([disabled]) {
      background-color: ${paletteColor?.light};
    }
  }

  &:disabled {
    background-color: ${theme.palette.action.disabled};
    color: ${theme.palette.action.disabledText};
    cursor: not-allowed;
  }
`;

export const okButton = (theme: Theme) =>
  createButton(theme, theme.palette.primary);

export const cancelButton = (theme: Theme) =>
  createButton(theme, theme.palette.background);
