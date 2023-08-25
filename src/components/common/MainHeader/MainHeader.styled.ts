import { breakPoint } from 'settings/breakpoints';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[9]}px;
  /* align-items: center; */

  margin-bottom: ${p => p.theme.space[13]}px;

  @media screen and (min-width: ${breakPoint.desktop}px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Title = styled.h2`
  margin: 0;

  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.xxxl};
  /* font-size: 32px; */
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: normal;
`;

export const ButtonsWrapper = styled.div`
  display: inline-flex;
  gap: ${p => p.theme.space[9]}px;
  justify-content: flex-end;
  align-items: center;
`;
