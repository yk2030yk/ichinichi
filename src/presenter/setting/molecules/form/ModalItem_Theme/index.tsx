import React from 'react';

import {
  useChangeApplicationThemeType,
  useApplicationThemeType,
} from '@/presenter/global/hooks/theme';
import { THEME_TYPE } from '@/domain/domainModels/theme';
import { RadioButton } from '@/presenter/core/ui/RadioButton';
import { ModalItem } from '../../../atoms/modal/ModalItem';
import * as S from './styled';

export const ModalItem_Theme: React.FC = () => {
  const changeTheme = useChangeApplicationThemeType();
  const themeType = useApplicationThemeType();

  const modes = [
    { type: THEME_TYPE.DARK, label: 'ダークモード' },
    { type: THEME_TYPE.LIGHT, label: 'ライトモード' },
  ];

  return (
    <ModalItem title="テーマ選択">
      <S.Themes>
        {modes.map((mode) => (
          <RadioButton
            key={mode.type}
            checked={themeType === mode.type}
            onClick={() => changeTheme(mode.type)}
            label={mode.label}
          />
        ))}
      </S.Themes>
    </ModalItem>
  );
};
