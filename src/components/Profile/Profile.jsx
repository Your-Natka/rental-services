import { FaStar } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { FaHeart } from 'react-icons/fa6';
import css from './Profile.module.css';
import defaultGallery from './default-gallery.png';

export const Profile = ({ adverts: { gallery, name, price, favorite, rating, location } }) => {
  const profileImage = gallery || defaultGallery;

  const statusClass = favorite ? css.isFavorite : css.isRetired;

  const handleClick = () => {
    console.log(Date.now());
  };

  const handleEnter = evt => {
    console.log(evt);
  };

  return (
    <div className={css.container}>
      <img className={css.card} src={gallery[0]} alt={name} width="310" height="290" />
      <div>
        <h2 className={css.title}>{name}</h2>
        <p className={css.title}>
          €{price}
          <span className={statusClass}>
            <FaHeart className={css.icon} />
            {favorite ? 'Favorite' : 'Retired'}
          </span>
        </p>
        <p>
          <FaStar className={css.iconFa} />
          {rating}
          <IoLocationOutline className={css.icon} />
          {location}
        </p>
      </div>
      <p>The pictures shown here are example vehicles of the respective.</p>
      <button className={css.button} type="button" onClick={handleClick} onMouseEnter={handleEnter}>
        Show more
      </button>
    </div>
  );
};
