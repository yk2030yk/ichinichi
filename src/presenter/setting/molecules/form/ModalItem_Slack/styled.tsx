import { mixins } from '@/styles/mixins';
import { styledButton, styledInput } from '@/styles/utils';

export const Input = styledInput([
  mixins.width100Per,
  mixins.input,
  mixins.fontSmallSize,
]);

export const SaveButton = styledButton([
  mixins.okButton,
  mixins.smallMarginTop,
  mixins.width(80),
]);
