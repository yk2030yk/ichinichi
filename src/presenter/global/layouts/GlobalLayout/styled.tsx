import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const Wrapper = styled.div`
  ${({ theme }) => [
    mixins.backgroundColorMain(theme),
    mixins.fontMainColor(theme),
  ]};
  width: 100%;
  height: 100%;
  display: flex;
`;

export const LeftContent = styled.div`
  ${({ theme }) => mixins.backgroundColorDark(theme)};
  width: 50px;
`;

export const MiddleContent = styled.div`
  ${({ theme }) => mixins.backgroundColorMain(theme)};
  width: 100%;
`;

export const RightContent = styled.div`
  ${({ theme }) => mixins.backgroundColorMain(theme)};
  overflow-y: scroll;
`;
