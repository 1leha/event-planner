import { toUpperFirstLetter } from 'helpers/toUpperFirsLetter';
import { useEffect, useRef, useState } from 'react';

import * as SC from './Options.styled';

interface IProps {
  options: string[] | [];
  isOpen: boolean;
  setValue: (option: string) => void;
  onClose: () => void;
}

export const Options = ({ options, isOpen, setValue, onClose }: IProps) => {
  const handlerSelectOption = (option: string) => {
    setValue(toUpperFirstLetter(option));
    setOptionIsOpened(false);

    onClose();
  };
  const optionWindow = useRef(null);

  const [optionIsOpened, setOptionIsOpened] = useState(false);

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
    <SC.Wrapper isopen={String(isOpen)} ref={optionWindow}>
      <SC.OptionList isopen={String(isOpen)}>
        {options.map(option => {
          return (
            <SC.OptionItem
              key={option}
              onClick={() => handlerSelectOption(String(option))}
            >
              {toUpperFirstLetter(option)}
            </SC.OptionItem>
          );
        })}
      </SC.OptionList>
    </SC.Wrapper>
  );
};
