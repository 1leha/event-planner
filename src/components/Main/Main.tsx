import { Outlet } from 'react-router-dom';
import * as SC from './Main.styled';
import { Container } from 'components/common/Container';

export const Main = () => {
  return (
    <SC.Main>
      <Container>
        <Outlet />
      </Container>
    </SC.Main>
  );
};
