import { Profile } from '../Profile/Profile';
import './AdvertsList.css';
export const AdvertsList = ({ items }) => {
  return (
    <ul className="list">
      {items.map(adverts => (
        <li key={adverts.id}>
          <Profile adverts={adverts} />
        </li>
      ))}
    </ul>
  );
};
