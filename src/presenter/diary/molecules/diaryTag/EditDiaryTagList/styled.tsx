import { styled } from '@/styles';
import {
  boxBorderCss,
  boxBorderRadiusCss,
  middlePaddingCss,
} from '@/styles/mixins';

export const TagListArea = styled.div`
  ${({ theme }) => [
    boxBorderRadiusCss(theme),
    middlePaddingCss(theme),
    boxBorderCss(theme),
  ]}
`;
