import { SVG } from 'img';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 48px;
  width: 100%;

  display: flex;
  gap: ${p => p.theme.space[5]}px;
  justify-content: space-between;
  align-items: center;

  flex-grow: 1;

  margin-bottom: ${p => p.theme.space[0]}px;

  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;

  border-radius: ${p => p.theme.radii.searchField};

  background-color: ${p => p.theme.colors.white};

  box-shadow: ${p => p.theme.shadows.standart};

  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    width: 368px;
  }
  @media screen and (min-width: 1320px) {
    width: 410px;
  }
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 0;

  color: ${p => p.theme.colors.placeholder};

  font-family: ${p => p.theme.fonts.primary};
  font-size: ${p => p.theme.fontSizes.s};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.thin};
  line-height: ${p => p.theme.lineHeights.searchField};
  letter-spacing: ${p => p.theme.letterSpacings.label};

  border: none;
  outline: none;
`;

export const Icon = styled(SVG.SearchIcon)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;

  color: ${p => p.theme.colors.accent};
  background-color: transparent;

  outline: none;
  border: none;
`;
