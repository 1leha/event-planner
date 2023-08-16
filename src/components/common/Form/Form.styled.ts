import { Form as FormikForm } from 'formik';
import { breakPoint } from 'settings/breakpoints';
import styled from 'styled-components';
import { Button as FormButton } from '../Button';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${p => p.theme.space[13]}px;

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
    padding-left: ${p => p.theme.space[9]}px;
    padding-right: ${p => p.theme.space[9]}px;
  }

  @media screen and (min-width: ${breakPoint.desktop}px) {
    padding-left: ${p => p.theme.space[13]}px;
    padding-right: ${p => p.theme.space[13]}px;
    gap: ${p => p.theme.space[15]}px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[0]}px;
  flex-wrap: nowrap;

  flex-grow: 1;

  /* margin-bottom: ${p => p.theme.space[13]}px; */

  @media screen and (min-width: ${breakPoint.mobile}px) {
  }

  @media screen and (min-width: ${breakPoint.tablet}px) {
    flex-wrap: wrap;
    column-gap: ${p => p.theme.space[9]}px;

    height: 500px;
    /* height: 100%; */
  }

  @media screen and (min-width: ${breakPoint.desktop}px) {
    column-gap: ${p => p.theme.space[14]}px;

    height: 300px;
  }
`;

export const Title = styled.h2`
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[9]}px;

  font-size: ${p => p.theme.fontSizes.xxl};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: ${p => p.theme.lineHeights.normal};
  letter-spacing: ${p => p.theme.letterSpacings.normal};

  color: ${p => p.theme.colors.text};

  @media screen and (min-width: ${breakPoint.tablet}px) {
    font-size: ${p => p.theme.fontSizes.xxxl};
  }
`;

export const Button = styled(FormButton)`
  @media screen and (min-width: ${breakPoint.tablet}px) {
    align-self: flex-end;
  }
`;
