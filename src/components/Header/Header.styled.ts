import { styled } from 'styled-components';

export const Header = styled.header`
  background-color: ${p => p.theme.colors.bg};
  height: 168px;
  padding-top: ${p => p.theme.space[9]}px;
  padding-bottom: ${p => p.theme.space[9]}px;

  @media screen and (min-width: 320px) {
    padding-left: ${p => p.theme.space[9]}px;
    padding-right: ${p => p.theme.space[9]}px;
    padding-top: ${p => p.theme.space[9]}px;
    padding-bottom: ${p => p.theme.space[9]}px;
  }

  @media screen and (min-width: 768px) {
    height: 92px;

    padding-left: ${p => p.theme.space[8]}px;
    padding-right: ${p => p.theme.space[8]}px;
    padding-top: ${p => p.theme.space[8]}px;
    padding-bottom: ${p => p.theme.space[8]}px;
  }

  border-bottom: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.accent};

  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  background-color: tomato;
`;
