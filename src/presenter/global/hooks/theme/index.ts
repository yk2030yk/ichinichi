import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { ThemeType } from '@/domain/domainModels/theme';
import { useThemeUseCase } from '@/presenter/global/hooks/dependency';
import { themeTypeAtom } from '@/presenter/global/state/theme';

export const useApplicationThemeTypeLoad = () => {
  const setThemeType = useSetRecoilState(themeTypeAtom);
  const themeUseCase = useThemeUseCase();

  useEffect(() => {
    const storageThemeType = themeUseCase.getStoredThemeType();
    if (storageThemeType) setThemeType(storageThemeType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useApplicationThemeType = () => {
  const themeType = useRecoilValue(themeTypeAtom);
  return themeType;
};

export const useApplicationTheme = () => {
  const themeType = useApplicationThemeType();
  const themeUseCase = useThemeUseCase();
  return themeUseCase.getThemeByType(themeType);
};

export const useChangeApplicationThemeType = () => {
  const setThemeType = useSetRecoilState(themeTypeAtom);
  const themeUseCase = useThemeUseCase();

  const changeThemeType = (type: ThemeType) => {
    themeUseCase.storeThemeType(type);
    setThemeType(type);
  };

  return changeThemeType;
};

export const useTagColor = () => {
  const theme = useApplicationTheme();
  const themeUseCase = useThemeUseCase();
  return themeUseCase.getTagColor(theme);
};
