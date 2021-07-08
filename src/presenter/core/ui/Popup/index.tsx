import React, { useRef } from 'react';

import * as S from './styled';

type PopupPositionType = 'left' | 'right';

const usePopup = (positionType: PopupPositionType) => {
  const ref = useRef<HTMLDivElement>(null);

  const getPosition = () => {
    const clientRect = ref.current?.getBoundingClientRect();

    const top = clientRect?.top || 0;
    const left = clientRect?.left || 0;

    switch (positionType) {
      case 'left':
        return { top, left };
      case 'right':
        return {
          top,
          left: (ref.current?.offsetLeft || 0) - 300,
        };
      default:
        return {};
    }
  };

  return {
    ref,
    getPosition,
  };
};

type Props = {
  isOpen: boolean;
  close?: () => void;
  position?: PopupPositionType;
};

export const Popup: React.FC<Props> = ({
  children,
  isOpen,
  close,
  position = 'left',
}) => {
  const { ref, getPosition } = usePopup(position);

  return (
    <>
      <div ref={ref} />
      {isOpen && (
        <>
          <S.PopupBackground onClick={close} />
          <S.Popup style={{ ...getPosition() }}>{children}</S.Popup>
        </>
      )}
    </>
  );
};
