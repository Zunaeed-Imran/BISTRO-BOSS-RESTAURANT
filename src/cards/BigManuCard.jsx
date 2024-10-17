import PropTypes from 'prop-types';
import bigManu from "../assets/cardimage/horizontalcard.png";

function BigManuCard({name, desc}) {
  return (
    <div
      className='bg-cover bg-center relative h-[400px]'
      style={{ backgroundImage: `url(${bigManu})` }}>
      <h1 className=' text-2xl'>{name}</h1>
      <p className=''>{desc}</p>
    </div>
  )
}

export default BigManuCard

BigManuCard.propTypes = {
  name: PropTypes.text,
  desc: PropTypes.text,
};