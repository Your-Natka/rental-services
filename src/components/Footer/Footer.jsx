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

console.log(css);

export const Footer = ({ children }) => {
  return (
    <h1 className={css.title}>
      <GiSurferVan className={css.icon} />
      {children}
    </h1>
  );
};
