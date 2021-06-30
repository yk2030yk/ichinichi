import { styled, Theme } from '@/styles';
import { SerializedStyles } from '@emotion/react';

type Generator =
  | ((theme: Theme) => SerializedStyles)
  | (() => SerializedStyles);

type Props = { [key: string]: string | number | boolean };

export const createStyledElement = <
  // eslint-disable-next-line @typescript-eslint/ban-types
  T extends Props = {}
>(
  elementType: 'div' | 'input' | 'p',
  cssGenerators: Generator[]
) => {
  return styled(elementType)<T>`
    ${({ theme }) => cssGenerators.map((g) => g(theme))}
  `;
};

export const createStyledElementFunc = (elementType: 'div' | 'input' | 'p') => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return <T extends Props = {}>(cssGenerators: Generator[]) =>
    createStyledElement<T>(elementType, cssGenerators);
};

export const createDiv = createStyledElementFunc('div');
export const createInput = createStyledElementFunc('input');
export const createP = createStyledElementFunc('p');
