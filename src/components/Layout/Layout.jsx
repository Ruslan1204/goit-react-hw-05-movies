import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import css from './Layout.module.css';

const Layout = () => {
  
//  const setActive = ({isActive}) => isActive ? css.active : '';

  return (
    <>
      <header>
        <nav className={css.layout}>
          <NavLink to="/" className={`${css.home} ${css.activeLink}`} exact>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.activeLink} exact>Movies</NavLink>
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
