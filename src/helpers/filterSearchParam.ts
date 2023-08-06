export const filterSearchParam = (searchParams: object) => {
  const filtredSPArr = Object.entries(searchParams).filter(paramArr => {
    return paramArr[1] !== '';
  });

  return Object.fromEntries(filtredSPArr);
};
