import { NavLink } from 'react-router-dom';
import { GiSurferVan } from 'react-icons/gi';
import css from './PageTitle.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
export const PageTitle = () => {
  return (
    <header className={css.header}>
      <NavLink className={css.box_logo} to="/">
        <GiSurferVan className={css.icon} />
        <h1 className={css.title}>Rental services</h1>
      </NavLink>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={buildLinkClass}>
          Catalog
        </NavLink>
        <NavLink to="/favorites" className={buildLinkClass}>
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};
