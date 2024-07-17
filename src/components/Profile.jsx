export const Profile = ({ adverts: { gallery, name, price, favorite, rating, location } }) => {
  return (
    <div>
      <img src={gallery} alt={name} width="290" height="310" />
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{favorite ? 'Favorite' : 'Retired'}</p>
      <p>{rating}</p>
      <p>{location}</p>
      {/* <p>{description}</p> */}
    </div>
  );
};

// Profile({
//   adverts: adverts,
// });
