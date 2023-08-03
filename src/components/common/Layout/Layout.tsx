import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        header---
        <Link to="create">create</Link>*<Link to="edit">edit</Link>*
        <Link to="1">eventId</Link>*<Link to="/">main</Link>*
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
