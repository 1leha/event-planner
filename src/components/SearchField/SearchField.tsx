import { ChangeEvent } from 'react';
import * as SC from './SearchField.styled';
import { useAppDispatch } from 'redux/store';
import { sellectFilter } from 'redux/filter/filter.sellectors';
import { useSelector } from 'react-redux';
import { inputFilterReducer } from 'redux/filter/filter.slice';

export const SearchField = () => {
  const dispatch = useAppDispatch();

  const filterValue = useSelector(sellectFilter);

  const filterHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(inputFilterReducer(e.target.value));
  };

  return (
    <SC.Wrapper>
      <SC.Icon />
      <SC.Input
        placeholder="Search by keywords"
        type="text"
        value={filterValue}
        onChange={filterHandler}
      />
    </SC.Wrapper>
  );
};
