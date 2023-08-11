import { InputHTMLAttributes } from 'react';

export interface IInputUI extends InputHTMLAttributes<HTMLInputElement> {
  rightIcon?: JSX.Element;
  error?: boolean | string;
  label?: string;
}

export interface ISelectUI extends InputHTMLAttributes<HTMLInputElement> {
  rightIcon?: JSX.Element;

  label?: string | undefined;
  error?: boolean | string;
  isopen?: boolean | string;
  setDefaultValue?: boolean;

  options: string[] | [];
  // [key: string]: any;
}

export interface ILangUI extends InputHTMLAttributes<HTMLInputElement> {
  isopen?: boolean | string;
  options: string[];
}

export interface IIconButtonUI extends InputHTMLAttributes<HTMLButtonElement> {
  error?: boolean | string;
  isopen?: boolean | string;

  // [key: string]: any;
}

export interface IMultilinedUI
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  rightIcon?: JSX.Element;
  error?: boolean | string;
  label?: string;
}
