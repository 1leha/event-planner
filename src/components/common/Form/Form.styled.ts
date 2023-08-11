import { Form as FormikForm } from 'formik';
import { breakPoint } from 'settings/breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[7]}px;

  @media screen and (min-width: ${breakPoint.mobile}px) {
  }

  @media screen and (min-width: ${breakPoint.tablet}px) {
  }

  @media screen and (min-width: ${breakPoint.desktop}px) {
  }
`;

export const Title = styled.h2`
  /* gap: ${p => p.theme.space[7]}px; */
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[9]}px;

  font-size: ${p => p.theme.fontSizes.xxl};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: ${p => p.theme.lineHeights.normal};
  letter-spacing: ${p => p.theme.letterSpacings.normal};

  color: ${p => p.theme.colors.text};

  @media screen and (min-width: ${breakPoint.mobile}px) {
  }

  @media screen and (min-width: ${breakPoint.tablet}px) {
  }

  @media screen and (min-width: ${breakPoint.desktop}px) {
  }
`;

export const Form = styled(FormikForm)`
  background-color: ${p => p.theme.colors.white};
  padding-top: ${p => p.theme.space[13]}px;
  padding-bottom: ${p => p.theme.space[13]}px;
  padding-left: ${p => p.theme.space[6]}px;
  padding-right: ${p => p.theme.space[6]}px;

  border-radius: ${p => p.theme.radii.form};

  box-shadow: ${p => p.theme.shadows.standart};

  @media screen and (min-width: ${breakPoint.mobile}px) {
  }

  @media screen and (min-width: ${breakPoint.tablet}px) {
  }

  @media screen and (min-width: ${breakPoint.desktop}px) {
  }
`;
