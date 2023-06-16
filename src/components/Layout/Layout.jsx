import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import css from './Layout.module.css';

// const setActive=({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "";
// className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}

const Layout = () => {
  return (
    <>
      <header>
        {/* <nav className={`${css.layout} ${css.links}`}>
         */}
        <nav className={css.layout}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${css.active}` : `${css.pending}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? `${css.active}` : `${css.pending}`
            }
          >
            Movies
          </NavLink>
        </nav>
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
