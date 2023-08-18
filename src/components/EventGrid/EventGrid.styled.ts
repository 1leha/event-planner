import { breakPoint } from 'settings/breakpoints';
import { styled } from 'styled-components';
export const EventsGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: ${p => p.theme.space[9]}px;
  column-gap: 0;

  padding: 0;
  margin: 0;

  /* @media screen and (max-width: ${breakPoint.mobile}px) {
  } */

  @media screen and (min-width: ${breakPoint.tablet}px) {
    grid-template-columns: repeat(2, 1fr);

    column-gap: ${p => p.theme.space[9]}px;
  }

  @media screen and (min-width: ${breakPoint.desktop}px) {
    grid-template-columns: repeat(4, 1fr);
    row-gap: ${p => p.theme.space[13]}px;
  }
`;
