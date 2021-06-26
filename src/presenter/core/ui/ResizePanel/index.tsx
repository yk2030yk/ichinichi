import React from 'react';

import * as S from './styled';

type Props = {};

export const ResizePanel: React.FC<Props> = ({ children }) => {
  const onMouseDown = () => {
    console.log('down');
  };
  return (
    <div>
      <div>{children}</div>
      <div role="button" onMouseDown={onMouseDown} />
      <div>hoge</div>
    </div>
  );
};
