import { styled } from 'styled-components';
import appBG from 'img/icons/bg.svg';

export const Main = styled.main`
  box-sizing: border-box;

  padding-top: ${p => p.theme.space[13]}px;
  padding-bottom: ${p => p.theme.space[13]}px;

  background-image: url(${appBG});
  background-repeat: no-repeat;
  background-size: cover;
`;
