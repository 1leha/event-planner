import { ChangeEvent, useMemo } from 'react';
import * as SC from './SearchField.styled';
import { useAppDispatch } from 'redux/store';
import { inputFilterReducer } from 'redux/filter/filter.slice';
import { debounce } from 'ts-debounce';
import { useAppSearchParams } from 'helpers/hooks/useAppSearchParams';

export const SearchField = () => {
  const dispatch = useAppDispatch();

  const { search, category, page, limit, order, sortBy, setSearchParams } =
    useAppSearchParams();

  const handleSearchParamsChange = useMemo(() => {
    return debounce(
      (value: string) =>
        setSearchParams({
          category,
          page,
          limit,
          order,
          sortBy,
          search: value,
        }),
      300,
      { isImmediate: true, maxWait: 500 }
    );
  }, [setSearchParams, category, page, limit, order, sortBy]);

  const filterHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(inputFilterReducer(e.target.value));
    handleSearchParamsChange(e.target.value.replace(/\\/g, '\\\\').trim());
  };

  return (
    <SC.Wrapper>
      <SC.Icon />
      <SC.Input
        placeholder="Search by keywords"
        type="text"
        value={search}
        onChange={filterHandler}
      />
    </SC.Wrapper>
  );
};
