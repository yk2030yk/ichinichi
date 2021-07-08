import { css } from '@/styles';
import { mixins } from '@/styles/mixins';
import { styledDiv, styledP } from '@/styles/utils';

export const Wrapper = styledDiv([
  mixins.fontMainColor,
  mixins.pointer,
  css`
    display: flex;
    align-items: center;
  `,
]);

export const IconWrapper = styledDiv<{ checked: boolean }>([
  (props) =>
    props.checked
      ? mixins.fontPrimaryMainColor(props)
      : mixins.fontMainColor(props),
]);

export const Label = styledP([
  mixins.fontMainColor,
  mixins.smallMarginLeft,
  mixins.fontHoverColor,
]);
