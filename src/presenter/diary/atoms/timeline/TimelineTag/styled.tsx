import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const Tag = styled.div<{ color?: string; editable: boolean }>`
  ${({ theme, editable }) => [
    mixins.smallPadding(theme),
    mixins.boxBorderRadius(theme),
    editable && mixins.pointer(),
  ]}
  display: grid;
  grid-template-columns: ${({ editable }) =>
    editable ? '13px 1fr 13px' : '13px 1fr'};
  align-items: center;
  padding: 5px;
  grid-gap: 3px;
  background-color: ${({ color }) => color || '#836fa9'};
  color: #fff;
`;

export const TagText = styled.p`
  font-size: 11px;
`;
