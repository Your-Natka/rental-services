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
import { Layout } from '../Layuot/Layout';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PageTitle } from '../PageTitle/PageTitle';
import Footer from '../Footer/Footer';
// import { fetchAdverts } from '../redux/advert/operations';

const HomePage = lazy(() => import('../pages/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <Routes>
      <PageTitle></PageTitle>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Footer></Footer>
    </Routes>
  );
}

export default App;
