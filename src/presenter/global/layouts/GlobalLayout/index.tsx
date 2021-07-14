import React from 'react';

import { GlobalSideMenu } from '@/presenter/global/organisms/sidemenu/GlobalSideMenu';
import { ResizePanel } from '@/presenter/core/ui/ResizePanel';
import * as S from './styled';

type Props = {
  subMenuContent?: React.ReactElement;
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
      {subMenuContent && (
        <ResizePanel initialWidth={200} minWidth={150} maxWidth={300}>
          <S.MiddleContent>{subMenuContent}</S.MiddleContent>
        </ResizePanel>
      )}
      <S.RightContent>{mainContent}</S.RightContent>
    </S.Wrapper>
  );
};
