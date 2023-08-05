type TVariant = 'primary' | 'seconary';
type TSize = 'l' | 'm' | 's';

export interface IButton {
  children: any;
  size?: TSize;
  variant?: TVariant;
  fullWidth?: boolean;
  icon?: JSX.Element;
}
