// import { breakPoint } from 'settings/breakpoints';
import styled from 'styled-components';
import { IInputUI } from './interface';

export const Wrapper = styled.div<IInputUI>`
  display: flex;
  gap: ${p => p.theme.space[5]}px;
  justify-content: space-between;
  align-items: center;

  margin-bottom: ${p => p.theme.space[2]}px;

  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  padding-top: ${p => p.theme.space[6]}px;
  padding-bottom: ${p => p.theme.space[6]}px;

  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.textField};

  border-color: ${p =>
    p.error === 'true' ? p.theme.colors.error : p.theme.colors.accent};

  background-color: ${p => p.theme.colors.white};
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 0;

  color: ${p => p.theme.colors.text};

  font-family: ${p => p.theme.fonts.primary};
  font-size: ${p => p.theme.fontSizes.m};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.textField};
  letter-spacing: ${p => p.theme.letterSpacings.label};

  border: none;
  outline: none;
`;

export const IconButton = styled.button<IInputUI>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;

  color: ${p =>
    p.error === 'true' ? p.theme.colors.error : p.theme.colors.accent};
  background-color: transparent;

  outline: none;
  border: none;

  transition: ${p => p.theme.transitions.standart};

  border-radius: ${p => p.theme.radii.round};

  &:hover {
    background-color: ${p => p.theme.colors.iconHover};
  }
`;
