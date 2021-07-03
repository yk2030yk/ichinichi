import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const CardWrapper = styled.div`
  ${({ theme }) => mixins.boxBorderBottom(theme)}
  ${({ theme }) => [
    mixins.width100Per(),
    mixins.middlePadding(theme),
  ]}
  padding-left: 0;
  padding-right: 0;
`;

export const Card = styled.div`
  ${() => [mixins.width100Per()]}
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
  ${({ theme }) => [mixins.width100Per(), mixins.smallMarginTop(theme)]}
`;
