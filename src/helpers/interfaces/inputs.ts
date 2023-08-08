import { InputHTMLAttributes } from 'react';

export interface IInputUI extends InputHTMLAttributes<HTMLInputElement> {
  rightIcon?: JSX.Element;
  error?: boolean | string;
  multiline?: boolean;
  label?: string;
  name?: string;
  type?: string;
}

export interface IMultilinedUI
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  rightIcon?: JSX.Element;
  error?: boolean | string;
  label?: string;
  name?: string;
}
