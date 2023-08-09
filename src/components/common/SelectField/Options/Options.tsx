import { toUpperFirstLetter } from 'helpers/toUpperFirsLetter';
import React from 'react';

import * as SC from './Options.styled';

interface IProps {
  options: string[];
  isOpen: boolean;
  setValue: (option: string) => void;
  onClose: () => void;
}

export const Options = ({ options, isOpen, setValue, onClose }: IProps) => {
  const handlerSelectOption = (option: string) => {
    setValue(toUpperFirstLetter(option));
    onClose();
  };

  return (
    <SC.Wrapper isopen={String(isOpen)}>
      <SC.OptionList isopen={String(isOpen)}>
        {options.map(option => {
          return (
            <SC.OptionItem
              key={option}
              onClick={() => handlerSelectOption(option)}
            >
              {toUpperFirstLetter(option)}
            </SC.OptionItem>
          );
        })}
      </SC.OptionList>
    </SC.Wrapper>
  );
};
