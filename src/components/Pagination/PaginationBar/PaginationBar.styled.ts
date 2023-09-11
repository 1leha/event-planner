import { SVG } from 'img';
import Pagination from 'rc-pagination';
import { breakPoint } from 'settings/breakpoints';
import { styled } from 'styled-components';

interface IProps {
  isactive?: string;
}

export const PaginationWrapper = styled.div`
  text-align: center;

  @media screen and (min-width: ${breakPoint.desktop}px) {
    text-align: right;
  }
`;

export const PaginationBar = styled(Pagination)`
  padding: ${p => p.theme.space[4]}px;
  width: 100%;

  display: inline-flex;
  gap: 0px;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  background-color: ${p => p.theme.colors.white};

  border-radius: ${p => p.theme.radii.textField};

  list-style: none;

  box-shadow: ${p => p.theme.shadows.standart};

  & > li {
    &.rc-pagination-options {
      display: none;
    }
  }

  box-sizing: border-box;

  @media screen and (min-width: ${breakPoint.desktop}px) {
    width: 588px;
  }
`;

export const Button = styled.button<IProps>`
  width: 100%;
  height: ${p => p.theme.space[13]}px;
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${p =>
    p.isactive === 'true' ? p.theme.colors.accent : p.theme.colors.paggination};
  background-color: ${p => p.theme.colors.white};

  text-align: center;
  font-family: ${p => p.theme.fonts.primary};
  font-size: ${p => p.theme.fontSizes.m};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.extraBold};
  line-height: normal;

  outline: none;
  border: none;

  transition: ${p => p.theme.transitions.standart};

  &:hover {
    color: ${p => p.theme.colors.accent};
  }

  @media screen and (min-width: ${breakPoint.tablet}px) {
    width: ${p => p.theme.space[16]}px;
    height: ${p => p.theme.space[16]}px;
  }
`;

export const LeftArrow = styled(SVG.CevronPagginationIcon)`
  transform: rotateZ(180deg);
`;
export const RightArrow = styled(SVG.CevronPagginationIcon)`
  transform: rotateZ(0deg);
`;
