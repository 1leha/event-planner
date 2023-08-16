import styled from 'styled-components';
import arrowDown from 'img/icons/chevron-text-field_colored.svg';
import { IInputUI } from 'helpers/interfaces/inputs';
import { breakPoint } from 'settings/breakpoints';

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

  &::-webkit-calendar-picker-indicator {
    color: ${p => p.theme.colors.accent};
    background-image: url(${arrowDown});
    background-color: transparent;
    padding: 0;
    height: 24px;
    width: 24px;

    border-radius: ${p => p.theme.radii.round};

    transition: ${p => p.theme.transitions.standart};

    &:hover {
      background-color: ${p => p.theme.colors.hoverSecondary};
    }
  }
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
    background-color: ${p => p.theme.colors.hoverSecondary};
  }
`;

export const InputWrapper = styled.div<IInputUI>`
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
    p.error === 'true'
      ? p.theme.colors.error
      : p.disabled
      ? p.theme.colors.disabled
      : p.theme.colors.text};

  background-color: ${p => p.theme.colors.white};
`;

export const Wrapper = styled.div`
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  /* @media screen and (min-width: ${breakPoint.mobile}px) {
  } */

  @media screen and (min-width: ${breakPoint.tablet}px) {
    width: 308px;
  }

  @media screen and (min-width: ${breakPoint.desktop}px) {
    width: 372px;
  }
`;

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
