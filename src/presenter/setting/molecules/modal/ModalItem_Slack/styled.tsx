import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const Input = styled.input`
  ${({ theme }) => [mixins.width100Per(), mixins.input(theme)]}
  font-size: 11px;
`;

export const SaveButton = styled.button`
  ${({ theme }) => mixins.okButton(theme)}
  margin-top: 10px;
  width: 80px;
`;
