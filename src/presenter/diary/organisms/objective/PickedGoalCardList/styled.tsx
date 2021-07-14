import { css, styled } from '@/styles';
import { mixins } from '@/styles/mixins';
import { styledDiv } from '@/styles/utils';

export const CardList = styled.div`
  width: 100%;
  display: flex;
  overflow-x: scroll;
`;

export const CardWrapper = styledDiv([
  mixins.width(200),
  mixins.height(150),
  mixins.smallMarginLeft,
  mixins.resetFirstItemMargin,
  css`
    flex-shrink: 0;
  `,
]);
