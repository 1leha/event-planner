import { breakPoint } from 'settings/breakpoints';
import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  padding-left: 10px;
  padding-right: 10px;

  min-width: 220px;

  /* background-color: aqua; */

  @media screen and (min-width: ${breakPoint.mobile}px) {
    max-width: 271px;

    padding-left: 0;
    padding-right: 0;
  }

  @media screen and (min-width: ${breakPoint.tablet}px) {
    max-width: 688px;

    padding-left: 0;
    padding-right: 0;
  }

  @media screen and (min-width: ${breakPoint.desktop}px) {
    max-width: 1280px;

    padding-left: 0;
    padding-right: 0;
  }
`;
