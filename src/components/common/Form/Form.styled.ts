import { breakPoint } from 'settings/breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[6]}px;

  @media screen and (min-width: ${breakPoint.mobile}px) {
  }

  @media screen and (min-width: ${breakPoint.tablet}px) {
  }

  @media screen and (min-width: ${breakPoint.desktop}px) {
  }
`;
