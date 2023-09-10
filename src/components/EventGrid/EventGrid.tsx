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
import { PaginationBar } from 'components/Pagination/PaginationBar';
import { breakPoint } from 'settings/breakpoints';
import { useTotalPages } from 'helpers/hooks/useTotalPages';

export const EventGrid = () => {
  const [tablet] = useMediaQuery([`(max-width: ${breakPoint.desktop}px)`]);

  const initSearch = {
    limit: tablet ? '6' : '8',
  };

  const {
    search,
    category,
    page,
    order,
    sortBy,
    searchParams,
    setSearchParams,
  } = useAppSearchParams();

  const { data, isLoading } = useGetEventsQuery(searchParams.toString());

  const { totalPages } = useTotalPages({
    category,
    search,
    itemsPerPage: Number(initSearch.limit),
  });

  const currentPage = totalPages < Number(page) ? totalPages : page;

  useEffect(() => {
    setSearchParams(
      filterSearchParam({
        search,
        category,
        page: currentPage,
        limit: initSearch.limit,
        order,
        sortBy,
      })
    );
  }, [
    category,
    initSearch.limit,
    search,
    setSearchParams,
    order,
    sortBy,
    page,
    currentPage,
  ]);

  return (
    <Container>
      <SC.EventsGrid>
        {data
          ?.map((event: IEvents) => {
            return <EventCard key={event.id} eventData={event} />;
          })
          .sort((a, b) => {
            if (!!sortBy) {
              return 0;
            }

            return Number(b.key) - Number(a.key);
          })}
      </SC.EventsGrid>
      <PaginationBar itemsPerPage={Number(initSearch.limit)} />
    </Container>
  );
};
