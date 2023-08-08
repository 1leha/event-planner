import * as SC from './TimeField.styled';
import { useField } from 'formik';

export const TimeField = (props: any): JSX.Element => {
  const [field, meta] = useField(props);

  const { name } = field;
  const { error, touched } = meta;

  const isFieldError = error && touched;

  return (
    <SC.Wrapper>
      <SC.Label htmlFor={name}>{props.label}</SC.Label>
      <SC.InputWrapper error={String(isFieldError)}>
        <SC.Input {...field} {...props} type="time" />
      </SC.InputWrapper>
      {error && <SC.Error>{error}</SC.Error>}
    </SC.Wrapper>
  );
};
