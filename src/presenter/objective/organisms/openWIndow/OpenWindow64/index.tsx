import React from 'react';

import * as S from './styled';

const mbo = {
  large: '体型を整える',
  items: [
    {
      middle: 'ダイエット',
      order: 1,
      items: [
        {
          small: '食事制限',
          order: 1,
        },
        {
          small: '食事制限',
          order: 2,
        },
        {
          small: '食事制限',
          order: 3,
        },
        {
          small: '食事制限',
          order: 4,
        },
        {
          small: '食事制限',
          order: 5,
        },
        {
          small: '食事制限',
          order: 6,
        },
        {
          small: '食事制限',
          order: 7,
        },
        {
          small: '食事制限',
          order: 8,
        },
      ],
    },
    {
      middle: 'ダイエット',
      order: 2,
      items: [
        {
          small: '食事制限',
          order: 1,
        },
        {
          small: '食事制限',
          order: 2,
        },
        {
          small: '食事制限',
          order: 3,
        },
        {
          small: '食事制限',
          order: 4,
        },
        {
          small: '食事制限',
          order: 5,
        },
        {
          small: '食事制限',
          order: 6,
        },
        {
          small: '食事制限',
          order: 7,
        },
        {
          small: '食事制限',
          order: 8,
        },
      ],
    },
    {
      middle: 'ダイエット',
      order: 3,
      items: [
        {
          small: '食事制限',
          order: 1,
        },
        {
          small: '食事制限',
          order: 2,
        },
        {
          small: '食事制限',
          order: 3,
        },
        {
          small: '食事制限',
          order: 4,
        },
        {
          small: '食事制限',
          order: 5,
        },
        {
          small: '食事制限',
          order: 6,
        },
        {
          small: '食事制限',
          order: 7,
        },
        {
          small: '食事制限',
          order: 8,
        },
      ],
    },
    {
      middle: 'ダイエット',
      order: 4,
      items: [
        {
          small: '食事制限',
          order: 1,
        },
        {
          small: '食事制限',
          order: 2,
        },
        {
          small: '食事制限',
          order: 3,
        },
        {
          small: '食事制限',
          order: 4,
        },
        {
          small: '食事制限',
          order: 5,
        },
        {
          small: '食事制限',
          order: 6,
        },
        {
          small: '食事制限',
          order: 7,
        },
        {
          small: '食事制限',
          order: 8,
        },
      ],
    },
    {
      middle: 'ダイエット',
      order: 5,
      items: [
        {
          small: '食事制限',
          order: 1,
        },
        {
          small: '食事制限',
          order: 2,
        },
        {
          small: '食事制限',
          order: 3,
        },
        {
          small: '食事制限',
          order: 4,
        },
        {
          small: '食事制限',
          order: 5,
        },
        {
          small: '食事制限',
          order: 6,
        },
        {
          small: '食事制限',
          order: 7,
        },
        {
          small: '食事制限',
          order: 8,
        },
      ],
    },
    {
      middle: 'ダイエット',
      order: 6,
      items: [
        {
          small: '食事制限',
          order: 1,
        },
        {
          small: '食事制限',
          order: 2,
        },
        {
          small: '食事制限',
          order: 3,
        },
        {
          small: '食事制限',
          order: 4,
        },
        {
          small: '食事制限',
          order: 5,
        },
        {
          small: '食事制限',
          order: 6,
        },
        {
          small: '食事制限',
          order: 7,
        },
        {
          small: '食事制限',
          order: 8,
        },
      ],
    },
    {
      middle: 'ダイエット',
      order: 7,
      items: [
        {
          small: '食事制限',
          order: 1,
        },
        {
          small: '食事制限',
          order: 2,
        },
        {
          small: '食事制限',
          order: 3,
        },
        {
          small: '食事制限',
          order: 4,
        },
        {
          small: '食事制限',
          order: 5,
        },
        {
          small: '食事制限',
          order: 6,
        },
        {
          small: '食事制限',
          order: 7,
        },
        {
          small: '食事制限',
          order: 8,
        },
      ],
    },
    {
      middle: 'ダイエット',
      order: 8,
      items: [
        {
          small: '食事制限',
          order: 1,
        },
        {
          small: '食事制限',
          order: 2,
        },
        {
          small: '食事制限',
          order: 3,
        },
        {
          small: '食事制限',
          order: 4,
        },
        {
          small: '食事制限',
          order: 5,
        },
        {
          small: '食事制限',
          order: 6,
        },
        {
          small: '食事制限',
          order: 7,
        },
        {
          small: '食事制限',
          order: 8,
        },
      ],
    },
  ],
};

export const Cells: React.FC<{
  cellsType?: string;
  middle: string;
  order: number;
  items: {
    small: string;
    order: number;
  }[];
}> = ({ cellsType = 'default', items, middle, order }) => {
  const cellColor = cellsType === 'center' ? '#bdd8ea' : '#fff';
  const centerCellColor = cellsType === 'center' ? '#caba71' : '#bdd8ea';

  return (
    <S.Cells cellOrder={order}>
      {items.map((item) => (
        <S.Cell key={item.small} cellColor={cellColor} cellOrder={item.order}>
          <p>{item.small}</p>
        </S.Cell>
      ))}

      <S.Cell cellColor={centerCellColor} cellOrder={0}>
        <p>{middle}</p>
      </S.Cell>
    </S.Cells>
  );
};

export const OpenWindow64: React.FC = () => {
  const large = {
    middle: mbo.large,
    order: 0,
    items: mbo.items.map((i) => ({
      order: i.order,
      small: i.middle,
    })),
  };

  return (
    <S.Wrapper>
      {mbo.items.map((item) => (
        <Cells
          key={item.middle}
          middle={item.middle}
          order={item.order}
          items={item.items}
        />
      ))}

      <Cells
        cellsType="center"
        middle={mbo.large}
        order={0}
        items={large.items}
      />
    </S.Wrapper>
  );
};
