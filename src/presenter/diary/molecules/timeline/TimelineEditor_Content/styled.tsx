import { styled } from '@/styles';
import { inputCss } from '@/styles/mixins';

export const TextArea = styled.textarea`
  ${({ theme }) => inputCss(theme)}
  width: 100%;
  resize: none;
`;
