import { styled } from '@/styles';
import {
  smallMarginTopCss,
  boxBorderBottomCss,
  fontHoverColorCss,
  middlePaddingCss,
} from '@/styles/mixins';

export const CardWrapper = styled.div`
  ${({ theme }) => boxBorderBottomCss(theme)}
  ${({ theme }) => middlePaddingCss(theme)}
  width: 100%;
  padding-left: 0;
  padding-right: 0;
`;

export const Card = styled.div`
  width: 100%;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const CardTopIconArea = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const CardTopIconWrapper = styled.div`
  ${({ theme }) => fontHoverColorCss(theme)}
  cursor: pointer;
  padding: 3px;
`;

export const CardDate = styled.p``;

export const CardContent = styled.div`
  ${({ theme }) => smallMarginTopCss(theme)}
  width: 100%;
`;
