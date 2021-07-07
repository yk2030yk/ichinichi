import { Theme, css } from '@/styles';
import { mixins } from '@/styles/mixins';
import { styledDiv } from '@/styles/utils';

export const Themes = styledDiv([
  css`
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  `,
]);

const item = (
  theme: Theme,
  selected: boolean,
  backgroundColor: string,
  color: string
) => css`
  ${[
    mixins.middlePadding({ theme }),
    mixins.boxBorderRadius({ theme }),
    mixins.pointer(),
  ]}
  background-color: ${backgroundColor};
  color: ${color};
  border: solid 2px ${selected ? theme.palette.primary?.main : backgroundColor};
`;

export const LightThemeItem = styledDiv<{ selected: boolean }>([
  ({ theme, selected }) => item(theme, selected, '#fff', '#000'),
]);

export const DarkThemeItem = styledDiv<{ selected: boolean }>([
  ({ theme, selected }) => item(theme, selected, '#000', '#fff'),
]);
