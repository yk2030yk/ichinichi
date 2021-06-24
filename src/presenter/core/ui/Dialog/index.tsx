import React from 'react';

import * as S from './styled';

type Props = {
  message: string | React.ReactElement;
  ok?: () => void;
  cancel?: () => void;
};

export const Dialog: React.FC<Props> = ({ message, ok, cancel }) => {
  return (
    <S.Background>
      <S.ConfirmContent>
        <S.ConfirmMessage>{message}</S.ConfirmMessage>
        <S.ButtonArea>
          <S.CancelButton type="button" onClick={cancel}>
            cancel
          </S.CancelButton>
          <S.OkButton type="button" onClick={ok}>
            ok
          </S.OkButton>
        </S.ButtonArea>
      </S.ConfirmContent>
    </S.Background>
  );
};
