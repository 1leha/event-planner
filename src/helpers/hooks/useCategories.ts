export const useCategories = (categoryList: string[] | undefined) => {
  return Array.from(new Set(categoryList));
};
