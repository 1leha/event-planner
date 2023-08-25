import * as SC from './DropDownMenu.styled';
import { useState } from 'react';
import { Options } from './Options';
import { toUpperFirstLetter } from 'helpers/toUpperFirsLetter';

interface IOption {
  id: number;
  name: string;
  icon?: JSX.Element;
}

interface IProps {
  title: string;
  icon: JSX.Element;
  options: IOption[];
  iconOnLeftIfMobile?: boolean;
  skipChangeTitle?: boolean | string;
  smallFirstLetterInOption?: boolean;
}

export const DropDownMenu = ({
  title,
  icon,
  options,
  iconOnLeftIfMobile,
  skipChangeTitle,
  smallFirstLetterInOption,
  ...props
}: IProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<null | IOption>(null);

  const handlerToggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const dropDounMenuTitle = skipChangeTitle
    ? title
    : value?.name
    ? toUpperFirstLetter(value?.name)
    : title;

  console.log('value', value);

  return (
    <SC.Wrapper onClick={handlerToggleOptions} active={String(!!value?.name)}>
      <SC.InputWrapper>
        <SC.ItemName {...props}>{dropDounMenuTitle}</SC.ItemName>
        {<SC.Icon>{icon}</SC.Icon>}
      </SC.InputWrapper>
      {isOpen && (
        <Options
          icon={icon}
          title={value?.name ?? title}
          options={options}
          isOpen={isOpen}
          setValue={setValue}
          onClose={handlerToggleOptions}
          iconOnLeftIfMobile={iconOnLeftIfMobile}
          activeItem={value}
          smallFirstLetterInOption={smallFirstLetterInOption}
        />
      )}
    </SC.Wrapper>
  );
};
