import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';
import { smallMarginLeft } from '@/styles/mixins/space';
import { mergeMixins } from '@/styles/utils';

export const Item = styled.div`
  ${({ theme }) => [
    mixins.smallPadding(theme),
    mixins.fontMainColor(theme),
    mixins.pointer(),
    mixins.fontHoverColor(theme),
  ]}
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  ${mergeMixins([])}
  display: flex;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  ${mergeMixins([smallMarginLeft])}
  display: flex;
  align-items: center;
`;
