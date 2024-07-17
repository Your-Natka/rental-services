import { Profile } from './Profile';
import adverts from '../adverts.json';

function App() {
  return (
    <div>
      <h1>Camper Rent</h1>
      {adverts.map(adverts => (
        <Profile key={adverts.id} adverts={adverts} />
      ))}
    </div>
  );
}

export default App;
