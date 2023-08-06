import { useSearchParams } from 'react-router-dom';

export const useAppSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';
  const category = searchParams.get('category') ?? '';
  const page = searchParams.get('page') ?? '';
  const limit = searchParams.get('limit') ?? '';
  const order = searchParams.get('order') ?? '';
  const sortBy = searchParams.get('sortBy') ?? '';

  return {
    search,
    category,
    page,
    limit,
    order,
    sortBy,
    setSearchParams,
    searchParams,
  };
};
