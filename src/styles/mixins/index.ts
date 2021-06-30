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

  boxBorder,
  box,
  boxBorderBottom,
  boxHover,
  boxBorderRadius,
  boxShadow,

  backgroundColorDark,
  backgroundColorMain,
  backgroundColorLight,

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
};
