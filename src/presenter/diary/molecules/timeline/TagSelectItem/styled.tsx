import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const SelectItem = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  ${({ theme }) => [mixins.pointer(), mixins.boxBorderBottom(theme)]}
`;

export const TagWrapper = styled.div`
  ${({ theme }) => [mixins.smallMarginLeft(theme)]}
`;

export const CheckIconWrapper = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
