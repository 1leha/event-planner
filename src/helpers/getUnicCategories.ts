import { IOption } from './interfaces/options';

export const getUnicCategories = (
  categories: string[] | undefined
): IOption[] | undefined => {
  const unicCaregoriesList = new Set();

  categories?.forEach(category => unicCaregoriesList.add(category));

  const unicCaregories = Array.from(unicCaregoriesList)?.map(
    (categoryName, idx) => ({ id: idx, name: categoryName })
  );
  return unicCaregories as IOption[];
};
