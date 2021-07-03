import { input } from './input';
import { okButton, cancelButton } from './button';
import {
  fontLargeSize,
  fontMainSize,
  fontSmallSize,
  fontLightColor,
  fontPrimaryMainColor,
  fontMainColor,
  fontDarkColor,
  fontHoverColor,
  fontWrap,
  fontWeightBold,
  pointer,
  cursorEWResize,
} from './font';
import {
  boxBorder,
  box,
  boxBorderBottom,
  boxHover,
  boxBorderRadius,
  boxShadow,
} from './box';
import {
  backgroundColorDark,
  backgroundColorMain,
  backgroundColorLight,
  backgroundColorTransparent,
} from './color';
import {
  smallPadding,
  middlePadding,
  middleMarginTop,
  smallMarginTop,
  middleMarginLeft,
  smallMarginLeft,
  resetFirstItemMargin,
} from './space';
import { flexVerticalCenter } from './flex';
import { size, position } from './utils';
import {
  width,
  width100Per,
  maxWidth,
  minWidth,
  height,
  height100Per,
  height100Vh,
  maxHeight,
  minHeight,
} from './size';

export const mixins = {
  input,
  okButton,
  cancelButton,
  fontLargeSize,
  fontMainSize,
  fontSmallSize,
  fontLightColor,
  fontPrimaryMainColor,
  fontMainColor,
  fontDarkColor,
  fontHoverColor,
  fontWrap,
  fontWeightBold,

  pointer,
  cursorEWResize,

  boxBorder,
  box,
  boxBorderBottom,
  boxHover,
  boxBorderRadius,
  boxShadow,

  backgroundColorDark,
  backgroundColorMain,
  backgroundColorLight,
  backgroundColorTransparent,

  smallPadding,
  middlePadding,
  middleMarginTop,
  smallMarginTop,
  middleMarginLeft,
  smallMarginLeft,
  resetFirstItemMargin,

  flexVerticalCenter,

  size,
  position,

  width,
  width100Per,
  maxWidth,
  minWidth,
  height,
  height100Per,
  height100Vh,
  maxHeight,
  minHeight,
};
