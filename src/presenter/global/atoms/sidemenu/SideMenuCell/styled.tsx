import { css } from '@/styles';
import { mixins } from '@/styles/mixins';
import { styledDiv } from '@/styles/utils';

const size = '40px';
export const Cell = styledDiv<{ selected: boolean }>([
  mixins.size({ w: size, h: size }),
  mixins.fontDarkColor,
  ({ selected, ...props }) =>
    selected ? mixins.fontLightColor(props) : mixins.fontHoverColor(props),
  mixins.pointer(),
  css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
]);
