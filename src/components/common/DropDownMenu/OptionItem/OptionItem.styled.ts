import { breakPoint } from 'settings/breakpoints';
import styled from 'styled-components';

interface IProps {
  active?: string;
}

export const OptionItem = styled.li<IProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  list-style: none;
  width: 100%;

  padding-left: ${p => p.theme.space[9]}px;
  padding-right: ${p => p.theme.space[9]}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;

  font-size: ${p => p.theme.fontSizes.s};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 100%;

  color: ${p =>
    p.active === 'true' ? p.theme.colors.accent : p.theme.colors.dropDownItem};

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[0]}px;
  }

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 0;
    top: 100%;

    width: 100%;
    height: 1px;
    background-color: ${p => p.theme.colors.divider};
  }

  &:hover {
    color: ${p => p.theme.colors.hover};
  }

  box-sizing: border-box;

  cursor: pointer;
`;
