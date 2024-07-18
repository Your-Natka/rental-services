import adverts from '../../adverts.json';
import { PageTitle } from '../PageTitle/PageTitle';
import { AdvertsList } from '../AdvertsList/AdvertsList';
import './App.css';

export const App = () => {
  return (
    <div>
      <PageTitle>Camper Rent </PageTitle>
      <AdvertsList items={adverts}></AdvertsList>
    </div>
  );
};
