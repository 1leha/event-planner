import { breakPoint } from 'settings/breakpoints';
import { styled } from 'styled-components';

export const Title = styled.div`
  margin-bottom: ${p => p.theme.space[9]}px;

  color: ${p => p.theme.colors.text};
  font-family: ${p => p.theme.fonts.primary};
  font-size: ${p => p.theme.fontSizes.xl};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: normal;

  @media screen and (min-width: ${breakPoint.tablet}px) {
  }

  @media screen and (min-width: ${breakPoint.desktop}px) {
  }
`;
