// import { Link } from 'react-router-dom';

// export const Footer = ({ children }) => {
//   return (
//     <h1 className={css.title}>
//       {'Copyright © '}
//       <Link className={css.logo} href="mailto:natalya1.10nb@gmail.com">
//         Nataliia Bodnarchuk
//       </Link>
//       <GiSurferVan className={css.icon} />
//       {children}
//     </h1>
//   );
// };
import { NavLink } from 'react-router-dom';
import { GiSurferVan } from 'react-icons/gi';
import css from '../Footer/Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.contactBox}>
        <GiSurferVan className={css.icon} />

        <NavLink className={css.logo} href="mailto:natalya1.10nb@gmail.com">
          Natalya Bodnarchuk
        </NavLink>
      </div>
      <p>2024</p>
    </footer>
  );
};
export default Footer;
