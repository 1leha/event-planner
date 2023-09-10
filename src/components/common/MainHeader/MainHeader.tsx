import { SVG } from 'img';
import { Button } from '../Button';
import * as SC from './MainHeader.styled';
import { useMediaQuery } from '@yamada-ui/use-media-query';
import { CategoryDropDown } from 'components/CategoryDropDown';
import { SortByDropDown } from 'components/SortByDropDown';
import { useLocation, useNavigate } from 'react-router-dom';

export const MainHeader = () => {
  const [tablet] = useMediaQuery(['(min-width: 768px)', '(max-width: 1320px)']);
  const navigate = useNavigate();
  const path = useLocation();

  const addEventHandler = () => {
    navigate('create', { state: { from: path } });
  };

  return (
    <SC.Wrapper>
      <SC.ButtonsWrapper>
        <CategoryDropDown />

        <SortByDropDown />

        <Button
          variant="primary"
          size="l"
          icon={<SVG.PlusIcon />}
          onClick={addEventHandler}
        >
          Add new event
        </Button>
      </SC.ButtonsWrapper>

      {tablet && <SC.Title>My events</SC.Title>}
    </SC.Wrapper>
  );
};
