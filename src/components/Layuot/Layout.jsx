import { Outlet } from 'react-router-dom';
// import PageTitle from '../PageTitle/PageTitle';
import css from '../Layuot/Layuot.module.css';
// import Footer from '../Footer/Footer';
import { Suspense } from 'react';

export default function Layout() {
  return (
    <div className={css.containerMain}>
      {/* <PageTitle></PageTitle> */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Footer></Footer> */}
    </div>
  );
}
