import { css } from '@/styles';

export const width = (w: number) => css`
  width: ${w}px;
`;

export const maxWidth = (w: number) => css`
  max-width: ${w}px;
`;

export const minWidth = (w: number) => css`
  min-width: ${w}px;
`;

export const width100Per = () => css`
  width: 100%;
`;

export const height = (h: number) => css`
  height: ${h}px;
`;

export const maxHeight = (h: number) => css`
  max-height: ${h}px;
`;

export const minHeight = (h: number) => css`
  min-height: ${h}px;
`;

export const height100Per = () => css`
  height: 100%;
`;

export const height100Vh = () => css`
  height: 100vh;
`;
