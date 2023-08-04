import { styled } from 'styled-components';
import appBG from 'img/icons/bg.svg';

export const Main = styled.main`
  box-sizing: border-box;

  height: calc(100vh - 168px);

  background-image: url(${appBG});
  background-repeat: no-repeat;
  background-size: cover;
`;
