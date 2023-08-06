import { useState } from 'react';
import { SVG } from 'img';
import * as SC from './Input.styled';
import { IInputUI } from './interface';

export const Input = ({
  multiline,
  error,
  label,
  name,
  ...restProps
}: IInputUI) => {
  const [value, setValue] = useState('');

  const resetFieldHandler = () => {
    setValue('');
  };

  return (
    <>
      <SC.Label htmlFor={name}>{label}</SC.Label>
      <SC.Wrapper error={error}>
        <SC.Input
          autoComplete="off"
          value={value}
          onChange={e => setValue(e.target.value)}
          {...restProps}
        />
        {
          <SC.IconButton error={error} onClick={resetFieldHandler}>
            <SVG.CrossIcon />
          </SC.IconButton>
        }
      </SC.Wrapper>
    </>
  );
};
