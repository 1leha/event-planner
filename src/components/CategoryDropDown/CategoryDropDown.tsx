import { DropDownMenu } from 'components/common/DropDownMenu';
import { IOption } from 'helpers/interfaces/options';
import { SVG } from 'img';
import { useGetCategoriesQuery } from 'redux/events/events.api';

export const CategoryDropDown = () => {
  const { data, isError, isLoading } = useGetCategoriesQuery();

  const categories: IOption[] | undefined = data?.map((category, idx) => ({
    id: idx,
    name: category,
  }));

  return (
    <DropDownMenu
      title="Categories"
      name="category"
      icon={<SVG.FilterIcon />}
      options={categories}
      iconOnLeftIfMobile
    />
  );
};
