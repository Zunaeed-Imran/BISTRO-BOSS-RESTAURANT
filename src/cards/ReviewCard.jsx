import PropTypes from 'prop-types';

function ReviewCard({logo, img, desc, name}) {
  return (
    <div>
      <p>{logo}</p>
      <img src={img} alt="Logo Image" />
      <p>{desc}</p>
      <h1>{name}</h1>
    </div>
  )
}

export default ReviewCard

ReviewCard.propTypes = {
  logo: PropTypes.string,
  img: PropTypes.string,
  desc: PropTypes.text,
  name: PropTypes.text,
};