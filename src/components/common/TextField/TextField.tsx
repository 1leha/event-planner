import { Input } from '../Input';
import { IInputUI } from '../Input/interface';
import * as SC from './TextField.styled';

export const TextField = ({ error, label, name, ...restProps }: IInputUI) => {
  return (
    <SC.Wrapper>
      <Input label={label} error={String(error)} name={name} {...restProps} />
      {error && <SC.Error>Invalid input</SC.Error>}
    </SC.Wrapper>
  );
};
