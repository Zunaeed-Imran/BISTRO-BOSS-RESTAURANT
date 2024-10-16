import PropTypes from 'prop-types';

function ManuCard({img, name, desc, price}) {
  return (
    <div className='flex'>
      <div>
        <img src={img} alt="logo image" />
      </div>
      <div>
        <p>{name}</p>
        <p>{desc}</p>
      </div>
      <div>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default ManuCard


ManuCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.text,
  price: PropTypes.string,
};