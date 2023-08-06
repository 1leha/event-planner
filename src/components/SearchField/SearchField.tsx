import { useState } from 'react';
import * as SC from './SearchField.styled';

export const SearchField = () => {
  const [value, setValue] = useState('');

  //   const resetFieldHandler = () => {
  //     setValue('');
  //   };

  return (
    <SC.Wrapper>
      <SC.Icon />
      <SC.Input
        placeholder="Search by keywords"
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </SC.Wrapper>
  );
};
