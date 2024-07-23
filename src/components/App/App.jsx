// import adverts from '../../adverts.json';
// import { PageTitle } from '../PageTitle/PageTitle';
// import { AdvertsList } from '../AdvertsList/AdvertsList';
// import { Footer } from '../Footer/Footer';

// export const App = () => {
//   return (
//     <div>
//       <PageTitle>Camper Rent </PageTitle>
//       <AdvertsList items={adverts}></AdvertsList>
//       <Footer></Footer>
//     </div>
//   );
// };
import { Route, Routes } from 'react-router-dom';

// const HomePage = lazy(() => import('../../pages/HomePage'));
// const CatalogPage = lazy(() => import('../../pages/CatalogPage'));
// const FavoritesPage = lazy(() => import('../../pages/FavoritesPage'));
// const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));

export const App = () => {
  return (
    <div>
      <h1>Hello!</h1>
      <Routes>
        <Route path="/" element={<div>Home page</div>}>
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};
