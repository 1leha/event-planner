import { SVG } from 'img';

import * as SC from './TextField.styled';
import { useField } from 'formik';

export const TextField = (props: any): JSX.Element => {
  const [field, meta, helpers] = useField(props);

  const { name } = field;
  const { error, touched } = meta;
  const { setValue } = helpers;

  const isFieldError = error && touched;

  return (
    <SC.Wrapper>
      <SC.Label htmlFor={name}>{props.label}</SC.Label>
      <SC.InputWrapper error={String(isFieldError)}>
        <SC.Input {...field} {...props} />
        {
          <SC.IconButton
            error={String(isFieldError)}
            onClick={() => setValue('')}
          >
            <SVG.CrossIcon />
          </SC.IconButton>
        }
      </SC.InputWrapper>
      {error && <SC.Error>{error}</SC.Error>}
    </SC.Wrapper>
  );
};

// export const TextField = ({
//   error,
//   label,
//   name,
//   fieldReset,
//   helperText,
//   ...restProps
// }: IInputUI) => {
//   return (
//     <SC.Wrapper>
//       <SC.Label htmlFor={name}>{label}</SC.Label>
//       <Input
//         error={String(error)}
//         name={name}
//         fieldReset={fieldReset}
//         {...restProps}
//       />
//       {error && <SC.Error>{helperText}</SC.Error>}
//     </SC.Wrapper>
//   );
// };
