import { Container } from 'components/common/Container';
import * as SC from './Header.styled';
import { HeaderMobile } from './HeaderMobile';
import { useMediaQuery } from '@yamada-ui/use-media-query';
import { HeaderStandart } from './HeaderStandart';

export const Header = () => {
  const [tablet] = useMediaQuery('(min-width: 768px)');

  return (
    <SC.Header>
      <Container>{tablet ? <HeaderStandart /> : <HeaderMobile />}</Container>
    </SC.Header>
  );
};
