import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const Input = styled.input`
  ${({ theme }) => mixins.input({ theme })}
  width: 200px;
`;

export const ButtonWrapper = styled.button`
  ${({ theme }) => mixins.smallMarginLeft({ theme })}
`;

export const Button = styled.button`
  ${({ theme }) => mixins.okButton({ theme })}
  width: 80px;
`;

export const TagPreviewWrapper = styled.div``;

export const TagWrapper = styled.div`
  width: 200px;
`;

export const TagForm = styled.div`
  display: grid;
`;

export const TagFormItem = styled.div`
  ${({ theme }) => [
    mixins.smallMarginTop({ theme }),
    mixins.resetFirstItemMargin(),
  ]}
`;
