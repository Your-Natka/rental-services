import { GiSurferVan } from 'react-icons/gi';
import css from './PageTitle.module.css';

console.log(css);

export const PageTitle = ({ children }) => {
  return (
    <h1 className={css.title}>
      <GiSurferVan className={css.icon} />
      {children}
    </h1>
  );
};
