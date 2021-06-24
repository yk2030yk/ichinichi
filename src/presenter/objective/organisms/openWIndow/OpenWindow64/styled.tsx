import { styled } from '@/styles';

export const Wrapper = styled.div`
  width: 660px;
  height: 660px;
  display: grid;
  grid-gap: 2px;
  grid-template-areas:
    'c8 c1 c2'
    'c7 c0 c3'
    'c6 c5 c4';
  background-color: #4d4d4d;
  border: solid 2px #999;
`;

export const Cells = styled.div<{ cellOrder: number }>`
  width: 100%;
  height: 100%;
  display: grid;
  grid-area: ${({ cellOrder }) => `c${cellOrder}`};
  grid-template-areas:
    'cs8 cs1 cs2'
    'cs7 cs0 cs3'
    'cs6 cs5 cs4';
  grid-gap: 1px;
  background-color: #4d4d4d;
`;

export const Cell = styled.div<{ cellColor: string; cellOrder: number }>`
  width: 100%;
  height: 100%;
  background-color: ${({ cellColor = '#fff' }) => cellColor};
  font-size: 12px;
  color: #808080;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: ${({ cellOrder }) => `cs${cellOrder}`};

  & > p {
    transform: scale(0.7);
  }
`;
