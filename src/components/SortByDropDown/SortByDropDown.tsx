import { DropDownMenu } from 'components/common/DropDownMenu';
import { SVG } from 'img';
import { getSortOptions } from 'helpers/getSortOptions';
import { sortCriteria } from 'settings/sortCriteria';

const sortOptions = getSortOptions(sortCriteria);

export const SortByDropDown = () => {
  return (
    <DropDownMenu
      title="Sort by"
      name="sortBy"
      skipChangeTitle
      icon={<SVG.SortByIcon />}
      options={sortOptions}
      smallFirstLetterInOption
    />
  );
};
