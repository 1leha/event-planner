import { DropDownMenu } from 'components/common/DropDownMenu';
import { getUnicCategories } from 'helpers/getUnicCategories';
import { SVG } from 'img';
import { useGetCategoriesQuery } from 'redux/events/events.api';

export const CategoryDropDown = () => {
  const { data, isError, isLoading } = useGetCategoriesQuery();

  return (
    <DropDownMenu
      title="Categories"
      name="category"
      icon={<SVG.FilterIcon />}
      options={getUnicCategories(data)}
      iconOnLeftIfMobile
    />
  );
};
