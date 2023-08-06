import styled from 'styled-components';
import { IInputUI } from '../Input/interface';

export const Error = styled.p<IInputUI>`
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[0]}px;
  margin-right: ${p => p.theme.space[7]}px;

  color: ${p => p.theme.colors.error};

  font-family: ${p => p.theme.fonts.primary};
  font-size: ${p => p.theme.fontSizes.xs};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.error};
  letter-spacing: ${p => p.theme.letterSpacings.label};
  text-align: right;
`;

export const Label = styled.label`
  margin-top: 0;
  margin-bottom: ${p => p.theme.space[3]}px;

  color: ${p => p.theme.colors.accent};

  font-family: ${p => p.theme.fonts.primary};
  font-size: ${p => p.theme.fontSizes.m};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.normal};
  letter-spacing: ${p => p.theme.letterSpacings.label};
`;

export const Wrapper = styled.div`
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;