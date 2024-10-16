import PropTypes from 'prop-types';

function ManuCard({img, name, desc, price}) {
  return (
    <div className="flex gap-3">
      <div>
        <img src={img} alt="logo image" />
      </div>
      <div>
        <p className="font-cinzel text-xl font-semibold text-left">{name}</p>
        <p className='text-left'>{desc}</p>
      </div>
      <div>
        <p className="text-[#D99904] font-semibold">{price}</p>
      </div>
    </div>
  );
}

export default ManuCard


ManuCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.text,
  price: PropTypes.string,
};