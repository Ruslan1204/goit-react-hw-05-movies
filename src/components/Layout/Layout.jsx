import { NavLink, Outlet} from 'react-router-dom';

const Layout = () => {

  return (
    <>
      <nav>
        <NavLink to="/" >
          <h2>Home</h2>
        </NavLink>
        <NavLink to="/movies">
          <h2>Movies</h2>
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
