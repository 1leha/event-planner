import { useMediaQuery } from '@yamada-ui/use-media-query';
import { Button } from 'components/common/Button';
import { Container } from 'components/common/Container';
import { useAppSearchParams } from 'helpers/hooks/useAppSearchParams';
import { IEvents } from 'helpers/interfaces/events';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetEventsQuery } from 'redux/events/events.api';

export const Main = () => {
  const [tablet] = useMediaQuery(['(max-width: 768px)']);
  const initSearch = {
    page: '1',
    limit: tablet ? '10' : '8',
    order: 'asc',
    sortBy: 'title',
  };

  const {
    search,
    category,
    page,
    limit,
    order,
    sortBy,
    searchParams,
    setSearchParams,
  } = useAppSearchParams();

  const { data, isLoading, refetch } = useGetEventsQuery(
    searchParams.toString()
  );

  useEffect(() => {
    setSearchParams({
      search,
      page: initSearch.page,
      limit: initSearch.limit,
      order: initSearch.order,
      sortBy: initSearch.sortBy,
    });
  }, [
    category,
    initSearch.limit,
    initSearch.page,
    search,
    setSearchParams,
    order,
    initSearch.order,
    initSearch.sortBy,
  ]);

  console.log('data', data);

  const clickHandler = () => {
    const currentSearch = {
      title: '',
      sortBy: 'priority',
      order: 'desc',
    };
    // setSearchParams(currentSearch);
    refetch();
  };

  return (
    <div>
      {isLoading && <div>LOADING</div>}
      <Container>
        <button onClick={clickHandler}>klik me</button>
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
