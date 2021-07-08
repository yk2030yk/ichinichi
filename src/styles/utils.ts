import { SerializedStyles, Theme } from '@emotion/react';
import { styled } from '.';

// eslint-disable-next-line @typescript-eslint/ban-types
type CssGenerator<T extends {}> =
  | ((props: { theme: Theme } & T) => SerializedStyles)
  | (() => SerializedStyles);

// eslint-disable-next-line @typescript-eslint/ban-types
type Styles<T extends {}> = (CssGenerator<T> | SerializedStyles)[];

type StyledElements = 'div' | 'input' | 'p' | 'button';

// eslint-disable-next-line @typescript-eslint/ban-types
export const mergeMixins = <T extends {}>(styles: Styles<T>) => (
  props: { theme: Theme } & T
) =>
  styles.map((style) => (typeof style === 'function' ? style(props) : style));

export const createStyledElement = <
  // eslint-disable-next-line @typescript-eslint/ban-types
  T extends {}
>(
  elementType: StyledElements,
  styles: Styles<T>
) => {
  return styled(elementType)<T>`
    ${mergeMixins(styles)}
  `;
};

export const styledElement = (elementType: StyledElements) => <
  // eslint-disable-next-line @typescript-eslint/ban-types
  T extends {} = {}
>(
  styles: Styles<T> = []
) => createStyledElement(elementType, styles);

export const styledDiv = styledElement('div');
export const styledP = styledElement('p');
export const styledInput = styledElement('input');
export const styledButton = styledElement('button');
