import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const TextArea = styled.textarea`
  ${({ theme }) => [mixins.width100Per(), mixins.input({ theme })]}
  resize: none;
`;
