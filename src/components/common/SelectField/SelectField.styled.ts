import styled from 'styled-components';
import { IIconButtonUI, IInputUI } from 'helpers/interfaces/inputs';

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

  cursor: ${p => (p.readOnly ? 'pointer' : 'auto')};
`;

export const IconButton = styled.button<IIconButtonUI>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;

  color: ${p =>
    p.error === 'true' ? p.theme.colors.error : p.theme.colors.accent};
  background-color: transparent;

  transform: rotateZ(${p => (p.isopen === 'true' ? '180deg' : '0')});

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

  height: 56px;

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

  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  position: relative;
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
