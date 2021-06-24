import { styled } from '@/styles';
import { inputCss, okButtonCss } from '@/styles/mixins';

export const Input = styled.input`
  ${({ theme }) => inputCss(theme)}
  width: 100%;
  font-size: 11px;
`;

export const SaveButton = styled.button`
  ${({ theme }) => okButtonCss(theme)}
  margin-top: 10px;
  width: 80px;
`;
