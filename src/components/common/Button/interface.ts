import { ButtonHTMLAttributes } from 'react';

type TVariant = 'primary' | 'seconary';
type TSize = 'l' | 'm' | 's';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: any;
  size?: TSize;
  variant?: TVariant;
  width?: number;
  icon?: JSX.Element;
}
