import { SVG } from 'img';

import * as SC from './SelectField.styled';
import { useField } from 'formik';
import { useEffect, useState } from 'react';
import { Options } from './Options';
import { ISelectUI } from 'helpers/interfaces/inputs';

export const SelectField = ({
  label,
  options,
  ...props
}: ISelectUI): JSX.Element => {
  const [field, meta, helpers] = useField(props as any);
  const [isOpen, setIsOpen] = useState(false);
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  const { name } = field;
  const { error, touched } = meta;
  const { setValue, setTouched } = helpers;

  useEffect(() => {
    if (isOpen) {
      setTouched(false);
    }
  }, [isOpen, isOptionSelected, setTouched, touched]);

  // console.log('component touched', touched);

  const isFieldError = error && touched;

  const handlerToggleOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SC.Wrapper>
      <SC.Label htmlFor={name}>{label}</SC.Label>
      <SC.InputWrapper error={String(isFieldError)}>
        <SC.Input
          {...field}
          {...props}
          readOnly
          onClick={handlerToggleOptions}
        />
        {
          <SC.IconButton
            isopen={String(isOpen)}
            error={String(isFieldError)}
            onClick={handlerToggleOptions}
          >
            <SVG.CevronTextFieldIcon />
          </SC.IconButton>
        }
      </SC.InputWrapper>
      {!isOpen && isFieldError && <SC.Error>{error}</SC.Error>}
      {isOpen && (
        <Options
          options={options}
          isOpen={isOpen}
          setValue={setValue}
          onClose={handlerToggleOptions}
        />
      )}
    </SC.Wrapper>
  );
};
