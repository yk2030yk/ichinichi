import { styled } from '@/styles';
import {
  backgroundDarkCss,
  backgroundMainCss,
  fontMainColorCss,
} from '@/styles/mixins';

export const Wrapper = styled.div`
  ${({ theme }) => [backgroundMainCss(theme), fontMainColorCss(theme)]};
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50px 300px 1fr;
`;

export const LeftContent = styled.div`
  ${({ theme }) => backgroundDarkCss(theme)};
  width: 100%;
`;

export const MiddleContent = styled.div`
  ${({ theme }) => backgroundMainCss(theme)};
  width: 100%;
`;

export const RightContent = styled.div`
  ${({ theme }) => backgroundMainCss(theme)};
  width: 100%;
`;
