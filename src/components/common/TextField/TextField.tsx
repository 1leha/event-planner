import { SVG } from 'img';

import * as SC from './TextField.styled';
import { useField } from 'formik';

export const TextField = (props: any): JSX.Element => {
  const [field, meta, helpers] = useField(props);

  const { name } = field;
  const { error, touched } = meta;
  const { setValue } = helpers;
  const { disabled } = props;

  const isFieldError = error && touched;

  return (
    <SC.Wrapper>
      <SC.Label htmlFor={name} disabled={props.disabled}>
        {props.label}
      </SC.Label>
      <SC.InputWrapper error={String(isFieldError)} disabled={props.disabled}>
        <SC.Input {...field} {...props} autoComplete="off" />
        {
          <SC.IconButton
            type="button"
            error={String(isFieldError)}
            onClick={() => setValue('')}
            disabled={disabled}
          >
            <SVG.CrossIcon />
          </SC.IconButton>
        }
      </SC.InputWrapper>
      {isFieldError && <SC.Error>{error}</SC.Error>}
    </SC.Wrapper>
  );
};
