/* eslint-disable @typescript-eslint/ban-types */
import { SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

type CssGenerators<T extends {}> = (
  | ((props: { theme: Theme } & T) => SerializedStyles)
  | (() => SerializedStyles)
  | SerializedStyles
)[];

type StyledElements = 'div' | 'input' | 'p' | 'button' | 'textarea';

export const mergeMixins = <T extends {}>(cssGenerators: CssGenerators<T>) => (
  props: { theme: Theme } & T
) =>
  cssGenerators.map((cssGenerator) =>
    typeof cssGenerator === 'function' ? cssGenerator(props) : cssGenerator
  );

export const mergeCssGenerator = <T extends {}>(
  cssGenerators: CssGenerators<T>
) => (props: { theme: Theme } & T) =>
  cssGenerators.map((cssGenerator) =>
    typeof cssGenerator === 'function' ? cssGenerator(props) : cssGenerator
  );

export const styledElement = (elementType: StyledElements) => <
  T extends {} = {}
>(
  cssGenerators: CssGenerators<T> = []
) => {
  return styled(elementType)<T>`
    ${mergeCssGenerator(cssGenerators)}
  `;
};

export const styledDiv = styledElement('div');
export const styledP = styledElement('p');
export const styledInput = styledElement('input');
export const styledTextArea = styledElement('textarea');
export const styledButton = styledElement('button');
