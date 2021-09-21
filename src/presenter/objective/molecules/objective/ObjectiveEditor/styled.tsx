import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';
import { styledTextArea } from '@/styles/utils';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Text = styledTextArea([
  mixins.boxBorder,
  mixins.smallPadding,
  mixins.width100Per,
  mixins.boxBorderRadius,
]);
