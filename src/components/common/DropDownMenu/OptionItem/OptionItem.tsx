import { toUpperFirstLetter } from 'helpers/toUpperFirsLetter';
import * as SC from './OptionItem.styled';
import { IOption } from 'helpers/interfaces/options';

interface IProps {
  key: string | number;
  option: IOption;
  activeItem?: null | IOption;
  smallFirstLetterInOption?: boolean;
  onClick: (option: IOption) => void;
}

export const OptionItem = ({
  activeItem,
  option,
  smallFirstLetterInOption,
  onClick,
}: IProps) => {
  const isActiveItem = activeItem?.id === option.id;
  return (
    <SC.OptionItem
      onClick={() => onClick(option)}
      active={String(isActiveItem)}
    >
      {smallFirstLetterInOption ? option.name : toUpperFirstLetter(option.name)}
      {option.icon && option.icon}
    </SC.OptionItem>
  );
};
