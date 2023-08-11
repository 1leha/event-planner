import { SVG } from 'img';

import * as SC from './LangSelector.styled';
import { useState } from 'react';
import { Options } from './Options';
import { ILangUI } from 'helpers/interfaces/inputs';
import { toUpperFirstLetter } from 'helpers/toUpperFirsLetter';

export const LangSelector = ({ options, ...props }: ILangUI): JSX.Element => {
  const defaultValue = toUpperFirstLetter(options[0]);

  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<string>(defaultValue);

  const handlerToggleOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SC.Wrapper onClick={handlerToggleOptions}>
      <SC.InputWrapper>
        <SC.Input {...props} value={value} />
        {
          <SC.IconButton isopen={String(isOpen)} onClick={handlerToggleOptions}>
            <SVG.CevronTextFieldIcon />
          </SC.IconButton>
        }
      </SC.InputWrapper>
      {isOpen && (
        <Options
          options={options}
          isOpen={isOpen}
          setValue={setValue}
          onClose={handlerToggleOptions}
        />
      )}
    </SC.Wrapper>
  );
};
