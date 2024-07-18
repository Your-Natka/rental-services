import css from './PageTitle.module.css';

console.log(css);

export const PageTitle = ({ children }) => {
  return <h1 className={css.title}>{children}</h1>;
};
