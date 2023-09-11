import { SVG } from 'img';
import * as SC from './MultilinedField.styled';
import { useField } from 'formik';

export const MultilinedField = (props: any): JSX.Element => {
  const [field, meta, helpers] = useField(props);

  const { error } = meta;
  const { setValue } = helpers;

  return (
    <SC.Wrapper>
      <SC.Label>{props.label}</SC.Label>
      <SC.TextAreaWrapper error={String(!!error)}>
        <SC.MultiLined {...field} {...props} cols={30} rows={4} />

        {
          <SC.IconButton error={String(!!error)} onClick={() => setValue('')}>
            <SVG.CrossIcon />
          </SC.IconButton>
        }
      </SC.TextAreaWrapper>
      {error && <SC.Error>{error}</SC.Error>}
    </SC.Wrapper>
  );
};
