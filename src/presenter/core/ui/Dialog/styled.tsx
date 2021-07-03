import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';
import { mergeMixins } from '@/styles/utils';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mergeMixins([
    mixins.width100Per,
    mixins.height100Per,
    mixins.backgroundColorTransparent,
  ])}
`;

export const ConfirmMessage = styled.div`
  ${mergeMixins([mixins.fontLargeSize, mixins.fontLightColor])}
`;

export const ConfirmContent = styled.div`
  ${mergeMixins([
    mixins.boxShadow,
    mixins.backgroundColorMain,
    mixins.boxBorderRadius,
    mixins.boxShadow,
    mixins.middlePadding,
  ])}
  ${[mixins.width(400)]}
`;

export const ButtonArea = styled.div`
  ${mergeMixins([mixins.middleMarginTop])}
  display: flex;
  justify-content: flex-end;
`;

export const CancelButton = styled.button`
  ${mergeMixins([mixins.cancelButton])}
  ${[mixins.width(80)]}
`;

export const OkButton = styled.button`
  ${mergeMixins([mixins.okButton, mixins.smallMarginLeft])}
  ${[mixins.width(80)]}
`;
