import { SVG } from 'img';
import { Button } from '../Button';
import * as SC from './MainHeader.styled';
import { useMediaQuery } from '@yamada-ui/use-media-query';
import { DropDownMenu } from '../DropDownMenu';
import { CategoryDropDown } from 'components/CategoryDropDown';

const mockOptionsNoIcon = [
  { id: 1, name: 'first' },
  { id: 2, name: 'second' },
];

const mockOptions = [
  { id: 1, name: 'first', icon: <SVG.ArrowMenuIcon /> },
  { id: 2, name: 'second', icon: <SVG.ArrowMenuIcon /> },
];

export const MainHeader = () => {
  const [tablet] = useMediaQuery(['(min-width: 768px)', '(max-width: 1320px)']);

  return (
    <SC.Wrapper>
      <SC.ButtonsWrapper>
        <CategoryDropDown />
        {/* <DropDownMenu
          title="Categories"
          icon={<SVG.FilterIcon />}
          options={mockOptionsNoIcon}
          iconOnLeftIfMobile
        /> */}
        <DropDownMenu
          title="Sort by"
          name="sortBy"
          skipChangeTitle
          icon={<SVG.SortByIcon />}
          options={mockOptions}
          smallFirstLetterInOption
        />

        <Button variant="primary" size="l" icon={<SVG.PlusIcon />}>
          Add new event
        </Button>
      </SC.ButtonsWrapper>

      {tablet && <SC.Title>My events</SC.Title>}
    </SC.Wrapper>
  );
};
