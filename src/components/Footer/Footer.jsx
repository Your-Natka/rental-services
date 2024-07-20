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
import { GiSurferVan } from 'react-icons/gi';

import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.contactBox}>
        <GiSurferVan className={css.icon} />
        <a href="mailto:natalya1.10nb@gmail.com" className={css.footerLink}>
          Natalya Bodnarchuk
        </a>
      </div>
      <p>2024</p>
    </footer>
  );
};
export default Footer;
