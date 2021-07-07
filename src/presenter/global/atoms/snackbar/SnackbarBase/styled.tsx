import { SnackbarType } from '@/presenter/global/state/snackbar';
import { Theme, css } from '@/styles';
import { mixins } from '@/styles/mixins';
import { styledDiv } from '@/styles/utils';

const getPaletteBySnackbarType = (theme: Theme, snackbarType: SnackbarType) => {
  switch (snackbarType) {
    case 'INFO':
      return theme.palette.info;
    case 'ERROR':
      return theme.palette.error;
    case 'SUCCESS':
      return theme.palette.success;
    default:
      return theme.palette.primary;
  }
};

const snackbarStyle = (theme: Theme, snackbarType: SnackbarType) => {
  const palette = getPaletteBySnackbarType(theme, snackbarType);
  return css`
    background-color: ${palette?.main};
    color: ${palette?.text};
  `;
};

export const Snackbar = styledDiv<{ snackbarType: SnackbarType }>([
  ({ theme, snackbarType }) => snackbarStyle(theme, snackbarType),
  mixins.fontSmallSize,
  mixins.smallPadding,
  mixins.boxShadow,
  mixins.boxBorderRadius,
  mixins.size({ w: '250px' }),
  mixins.position({ b: '30px', l: '50%' }),
  css`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
]);

export const SnackbarLeft = styledDiv([
  css`
    display: flex;
    align-items: center;
  `,
]);

export const SnackbarRight = styledDiv([
  mixins.pointer,
  css`
    display: flex;
    align-items: center;
  `,
]);

export const Message = styledDiv([mixins.smallMarginLeft]);
