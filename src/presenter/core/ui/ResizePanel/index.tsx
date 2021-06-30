import React, { useEffect, useState } from 'react';

import * as S from './styled';

type Props = {
  initialWidth?: number;
  minWidth?: number;
  maxWidth?: number;
};

export const ResizePanel: React.FC<Props> = ({
  children,
  initialWidth = 200,
  minWidth = 200,
  maxWidth = 200,
}) => {
  const [width, setWidth] = useState(initialWidth);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const onMouseDown = () => {
    setIsDragging(true);
  };

  useEffect(() => {
    const onMouseUp = () => setIsDragging(false);

    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  useEffect(() => {
    const onMouseMove = (e: any) => {
      setWidth((pre) => {
        const n = pre + e.movementX;
        if (n < minWidth || n > maxWidth) return pre;
        return n;
      });
    };

    if (isDragging) document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, [isDragging, minWidth, maxWidth]);

  return (
    <S.ResizePanel width={width}>
      <S.ResizeContent>{children}</S.ResizeContent>
      <S.ResizeBar isDragging={isDragging} onMouseDown={onMouseDown} />
    </S.ResizePanel>
  );
};
