import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const Wrapper = styled.div`
  ${({ theme }) => [
    mixins.backgroundColorMain(theme),
    mixins.fontMainColor(theme),
    mixins.width100Per(),
  ]};
  display: flex;
`;

export const LeftContent = styled.div`
  ${({ theme }) => mixins.backgroundColorDark(theme)};
  width: 50px;
`;

export const MiddleContent = styled.div`
  ${({ theme }) => [mixins.width100Per(), mixins.backgroundColorMain(theme)]};
`;

export const RightContent = styled.div`
  ${({ theme }) => mixins.backgroundColorMain(theme)};
  overflow-y: scroll;
  flex-grow: 2;
`;
