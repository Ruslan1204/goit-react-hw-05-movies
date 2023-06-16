import { NavLink, Outlet, useParams } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  const { movieId } = useParams();
  return (
    <>
      <nav className={css.layout}>
        <NavLink to="/" className={`${css.home} ${css.activeLink}`}>
          <h2>Home</h2>
        </NavLink>
        <NavLink to="/movies" className={css.activeLink}>
          <h2>Movies</h2>
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
