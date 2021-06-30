import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const CardWrapper = styled.div`
  ${({ theme }) => mixins.boxBorderBottom(theme)}
  ${({ theme }) => mixins.middlePadding(theme)}
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
  ${({ theme }) => mixins.fontHoverColor(theme)}
  cursor: pointer;
  padding: 3px;
`;

export const CardDate = styled.p``;

export const CardContent = styled.div`
  ${({ theme }) => mixins.smallMarginTop(theme)}
  width: 100%;
`;
