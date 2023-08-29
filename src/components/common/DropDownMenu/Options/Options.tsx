import { toUpperFirstLetter } from 'helpers/toUpperFirsLetter';
import { useEffect, useRef, useState } from 'react';

import * as SC from './Options.styled';
import { OptionsHeader } from '../OptionsHeader';
import { useMediaQuery } from '@yamada-ui/use-media-query';
import { OptionItem } from '../OptionItem';
import { IOption } from 'helpers/interfaces/options';

interface IProps {
  title: string;
  icon: JSX.Element;
  options: IOption[] | undefined;
  isOpen: boolean;
  iconOnLeftIfMobile?: boolean;
  activeItem: IOption | null;
  smallFirstLetterInOption?: boolean;

  setValue: (option: IOption) => void;
  onClose: () => void;
  onReset: () => void;
}

export const Options = ({
  title,
  icon,
  iconOnLeftIfMobile,
  options,
  isOpen,
  activeItem,
  smallFirstLetterInOption,
  setValue,
  onClose,
  onReset,
}: IProps) => {
  const optionWindow = useRef(null);

  const [optionIsOpened, setOptionIsOpened] = useState(false);

  const [mobile] = useMediaQuery(['(max-width: 767px)']);
  const isLeftConer = String(!!mobile && iconOnLeftIfMobile);

  const handlerSelectOption = (option: IOption) => {
    // console.log('handlerSelectOption -- option', option);

    setValue(option);
    setOptionIsOpened(false);

    onClose();
  };

  useEffect(() => {
    const closeOptions = (evt: Event): void => {
      if (evt instanceof KeyboardEvent && evt.code === 'Escape') {
        onClose();
        setOptionIsOpened(false);
      }

      if (optionIsOpened && optionWindow.current !== evt.target) {
        onClose();
      }

      setOptionIsOpened(true);
    };

    window.addEventListener('keydown', closeOptions);
    window.addEventListener('click', closeOptions);

    return () => {
      window.removeEventListener('keydown', closeOptions);
      window.removeEventListener('click', closeOptions);
    };
  }, [onClose, optionIsOpened]);

  return (
    <SC.Wrapper
      isopen={String(isOpen)}
      ref={optionWindow}
      isleftconer={isLeftConer}
    >
      <OptionsHeader
        title={toUpperFirstLetter(title)}
        icon={icon}
        iconOnLeftIfMobile={iconOnLeftIfMobile}
        isSelected={!!activeItem}
      />

      <SC.OptionList isopen={String(isOpen)}>
        <OptionItem
          key="all"
          option={{ id: 99999, name: 'all' }}
          activeItem={activeItem}
          onClick={onReset}
          smallFirstLetterInOption={smallFirstLetterInOption}
        />
        {options?.map(option => {
          return (
            <OptionItem
              key={option.id}
              option={option}
              activeItem={activeItem}
              onClick={handlerSelectOption}
              smallFirstLetterInOption={smallFirstLetterInOption}
            />
          );
        })}
      </SC.OptionList>
    </SC.Wrapper>
  );
};
