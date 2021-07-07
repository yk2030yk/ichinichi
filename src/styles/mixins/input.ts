import { css, Props } from '@/styles';

const createInput = ({ theme }: Props) => css`
  color: #d6d6d6;
  border: solid 1px ${theme.palette.background?.dark};
  background-color: ${theme.palette.background?.dark};
  border-radius: ${theme.border.radius.main}px;
  padding: ${theme.space.small}px;
  cursor: pointer;

  &:hover {
    border: solid 1px ${theme.palette.background?.light};
  }

  &:placeholder {
    color: #d6d6d6;
  }
`;

export const input = (props: Props) => createInput(props);
