import { SVG } from 'img';
import { Button } from '../Button';
import * as SC from './MainHeader.styled';
import { useMediaQuery } from '@yamada-ui/use-media-query';
import { useGetCategoriesQuery } from 'redux/events/events.api';
import { DropDownMenu } from '../DropDownMenu';

const mockOptions = [
  { id: 1, name: 'first', icon: <SVG.ArrowMenuIcon /> },
  { id: 2, name: 'second', icon: <SVG.ArrowMenuIcon /> },
];

const mockOptionsNoIcon = [
  { id: 1, name: 'first' },
  { id: 2, name: 'second' },
];

export const MainHeader = () => {
  const [tablet] = useMediaQuery(['(min-width: 768px)', '(max-width: 1320px)']);

  const { data: categories, isError, isLoading } = useGetCategoriesQuery();

  console.log('categories', categories);

  return (
    <SC.Wrapper>
      <SC.ButtonsWrapper>
        <DropDownMenu
          title="Categories"
          icon={<SVG.FilterIcon />}
          options={mockOptionsNoIcon}
          iconOnLeftIfMobile
        />
        <DropDownMenu
          title="Sort by"
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
