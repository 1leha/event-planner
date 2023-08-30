import { SVG } from 'img';
import { Button } from '../Button';
import * as SC from './MainHeader.styled';
import { useMediaQuery } from '@yamada-ui/use-media-query';
import { DropDownMenu } from '../DropDownMenu';
import { CategoryDropDown } from 'components/CategoryDropDown';
import { SortByDropDown } from 'components/SortByDropDown';

export const MainHeader = () => {
  const [tablet] = useMediaQuery(['(min-width: 768px)', '(max-width: 1320px)']);

  return (
    <SC.Wrapper>
      <SC.ButtonsWrapper>
        <CategoryDropDown />

        <SortByDropDown />

        <Button variant="primary" size="l" icon={<SVG.PlusIcon />}>
          Add new event
        </Button>
      </SC.ButtonsWrapper>

      {tablet && <SC.Title>My events</SC.Title>}
    </SC.Wrapper>
  );
};
