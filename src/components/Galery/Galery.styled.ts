import { breakPoint } from 'settings/breakpoints';
import { styled } from 'styled-components';

export const GaleryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* @media screen and (max-width: ${breakPoint.mobile}px) {
  } */

  @media screen and (min-width: ${breakPoint.tablet}px) {
  }

  @media screen and (min-width: ${breakPoint.desktop}px) {
  }
`;

export const Card = styled.div`
  background-color: red;
  width: 300px;
  /* @media screen and (max-width: ${breakPoint.mobile}px) {
  } */

  @media screen and (min-width: ${breakPoint.tablet}px) {
  }

  @media screen and (min-width: ${breakPoint.desktop}px) {
  }
`;
