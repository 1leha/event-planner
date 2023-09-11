import { breakPoint } from 'settings/breakpoints';
import styled from 'styled-components';

interface IProps {
  active?: string;
}

export const Wrapper = styled.button<IProps>`
  position: relative;
  padding: ${p => p.theme.space[0]}px;

  background-color: ${p => p.theme.colors.white};

  border-radius: ${p => p.theme.radii.textField};

  box-shadow: ${p => p.theme.shadows.standart};
  color: ${p =>
    p.active === 'true' ? p.theme.colors.accent : p.theme.colors.text};

  border: none;
  outline: none;
  box-sizing: border-box;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: ${p => p.theme.space[6]}px;
  justify-content: flex-start;
  align-items: center;

  padding-left: ${p => p.theme.space[6]}px;
  padding-right: ${p => p.theme.space[6]}px;
  padding-top: ${p => p.theme.space[6]}px;
  padding-bottom: ${p => p.theme.space[6]}px;

  box-sizing: border-box;
`;

export const ItemName = styled.div`
  margin-top: 0;
  width: 100%;

  font-family: ${p => p.theme.fonts.primary};
  font-size: ${p => p.theme.fontSizes.m};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: normal;
  display: none;

  border: none;
  outline: none;

  cursor: pointer;
  box-sizing: border-box;

  @media screen and (min-width: ${breakPoint.tablet}px) {
    display: block;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;

  background-color: transparent;

  outline: none;
  border: none;

  transition: ${p => p.theme.transitions.standart};
`;
