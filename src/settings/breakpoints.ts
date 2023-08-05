import { EBreakPoints } from 'helpers/enums/breakponts';

interface IBreakPoints {
  mobile: number;
  tablet: number;
  desktop: number;
}

export const breakPoint: IBreakPoints = {
  mobile: EBreakPoints.mobile,
  tablet: EBreakPoints.tablet,
  desktop: EBreakPoints.desktop,
};
