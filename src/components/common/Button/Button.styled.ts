import { breakPoint } from 'settings/breakpoints';
import styled from 'styled-components';
import { IButton } from './interface';

export const Button = styled.button<IButton>`
  min-width: ${p => (p.size === 'l' && p.icon ? '56px' : '')}px;
  min-width: ${p => (p.width ? p.width + 'px' : '100%')};

  padding-top: ${p => {
    switch (p.size) {
      case 's':
        return p.theme.space[3];

      case 'm':
        return p.theme.space[4];

      default:
        return p.theme.space[6];
    }
  }}px;
  padding-bottom: ${p => {
    switch (p.size) {
      case 's':
        return p.theme.space[3];

      case 'm':
        return p.theme.space[4];

      default:
        return p.theme.space[6];
    }
  }}px;
  padding-left: ${p => {
    switch (p.size) {
      case 's':
        return p.theme.space[6];

      case 'm':
        return p.theme.space[8];

      default:
        return p.theme.space[6];
    }
  }}px;
  padding-right: ${p => {
    switch (p.size) {
      case 's':
        return p.theme.space[6];

      case 'm':
        return p.theme.space[8];

      default:
        return p.theme.space[6];
    }
  }}px;

  font-family: ${p => p.theme.fonts.primary};

  font-size: ${p => {
    switch (p.size) {
      case 's':
        return p.theme.fontSizes.xs;

      case 'm':
        return p.theme.fontSizes.s;

      default:
        return p.theme.fontSizes.m;
    }
  }};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => {
    switch (p.size) {
      case 's':
        return p.theme.lineHeights.smallButton;

      case 'm':
        return p.theme.lineHeights.middleButton;

      default:
        return p.theme.lineHeights.largeButton;
    }
  }};
  text-align: center;

  color: ${p =>
    p.variant === 'primary'
      ? p => p.theme.colors.white
      : p => p.theme.colors.accent};

  background-color: ${p =>
    p.variant === 'primary'
      ? p => p.theme.colors.accent
      : p => p.theme.colors.white};

  border-color: ${p => p.theme.colors.accent};
  border: ${p => p.theme.borders.normal};

  border-radius: ${p => {
    switch (p.size) {
      case 's':
        return p.theme.radii.buttonSmall;

      default:
        return p.theme.radii.button;
    }
  }};

  outline: none;

  @media screen and (max-width: ${breakPoint.mobile}px) {
    min-width: ${p => (p.size === 'l' && p.icon ? '58px' : '')};
  }

  @media screen and (min-width: ${breakPoint.mobile}px) {
    min-width: ${p => (p.size === 'l' && p.icon ? '58px' : '')};
  }

  @media screen and (min-width: ${breakPoint.tablet}px) {
    min-width: ${p => (p.size === 'l' || !p.size ? '193px' : '')};
  }

  transition: ${p => p.theme.transitions.standart};

  &:hover {
    background-color: ${p =>
      p.variant === 'primary'
        ? p => p.theme.colors.hover
        : p => p.theme.colors.hoverSecondary};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: ${p => p.theme.space[6]}px;
  justify-content: center;
  align-items: stretch;
  height: 22px;
`;

export const Icon = styled.div<IButton>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;

  color: ${p => p.variant === 'primary' && p.theme.colors.white};
  background-color: transparent;

  outline: none;
  border: none;
`;
