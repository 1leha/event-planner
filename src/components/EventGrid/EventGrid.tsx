import { useMediaQuery } from '@yamada-ui/use-media-query';
import { EventCard } from 'components/EventCard';
import { Container } from 'components/common/Container';
import { filterSearchParam } from 'helpers/filterSearchParam';
import { useAppSearchParams } from 'helpers/hooks/useAppSearchParams';
// import { useCategories } from 'helpers/hooks/useCategories';
import { IEvents } from 'helpers/interfaces/events';
import { useEffect } from 'react';
import {
  //   useGetCategoriesQuery,
  useGetEventsQuery,
} from 'redux/events/events.api';
import * as SC from './EventGrid.styled';

export const EventGrid = () => {
  const [tablet] = useMediaQuery(['(max-width: 1320px)']);
  const initSearch = {
    page: '1',
    limit: tablet ? '6' : '8',
  };
  const { search, category, order, sortBy, searchParams, setSearchParams } =
    useAppSearchParams();

  const { data, isLoading, refetch } = useGetEventsQuery(
    searchParams.toString()
  );

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

  return (
    <Container>
      <SC.EventsGrid>
        {data?.map((event: IEvents) => {
          return <EventCard key={event.id} eventData={event} />;
        })}
      </SC.EventsGrid>
    </Container>
  );
};
