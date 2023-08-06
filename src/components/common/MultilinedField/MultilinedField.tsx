import { SVG } from 'img';
import * as SC from './MultilinedField.styled';
import { useState } from 'react';
import { IMultilinedUI } from './interface';

export const MultilinedField = ({
  error,
  label,
  name,
  ...restProps
}: IMultilinedUI) => {
  const [value, setValue] = useState('');

  const resetFieldHandler = () => {
    setValue('');
  };

  return (
    <SC.Wrapper>
      <SC.Label htmlFor="description">{label}</SC.Label>
      <SC.TextAreaWrapper error={String(error)}>
        <SC.MultiLined
          name="description"
          id="description"
          cols={30}
          rows={4}
          value={value}
          onChange={e => setValue(e.target.value)}
          {...restProps}
        />
        {
          <SC.IconButton error={String(error)} onClick={resetFieldHandler}>
            <SVG.CrossIcon />
          </SC.IconButton>
        }
      </SC.TextAreaWrapper>
      {/* <Input label={label} error={String(error)} name={name} {...restProps} /> */}
      {error && <SC.Error>Invalid input</SC.Error>}
    </SC.Wrapper>
  );
};
