import { css } from '@/styles';
import { mixins } from '@/styles/mixins';
import { styledDiv } from '@/styles/utils';

export const Wrapper = styledDiv([
  mixins.backgroundColorMain,
  mixins.fontMainColor,
  mixins.width100Per,
  mixins.height100Vh,
  css`
    display: flex;
  `,
]);

export const LeftContent = styledDiv([
  mixins.backgroundColorDark,
  mixins.height100Per,
  mixins.width100Per,
  mixins.height100Vh,
  css`
    width: 50px;
  `,
]);

export const MiddleContent = styledDiv([
  mixins.width100Per,
  mixins.backgroundColorMain,
]);

export const RightContent = styledDiv([
  mixins.backgroundColorMain,
  css`
    overflow-y: scroll;
    flex-grow: 2;
  `,
]);
