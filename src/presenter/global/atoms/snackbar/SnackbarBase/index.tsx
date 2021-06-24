import React from 'react';

import { CloseIcon } from '@/presenter/core/atoms/icons';
import { SnackbarType } from '@/presenter/global/state/snackbar';
import * as S from './styled';

type Props = {
  icon: React.ReactElement;
  message: string;
  onClick: (e?: React.MouseEvent) => void;
  snackbarType: SnackbarType;
};

export const SnackbarBase: React.FC<Props> = ({
  icon,
  message,
  onClick,
  snackbarType,
}) => {
  return (
    <S.Snackbar snackbarType={snackbarType}>
      <S.SnackbarLeft>
        {icon}
        <S.Message>{message || 'エラーがおきました'}</S.Message>
      </S.SnackbarLeft>
      <S.SnackbarRight>
        <CloseIcon size={20} onClick={onClick} />
      </S.SnackbarRight>
    </S.Snackbar>
  );
};
