import { css } from '@/styles';
import { mixins } from '@/styles/mixins';
import { styledDiv } from '@/styles/utils';

export const Wrapper = styledDiv([mixins.width100Per, mixins.smallPadding]);

export const MenuItem = styledDiv([
  mixins.width100Per,
  css`
    display: flex;
    justify-content: center;
  `,
]);
