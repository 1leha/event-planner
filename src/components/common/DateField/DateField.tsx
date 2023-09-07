import { useEffect } from 'react';
import * as SC from './DateField.styled';
import { useField } from 'formik';
import { useDateTime } from 'helpers/hooks/useDateTime';

export const DateField = (props: any): JSX.Element => {
  const [field, meta, helpers] = useField(props);
  const { currentDate } = useDateTime();

  const { name } = field;
  const { error, touched, value } = meta;
  const { setValue } = helpers;

  useEffect(() => {
    if (!touched) {
      setValue(value ?? currentDate);
    }
  }, [currentDate, setValue, touched, value]);

  const isFieldError = !value || (error && touched);

  return (
    <SC.Wrapper>
      <SC.Label htmlFor={name}>{props.label}</SC.Label>
      <SC.InputWrapper error={String(isFieldError)}>
        <SC.Input {...field} {...props} type="date" />
      </SC.InputWrapper>
      {isFieldError && <SC.Error>{error}</SC.Error>}
    </SC.Wrapper>
  );
};
