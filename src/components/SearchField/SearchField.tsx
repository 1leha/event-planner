import { ChangeEvent, useMemo } from 'react';
import * as SC from './SearchField.styled';
import { useAppDispatch } from 'redux/store';
import { inputFilterReducer } from 'redux/filter/filter.slice';
import { debounce } from 'ts-debounce';
import { useAppSearchParams } from 'helpers/hooks/useAppSearchParams';
import { filterSearchParam } from 'helpers/filterSearchParam';

export const SearchField = () => {
  const dispatch = useAppDispatch();

  const { search, category, page, limit, order, sortBy, setSearchParams } =
    useAppSearchParams();

  const handleSearchParamsChange = useMemo(() => {
    return debounce(
      (value: string) => {
        return setSearchParams(
          filterSearchParam({
            category,
            page,
            limit,
            order,
            sortBy,
            search: value,
          })
        );
      },
      500,
      { isImmediate: true, maxWait: 500 }
    );
  }, [setSearchParams, category, page, limit, order, sortBy]);

  const filterHandler = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearchParamsChange(e.target.value.trim());
    dispatch(inputFilterReducer(e.target.value));
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
