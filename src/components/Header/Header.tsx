import { Container } from 'components/common/Container';
import * as SC from './Header.styled';
import { HeaderMobile } from './HeaderMobile';
import { HeaderStandart } from './HeaderStandart';
import { useMediaQuery } from '@yamada-ui/use-media-query';

export const Header = () => {
  const [tablet] = useMediaQuery('(min-width: 768px)');

  return (
    <SC.Header>
      <Container>{tablet ? <HeaderStandart /> : <HeaderMobile />}</Container>
    </SC.Header>
  );
};
