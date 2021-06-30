import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const TextArea = styled.textarea`
  ${({ theme }) => mixins.input(theme)}
  width: 100%;
  resize: none;
`;
