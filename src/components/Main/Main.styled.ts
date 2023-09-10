import { styled } from 'styled-components';
import appBG from 'img/icons/bg.svg';
import { breakPoint } from 'settings/breakpoints';

export const Main = styled.main`
  box-sizing: border-box;

  min-height: calc(100vh - 168px);

  padding-top: ${p => p.theme.space[13]}px;
  padding-bottom: ${p => p.theme.space[13]}px;

  background-image: url(${appBG});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: ${breakPoint.tablet}px) {
    min-height: calc(100vh - 92px);
  }
`;
