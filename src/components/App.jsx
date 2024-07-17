import adverts from '../adverts.json';
import { PageTitle } from './PageTitle';
import { AdvertsList } from './AdvertsList';

export const App = () => {
  return (
    <div>
      <PageTitle text="Camper Rent"> </PageTitle>
      <AdvertsList items={adverts}></AdvertsList>
    </div>
  );
};
