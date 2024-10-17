import PropTypes from 'prop-types';
import bigManu from "../assets/cardimage/horizontalcard.png";

function BigManuCard({name, desc}) {
  return (
    <div
      className='bg-cover bg-center relative h-[500px]'
      style={{ backgroundImage: `url(${bigManu})` }}>
      <h1>{name}</h1>
      <p>{desc}</p>
    </div>
  )
}

export default BigManuCard

BigManuCard.propTypes = {
  name: PropTypes.text,
  desc: PropTypes.text,
};