import { useGetEventsLengthQuery } from 'redux/events/events.api';

interface IArg {
  category: string;
  search: string;
  itemsPerPage: number;
}

export const useTotalPages = ({ category, itemsPerPage, search }: IArg) => {
  const params = `${search ? `search=${search}` : ''}&${
    category ? `category=${category}` : ''
  }`;

  const {
    data: eventsLength,
    refetch,
    isLoading,
  } = useGetEventsLengthQuery(params);

  const totalPages = Math.ceil(Number(eventsLength) / itemsPerPage);

  return { eventsLength, refetch, isLoading, totalPages };
};
