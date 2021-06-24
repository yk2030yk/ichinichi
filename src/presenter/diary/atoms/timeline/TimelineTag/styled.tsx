import { styled } from '@/styles';
import {
  smallPaddingCss,
  boxBorderRadiusCss,
  pointerCss,
} from '@/styles/mixins';

export const Tag = styled.div<{ color?: string; editable: boolean }>`
  ${({ theme, editable }) => [
    smallPaddingCss(theme),
    boxBorderRadiusCss(theme),
    editable && pointerCss(),
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
