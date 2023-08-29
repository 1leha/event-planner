import { ICategory } from 'helpers/interfaces/categories';
import { useGetCategoriesQuery } from 'redux/events/events.api';

interface IOutput {
  categoriesData: ICategory[] | [];
  isLoading?: boolean;
}

export const useCategories = (): IOutput => {
  const { data, isLoading } = useGetCategoriesQuery();

  const unicCategories = Array.from(new Set(data));

  const categoriesData = unicCategories.map((category, idx) => {
    return { id: idx, category };
  });

  return { categoriesData, isLoading };
};
