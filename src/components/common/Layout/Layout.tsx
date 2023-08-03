import { Link, Outlet } from 'react-router-dom';
import { Container } from '../Container';

export const Layout = () => {
  return (
    <>
      <header>
        <Container>
          header---
          <Link to="create">create</Link>*<Link to="edit">edit</Link>*
          <Link to="1">eventId</Link>*<Link to="/">main</Link>*
        </Container>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
