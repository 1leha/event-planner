import { Outlet } from 'react-router-dom';
import * as SC from './Main.styled';

export const Main = () => {
  return (
    <SC.Main>
      <Outlet />
    </SC.Main>
  );
};
