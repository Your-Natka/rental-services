import adverts from '../../adverts.json';
import { PageTitle } from '../PageTitle/PageTitle';
import { AdvertsList } from '../AdvertsList/AdvertsList';

export const App = () => {
  return (
    <div>
      <PageTitle>Camper Rent </PageTitle>
      <AdvertsList items={adverts}></AdvertsList>
    </div>
  );
};
