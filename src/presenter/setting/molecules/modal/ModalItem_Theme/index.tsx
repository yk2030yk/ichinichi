import React from 'react';

import {
  useChangeApplicationThemeType,
  useApplicationThemeType,
} from '@/presenter/global/hooks/theme';
import { THEME_TYPE } from '@/domain/domainModels/theme';
import { ModalItem } from '../../../atoms/modal/ModalItem';
import * as S from './styled';

export const ModalItem_Theme: React.FC = () => {
  const changeTheme = useChangeApplicationThemeType();
  const themeType = useApplicationThemeType();

  return (
    <ModalItem title="テーマ選択">
      <S.Themes>
        <S.DarkThemeItem
          selected={themeType === THEME_TYPE.DARK}
          onClick={() => changeTheme(THEME_TYPE.DARK)}
        >
          ダークモード
        </S.DarkThemeItem>
        <S.LightThemeItem
          selected={themeType === THEME_TYPE.LIGHT}
          onClick={() => changeTheme(THEME_TYPE.LIGHT)}
        >
          ライトモード
        </S.LightThemeItem>
      </S.Themes>
    </ModalItem>
  );
};
