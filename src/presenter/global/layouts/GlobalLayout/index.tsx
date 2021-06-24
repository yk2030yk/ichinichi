import React from 'react';

import { GlobalSideMenu } from '@/presenter/global/organisms/sidemenu/GlobalSideMenu';
import * as S from './styled';

type Props = {
  subMenuContent: React.ReactElement;
  mainContent: React.ReactElement;
};

export const GlobalLayout: React.FC<Props> = ({
  subMenuContent,
  mainContent,
}) => {
  return (
    <S.Wrapper>
      <S.LeftContent>
        <GlobalSideMenu />
      </S.LeftContent>
      <S.MiddleContent>{subMenuContent}</S.MiddleContent>
      <S.RightContent>{mainContent}</S.RightContent>
    </S.Wrapper>
  );
};
