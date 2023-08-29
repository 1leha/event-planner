import * as SC from './DropDownMenu.styled';
import { useEffect, useState } from 'react';
import { Options } from './Options';
import { toUpperFirstLetter } from 'helpers/toUpperFirsLetter';
import { useAppSearchParams } from 'helpers/hooks/useAppSearchParams';
import { filterSearchParam } from 'helpers/filterSearchParam';

interface IOption {
  id: number;
  name: string;
  icon?: JSX.Element;
}

interface IProps {
  title: string;
  name: string;
  icon: JSX.Element;
  options: IOption[] | undefined;
  iconOnLeftIfMobile?: boolean;
  skipChangeTitle?: boolean | string;
  smallFirstLetterInOption?: boolean;
}

export const DropDownMenu = ({
  title,
  name,
  icon,
  options,
  iconOnLeftIfMobile,
  skipChangeTitle,
  smallFirstLetterInOption,
  ...props
}: IProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<null | IOption>(null);

  const { search, category, page, limit, order, sortBy, setSearchParams } =
    useAppSearchParams();

  const handlerToggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const resetCategory = () => setValue(null);

  useEffect(() => {
    setSearchParams(
      filterSearchParam({
        search,
        category,
        page,
        limit,
        order,
        sortBy,
        [name]: value?.name ? value?.name : '',
      })
    );
  }, [
    setSearchParams,
    value,
    name,
    search,
    category,
    page,
    limit,
    order,
    sortBy,
  ]);

  const dropDounMenuTitle = skipChangeTitle
    ? title
    : value?.name
    ? toUpperFirstLetter(value?.name)
    : title;

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
          onReset={resetCategory}
          iconOnLeftIfMobile={iconOnLeftIfMobile}
          activeItem={value}
          smallFirstLetterInOption={smallFirstLetterInOption}
        />
      )}
    </SC.Wrapper>
  );
};
