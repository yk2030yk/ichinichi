import { css } from '@/styles';

export const size = ({
  w,
  h,
}: {
  w?: string | undefined | null;
  h?: string | undefined | null;
}) => css`
  ${w && `width: ${w};`};
  ${h && `height: ${h};`};
`;

export const position = ({
  t,
  b,
  l,
  r,
}: {
  t?: string | undefined | null;
  b?: string | undefined | null;
  l?: string | undefined | null;
  r?: string | undefined | null;
}) => css`
  ${t && `top: ${t};`};
  ${b && `bottom: ${b};`};
  ${l && `left: ${l};`};
  ${r && `right: ${r};`};
`;
