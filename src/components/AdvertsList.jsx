import { Profile } from './Profile';

export const AdvertsList = ({ items }) => {
  return (
    <ul>
      {items.map(adverts => (
        <li key={adverts.id}>
          <Profile adverts={adverts} />
        </li>
      ))}
    </ul>
  );
};
