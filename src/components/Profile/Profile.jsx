import clsx from 'clsx';
import css from './Profile.module.css';

console.log(css);

export const Profile = ({ adverts: { gallery, name, price, favorite, rating, location } }) => {
  // const statusClasses = clsx(css.status, {
  //   [css.isFavorite]: favorite,
  //   [css.isRetired]: !favorite,
  // });

  const statusClass = favorite ? css.isFavorite : css.isRetired;

  return (
    <div className={css.container}>
      <img src={gallery[0]} alt={name} width="310" height="290" />
      <h2 className={css.title}>{name}</h2>
      <p>{price}</p>
      {/* <p className={statusClasses}>{favorite ? 'Favorite' : 'Retired'}</p> */}
      <p className={statusClass}>{favorite ? 'Favorite' : 'Retired'}</p>
      <p>{rating}</p>
      <p>{location}</p>
      {/* <p>{description}</p> */}
    </div>
  );
};
