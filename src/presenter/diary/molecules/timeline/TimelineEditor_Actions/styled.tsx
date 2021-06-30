import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const EditActions = styled.div`
  display: flex;
`;

export const EditAction = styled.div`
  ${({ theme }) => [
    mixins.smallMarginLeft(theme),
    mixins.resetFirstItemMargin(),
  ]}
`;

export const SaveButton = styled.button`
  ${({ theme }) => mixins.okButton(theme)}
  width: 80px;
`;

export const CancelButton = styled.button`
  ${({ theme }) => mixins.cancelButton(theme)}
  width: 80px;
`;
