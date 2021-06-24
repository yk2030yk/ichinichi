import React from 'react';

import { TagIcon, CloseIcon } from '@/presenter/core/atoms/icons';
import * as S from './styled';

type Props = {
  color?: string;
  editable?: boolean;
  onClick?: () => void;
};

export const DiaryTagLabel: React.FC<Props> = ({
  children,
  color,
  editable = false,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) onClick();
  };
  return (
    <S.Tag color={color} onClick={handleClick} editable={editable}>
      <TagIcon size={10} />
      <S.TagText>{children}</S.TagText>
      {editable && <CloseIcon size={13} />}
    </S.Tag>
  );
};
