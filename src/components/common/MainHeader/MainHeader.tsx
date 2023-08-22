import { SVG } from 'img';
import { Button } from '../Button';
import * as SC from './MainHeader.styled';
import { useMediaQuery } from '@yamada-ui/use-media-query';

export const MainHeader = () => {
  const [tablet, desktop] = useMediaQuery([
    '(min-width: 768px)',
    '(max-width: 1320px)',
  ]);

  return (
    <SC.Wrapper>
      <SC.ButtonsWrapper>
        <Button variant="secondary" size="l" icon={<SVG.FilterIcon />}>
          Category
        </Button>

        <Button variant="secondary" size="l" icon={<SVG.SortByIcon />}>
          Sort by
        </Button>

        <Button variant="primary" size="l" icon={<SVG.PlusIcon />}>
          Add new event
        </Button>
      </SC.ButtonsWrapper>

      {tablet && <SC.Title>My events</SC.Title>}
    </SC.Wrapper>
  );
};
