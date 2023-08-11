import { styled } from 'styled-components';
import appBG from 'img/icons/bg.svg';

export const Main = styled.main`
  box-sizing: border-box;

  padding-top: ${p => p.theme.space[13]}px;
  padding-bottom: ${p => p.theme.space[13]}px;
  /* height: calc(100vh - 168px); */

  background-image: url(${appBG});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
    /* height: calc(100vh - 92px); */
  }
`;
