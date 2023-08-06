import { useMediaQuery } from '@yamada-ui/use-media-query';
import { Button } from 'components/common/Button';
import { Container } from 'components/common/Container';
import { filterSearchParam } from 'helpers/filterSearchParam';
import { useAppSearchParams } from 'helpers/hooks/useAppSearchParams';
import { useCategories } from 'helpers/hooks/useCategories';
import { IEvents } from 'helpers/interfaces/events';
import { useEffect } from 'react';
import {
  useGetCategoriesQuery,
  useGetEventsQuery,
} from 'redux/events/events.api';

export const Main = () => {
  const [tablet] = useMediaQuery(['(max-width: 768px)']);
  const initSearch = {
    page: '1',
    limit: tablet ? '6' : '8',
  };

  const { search, category, order, sortBy, searchParams, setSearchParams } =
    useAppSearchParams();

  const { data, isLoading, refetch } = useGetEventsQuery(
    searchParams.toString()
  );
  const { data: categoryCollection, isLoading: categoryIsLoading } =
    useGetCategoriesQuery();

  const categories = useCategories(categoryCollection);

  useEffect(() => {
    setSearchParams(
      filterSearchParam({
        search,
        category,
        page: initSearch.page,
        limit: initSearch.limit,
        order,
        sortBy,
      })
    );
  }, [
    category,
    initSearch.limit,
    initSearch.page,
    search,
    setSearchParams,
    order,
    sortBy,
  ]);

  // console.log('data', data);

  const clickHandler = () => {
    // setSearchParams(currentSearch);
    refetch();
  };

  return (
    <div>
      {isLoading && <div>LOADING</div>}
      <Container>
        <Button type="button" variant="seconary" onClick={clickHandler}>
          Set params
        </Button>

        <ul>
          {data?.map((event: IEvents) => {
            return <li key={event.id}>{event.title}</li>;
          })}
        </ul>
      </Container>
    </div>
  );
};
