import { InputHTMLAttributes } from 'react';

export interface IMultilinedUI
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  rightIcon?: JSX.Element;
  error?: boolean | string;
  label?: string;
  name?: string;
}
