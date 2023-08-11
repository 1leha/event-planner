import { useGetCategoriesQuery } from 'redux/events/events.api';

interface IOutput {
  categories: string[] | [];
  isLoading?: boolean;
}

export const useCategories = (): IOutput => {
  const { data, isLoading } = useGetCategoriesQuery();

  const categories = Array.from(new Set(data));

  return { categories, isLoading };
};
