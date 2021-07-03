import { SerializedStyles, Theme } from '@emotion/react';

type CssGenerator =
  | ((theme: Theme) => SerializedStyles)
  | (() => SerializedStyles);

export const mergeMixins = (
  generators: (CssGenerator | SerializedStyles)[]
) => ({ theme }: { theme: Theme }) =>
  generators.map((generator) =>
    typeof generator === 'function' ? generator(theme) : generator
  );
