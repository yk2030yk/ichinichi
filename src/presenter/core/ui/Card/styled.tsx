import { mixins } from '@/styles/mixins';
import { styledDiv } from '@/styles/utils';

export const Card = styledDiv([
  mixins.middlePadding,
  mixins.width100Per,
  mixins.height100Per,
  mixins.boxBorderRadius,
  mixins.boxBorder,
]);
