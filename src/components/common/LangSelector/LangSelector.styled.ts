import styled from 'styled-components';
import { IIconButtonUI, IInputUI } from 'helpers/interfaces/inputs';

export const Wrapper = styled.div`
  position: relative;
  width: 69px;

  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[2]}px;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;

  border-radius: ${p => p.theme.radii.textField};

  background-color: ${p => p.theme.colors.white};

  box-shadow: ${p => p.theme.shadows.standart};

  box-sizing: border-box;
  cursor: pointer;
`;

export const InputWrapper = styled.div<IInputUI>`
  display: flex;
  gap: ${p => p.theme.space[2]}px;
  justify-content: space-between;
  align-items: center;

  height: 24px;

  color: ${p => p.theme.colors.text};

  box-sizing: border-box;

  transition: ${p => p.theme.transitions.standart};

  &:hover {
    color: ${p => p.theme.colors.hover};
  }
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 0;

  color: inherit;

  font-family: ${p => p.theme.fonts.primary};
  font-size: ${p => p.theme.fontSizes.m};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.normal};
  letter-spacing: ${p => p.theme.letterSpacings.label};

  border: none;
  outline: none;

  cursor: pointer;
  transition: ${p => p.theme.transitions.standart};
`;

export const IconButton = styled.button<IIconButtonUI>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;

  color: inherit;
  background-color: transparent;
  transition: ${p => p.theme.transitions.standart};

  transform: rotateZ(${p => (p.isopen === 'true' ? '180deg' : '0')});

  outline: none;
  border: none;

  border-radius: ${p => p.theme.radii.round};

  /* &:hover {
    color: ${p => p.theme.colors.hover};
  } */
`;
