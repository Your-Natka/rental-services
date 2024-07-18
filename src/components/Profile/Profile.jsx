import clsx from 'clsx';
import './Profile.css';

export const Profile = ({ adverts: { gallery, name, price, favorite, rating, location } }) => {
  const statusClasses = clsx('status', {
    'is-favorite': favorite,
    'is-retired': !favorite,
  });
  return (
    <div className="profile-container">
      <img src={gallery[0]} alt={name} width="310" height="290" />
      <h2>{name}</h2>
      <p>{price}</p>
      <p className={statusClasses}>{favorite ? 'Favorite' : 'Retired'}</p>
      <p>{rating}</p>
      <p>{location}</p>
      {/* <p>{description}</p> */}
    </div>
  );
};
